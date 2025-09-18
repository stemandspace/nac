"use server";

import axios from "axios";
import { client } from "@/api";

const COSMIC_KIDS_API_BASE = 'https://api.cosmickids.club/api';
const ZEPTO_MAIL_API_URL = 'https://api.zeptomail.in/v1.1/email/template/batch';
const ZEPTO_MAIL_API_KEY = 'PHtE6r0PQe++iWMt80VStKSxQMWhZ94nru40f1FC491HAvMHFk1Vq9gslTGzrB0sVaJGF/GTzoxgtuud4ujRd2u7YW9IDWqyqK3sx/VYSPOZsbq6x00csF4dck3aXIXsdddq0CTUvtzeNA==';
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
    } catch (error) {
        console.error(error);
        throw new Error('Failed to create account in Cosmic Kids Club');
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
                'Authorization': `Zoho-enczapikey ${ZEPTO_MAIL_API_KEY}`
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
    const ULGEBRA_WEBHOOK_AUTHTOKEN = 'd2hhdHNhcHBmb3JzcHJlYWRzaGVldC5IVXR3cGthWUNYVWJNRjFpcDJBeW5yVXBqOVQyLl9TQUFTXzczZTJiOTExMDA4My00NTE0LWExMzYtY2ViMGJkYTJmNDU4';

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

export { triggerStudentConfirmationMail, isEmailRegisteredInCosmicKids, createCosmicKidsAccount, updateStudentMailStatus, sendWhatsAppMessage, updateStudentWhatsAppStatus };
