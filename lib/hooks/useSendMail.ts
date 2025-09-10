import { useState, useCallback } from "react";
import { type Student } from "@/lib/hooks/useStudents";
import { isEmailRegisteredInCosmicKids, createCosmicKidsAccount, triggerStudentConfirmationMail, updateStudentMailStatus } from "@/lib/services";
import { useSWRConfig } from "swr";
import { useRouter } from "next/navigation";
// Constants
const ADDON_TITLE = "N/A";
const EXISTING_ACCOUNT_MESSAGE = "Your account has already been created. You can go to the Spacetopia website to change your password.";

// Types
interface MailResult {
    success: boolean;
    data?: any;
    error?: string;
}

interface UseSendMailReturn {
    sendStudentConfirmationMail: (student: Student) => Promise<MailResult>;
    isLoading: boolean;
    error: string | null;
    clearError: () => void;
}

const useSendMail = (): UseSendMailReturn => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    const generatePassword = useCallback((): string => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }, []);

    const createMailPayload = useCallback((student: Student, password: string) => ({
        addon_title: ADDON_TITLE,
        password,
        grade: student.grade,
        email: student.email,
        name: student.name,
    }), []);

    const sendStudentConfirmationMail = useCallback(async (student: Student): Promise<MailResult> => {
        try {
            setIsLoading(true);
            setError(null);

            // Determine if this is a resend or new send
            const isResend = student.mail_sent;

            if (isResend) {
                // For resend, use existing account message
                const payload = createMailPayload(student, EXISTING_ACCOUNT_MESSAGE);
                const result = await triggerStudentConfirmationMail(payload);
                await updateStudentMailStatus(student.documentId, true);
                alert('Email re-sent successfully for existing account');
                return { success: true, data: result };
            }

            // For new send, check if email is already registered
            const registrationStatus = await isEmailRegisteredInCosmicKids(student.email);

            if (registrationStatus.registered) {
                // Email already registered, send with existing account message
                const payload = createMailPayload(student, EXISTING_ACCOUNT_MESSAGE);
                const result = await triggerStudentConfirmationMail(payload);
                await updateStudentMailStatus(student.documentId, true);
                alert('Email sent successfully for existing account');
                return { success: true, data: result };
            }

            // Email not registered, create new account
            const newPassword = generatePassword();
            await createCosmicKidsAccount({
                username: student.email,
                email: student.email,
                password: newPassword,
            });

            // Send confirmation mail with new password
            const payload = createMailPayload(student, newPassword);
            const result = await triggerStudentConfirmationMail(payload);
            await updateStudentMailStatus(student.documentId, true);
            alert('Email sent successfully for new account');
            return { success: true, data: result };
        } catch (error) {
            console.error(error);
            const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
            setError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setIsLoading(false);
            router.refresh();
        }
    }, [createMailPayload, generatePassword]);

    return {
        sendStudentConfirmationMail,
        isLoading,
        error,
        clearError
    };
};

export default useSendMail;