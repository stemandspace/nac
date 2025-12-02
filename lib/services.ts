"use server";

import axios from "axios";
import { client } from "@/api";

const COSMIC_KIDS_API_BASE = 'https://api.cosmickids.club/api';
const ZEPTO_MAIL_API_URL = 'https://api.zeptomail.in/v1.1/email/template/batch';
const ZEPTO_MAIL_TEMPLATE_KEY = '2518b.5ca07f11c3f3c129.k1.71ca9510-7de5-11f0-8e5b-525400c92439.198c86170e1';


const updateStudentMailStatus = async (studentDocumentId: string, mailSent: boolean) => {
    try {
        const student = await client.collection('students').update(studentDocumentId, {
            "mail_sent": mailSent
        });
        console.log("student", student);
        return student;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to update student mail status');
    }
}

const isEmailRegisteredInCosmicKids = async (email: string) => {
    if (!email) {
        throw new Error('Email is required');
    }
    try {
        const url = `${COSMIC_KIDS_API_BASE}/users?filters[email][$eq]=${encodeURIComponent(email)}&fields[0]=id`;
        const response = await axios.get(url);
        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
            return { registered: true, userId: response.data[0].id };
        }
        return { registered: false };
    } catch (error) {
        console.error(error);
        throw new Error('Failed to check email registration status');
    }
}

const getCosmicKidsAccountDetails = async (email: string) => {
    if (!email) {
        throw new Error('Email is required');
    }
    try {
        const url = `${COSMIC_KIDS_API_BASE}/users?filters[email][$eq]=${encodeURIComponent(email)}&populate=*`;
        const response = await axios.get(url);
        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
            const user = response.data[0];
            return {
                registered: true,
                userId: user.id,
                username: user.username,
                email: user.email,
                confirmed: user.confirmed,
                blocked: user.blocked,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
                provider: user.provider,
                role: user.role?.name || 'User',
                credits: user.credits || 0,
                membership: user.type,
                membership_date: user.premium,
                lastLogin: user.lastLogin || null
            };
        }
        return { registered: false };
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch Cosmic Kids account details');
    }
}


const createCosmicKidsAccount = async ({ username, email, password }: { username: string, email: string, password: string }) => {
    if (!username || !email || !password) {
        throw new Error('Username, email, and password are required');
    }
    try {
        const url = `${COSMIC_KIDS_API_BASE}/auth/local/register`;
        const payload = {
            username,
            email,
            password
        };
        const response = await axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error: any) {
        console.error('Error creating Cosmic Kids account:', error);
        console.error('Error response:', error.response?.data);
        console.error('Error status:', error.response?.status);

        // Extract detailed error message from response
        let errorMessage = 'Failed to create account in Cosmic Kids Club';

        if (error.response?.data) {
            const errorData = error.response.data;

            // Handle Strapi error format
            if (errorData.error) {
                if (errorData.error.message) {
                    errorMessage = `Failed to create account: ${errorData.error.message}`;
                } else if (typeof errorData.error === 'string') {
                    errorMessage = `Failed to create account: ${errorData.error}`;
                }
            }

            // Handle validation errors
            if (errorData.message) {
                if (Array.isArray(errorData.message)) {
                    errorMessage = `Validation error: ${errorData.message.join(', ')}`;
                } else {
                    errorMessage = `Failed to create account: ${errorData.message}`;
                }
            }
        } else if (error.message) {
            errorMessage = `Failed to create account: ${error.message}`;
        }

        throw new Error(errorMessage);
    }
}

const triggerStudentConfirmationMail = async ({
    email,
    password,
    grade,
    name,
    addon_title
}: {
    email: string,
    password: string,
    grade: string,
    name: string,
    addon_title: string
}) => {

    const to = [{
        email_address: {
            address: email,
            name: email
        },
        merge_info: {
            password: password,
            grade: grade,
            name: name,
            email: email,
            addon: addon_title
        }
    },
    {
        email_address: {
            address: "ckc@stemandspace.com",
            name: "School Registration"
        },
        merge_info: {
            password: password,
            grade: grade,
            name: name,
            email: email,
            addon: addon_title
        }
    }];

    const payload = {
        mail_template_key: ZEPTO_MAIL_TEMPLATE_KEY,
        from: {
            address: "noreply@spacetopia.in",
            name: "noreply"
        },
        to
    };

    try {
        const response = await axios.post(ZEPTO_MAIL_API_URL, payload, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Zoho-enczapikey ${process.env.NEXT_PUBLIC_ZEPTO_MAIL_API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to send ZeptoMail batch email');
    }
}

const sendWhatsAppMessage = async ({
    mobileNumber,
    templateId,
    parameters
}: {
    mobileNumber: string,
    templateId: string,
    parameters: Array<{ type: string, text: string }>
}) => {
    const ULGEBRA_WEBHOOK_URL = 'https://api.ulgebra.com/v1/workflows?extensionName=whatsappforspreadsheet';
    const ULGEBRA_WEBHOOK_AUTHTOKEN = process.env.NEXT_PUBLIC_ULGEBRA_WEBHOOK_AUTHTOKEN;

    // Ensure mobile number has proper format

    const payload = {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        whatsAppSenderID: "133634283159197",
        to: mobileNumber,
        type: "template",
        source: {
            type: "uaapp-workflow",
            email: "school@stemandspace.com",
            name: "School",
            id: "HUtwpkaYCXUbMF1ip2AynrUpj9T2",
            pic: "https://lh3.googleusercontent.com/a/ACg8ocLMYMfcimGoZJXpaTECZQbIEvD4xvOY_ej4BowWDD8u=s96-c",
            uaApp: "whatsappforspreadsheet",
            uaAppSaaSOrgID: "HUtwpkaYCXUbMF1ip2AynrUpj9T2",
            uaAppSaaSUserId: "HUtwpkaYCXUbMF1ip2AynrUpj9T2"
        },
        template: {
            name: templateId,
            language: {
                code: "en"
            },
            components: [
                {
                    type: "body",
                    parameters: parameters
                }
            ]
        },
        from: "919560554900",
        module: "excel",
        recordId: "FILL_HERE",
        channel: "WhatsApp",
        default_country_code: "91",
        ulgebra_webhook_authtoken: ULGEBRA_WEBHOOK_AUTHTOKEN
    };

    try {
        console.log('Sending WhatsApp message with payload:', JSON.stringify(payload, null, 2));

        const response = await axios.post(ULGEBRA_WEBHOOK_URL, payload, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        console.log('WhatsApp message sent successfully:', response.data);
        return response.data;
    } catch (error: any) {
        console.error('Error sending WhatsApp message:', error);
        console.error('Error response:', error.response?.data);
        console.error('Error status:', error.response?.status);

        // Provide more detailed error message
        const errorMessage = error.response?.data?.message ||
            error.response?.data?.error ||
            error.message ||
            'Failed to send WhatsApp message';

        throw new Error(`WhatsApp Error: ${errorMessage}`);
    }
};

const updateStudentWhatsAppStatus = async (studentDocumentId: string, whatsappSent: boolean) => {
    try {
        const student = await client.collection('students').update(studentDocumentId, {
            "wa_sent": whatsappSent
        });
        console.log("student whatsapp status updated", student);
        return student;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to update student WhatsApp status');
    }
};

export { triggerStudentConfirmationMail, isEmailRegisteredInCosmicKids, getCosmicKidsAccountDetails, createCosmicKidsAccount, updateStudentMailStatus, sendWhatsAppMessage, updateStudentWhatsAppStatus };
