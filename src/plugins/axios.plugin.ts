import axios, { AxiosInstance } from 'axios';

const createHttpClient = (baseURL: string, accessToken: string | null = null): AxiosInstance => {
    const client = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (accessToken) {
        client.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return client;
};

export { createHttpClient };