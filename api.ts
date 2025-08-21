import { strapi } from '@strapi/client';

const client = strapi({ baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api` });

export {
    client
}