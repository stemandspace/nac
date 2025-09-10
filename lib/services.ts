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

export { triggerStudentConfirmationMail, isEmailRegisteredInCosmicKids, createCosmicKidsAccount, updateStudentMailStatus };
