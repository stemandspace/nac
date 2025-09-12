import { strapi } from '@strapi/client';

const client = strapi({
    baseURL: `https://api-nac.spacetopia.in/api`,
});

export { client };