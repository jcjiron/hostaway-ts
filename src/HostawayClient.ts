import { AxiosError, AxiosInstance } from 'axios';
import { createHttpClient } from './plugins/axios.plugin';
import { logger } from './plugins/logger.plugin';
import { PMSClient } from './interfaces/PMSClient';

export class HostawayClient implements PMSClient {
    private clientId: string;
    private clientSecret: string;
    private accessToken: string | null = null;
    private httpClient: AxiosInstance;

    constructor(clientId: string, clientSecret: string) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.httpClient = createHttpClient('https://api.hostaway.com/v1/');

        if (!this.accessToken) {
            this.authenticate().then();
        }
    }

    static async create(clientId: string, clientSecret: string): Promise<PMSClient> {
        const instance = new HostawayClient(clientId, clientSecret);
        await instance.authenticate(); // Espera a que la autenticación termine antes de devolver la instancia
        return instance;
    }

    async authenticate(): Promise<void> {
        try {
            const response = await this.httpClient.post('accessTokens', new URLSearchParams({
                grant_type: 'client_credentials',
                client_id: this.clientId,
                client_secret: this.clientSecret,
                scope: 'general'
            }).toString(), {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            this.accessToken = response.data.access_token;
            this.httpClient = createHttpClient('https://api.hostaway.com/v1/', this.accessToken);
        } catch (error) {
            logger.error(`Error obtaining access token: ${(error as AxiosError).message}`);
        }
    }


    async getListings(): Promise<any> {
        try {
            const response = await this.httpClient.get('listings');
            return response.data;
        } catch (error) {
            logger.error(`Error obtaining listings: ${(error as AxiosError).message}`);
            return [];
        }
    }

    async getListingsByCountry(country: string, limit: number, offset: number, sortOrder: string): Promise<any> {

    }

    async getListingsByCity(city: string, limit: number, offset: number, sortOrder: string): Promise<any> {

    }
}
