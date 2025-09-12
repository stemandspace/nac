import axios from 'axios';

const client = axios.create({
    baseURL: `https://api-nac.spacetopia.in/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export { client };