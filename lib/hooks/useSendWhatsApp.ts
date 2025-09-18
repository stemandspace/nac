import { useState, useCallback } from "react";
import { type Student } from "@/lib/hooks/useStudents";
import { sendWhatsAppMessage, updateStudentWhatsAppStatus } from "@/lib/services";
import { useRouter } from "next/navigation";


// WhatsApp template mapping based on addon type
const getWhatsAppTemplate = (addon_id: string | undefined): string => {
    if (!addon_id) {
        return 'nac_spacetopia_no_cre';
    }
    const templateMap: { [key: string]: string } = {
        'credits': 'nac_spacetopia_cre',
        'basic': 'nac_spacetopia_protostar',
        'premium': 'nac_spacetopia_supernova'
    };
    return templateMap[addon_id] || 'nac_spacetopia_no_cre';
};

// Types
interface WhatsAppResult {
    success: boolean;
    data?: any;
    error?: string;
}

interface UseSendWhatsAppReturn {
    sendStudentWhatsAppMessage: (student: Student) => Promise<WhatsAppResult>;
    isLoading: boolean;
    error: string | null;
    clearError: () => void;
}

const useSendWhatsApp = (): UseSendWhatsAppReturn => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    const createWhatsAppPayload = useCallback((student: Student) => {
        // Determine addon type from selected_addon or default to 'basic'
        const addonType = student.selected_addon?.addon_id;
        console.log('addonType', addonType);
        const templateId = getWhatsAppTemplate(addonType);

        // Create parameters for WhatsApp template
        const parameters = [
            { type: "text", text: student.name },
        ];

        return {
            mobileNumber: student.phone,
            templateId,
            parameters
        };
    }, []);

    const sendStudentWhatsAppMessage = useCallback(async (student: Student): Promise<WhatsAppResult> => {
        try {
            setIsLoading(true);
            setError(null);

            // Check if phone number exists
            if (!student.phone) {
                throw new Error('Phone number is required to send WhatsApp message');
            }

            // Validate phone number format
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(student.phone.replace(/\s/g, ''))) {
                throw new Error('Invalid phone number format');
            }

            // Create WhatsApp payload
            const payload = createWhatsAppPayload(student);
            console.log('WhatsApp payload created:', payload);

            // Send WhatsApp message
            const result = await sendWhatsAppMessage(payload);

            // Update student WhatsApp status
            await updateStudentWhatsAppStatus(student.documentId, true);

            alert('WhatsApp message sent successfully');
            return { success: true, data: result };
        } catch (error) {
            console.error('WhatsApp send error:', error);
            const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
            setError(errorMessage);
            alert(`WhatsApp Error: ${errorMessage}`);
            return { success: false, error: errorMessage };
        } finally {
            setIsLoading(false);
            router.refresh();
        }
    }, [createWhatsAppPayload]);

    return {
        sendStudentWhatsAppMessage,
        isLoading,
        error,
        clearError
    };
};

export default useSendWhatsApp;
