import { HttpClient } from '@src/datasource/HttpClient.interface';
import axios, { AxiosInstance } from 'axios';

export class HostawayApi implements HttpClient {
    private client: AxiosInstance;
    private clientId: string;
    private clientSecret: string
    private baseURL: string;

    constructor(clientId: string, clientSecret: string) {
        this.baseURL = 'https://api.hostaway.com/v1/';
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.client = this.getAxiosClient(this.baseURL);
    }

    private getAxiosClient(baseURL: string, accessToken: string = ""): AxiosInstance {
        return axios.create({
            baseURL,
            headers: {
                Authorization: accessToken ? `Bearer ${accessToken}` : undefined
            }
        });
    }

    async get<T>(url: string, config?: any): Promise<T> {
        const response = await this.client.get<T>(url, config);
        return response.data;
    }

    async post<T>(url: string, data: any, config?: any): Promise<T> {
        const response = await this.client.post<T>(url, data, config);
        return response.data;
    }

    async put<T>(url: string, data: any, config?: any): Promise<T> {
        const response = await this.client.put<T>(url, data, config);
        return response.data;
    }

    async delete<T>(url: string, config?: any): Promise<T> {
        const response = await this.client.delete<T>(url, config);
        return response.data;
    }

    isAuthenticated(): boolean {
        return true;
    }

    authenticate(accesstoken: string): void {
        this.client = this.getAxiosClient(this.baseURL, accesstoken);
    }

    async getAccessToken(): Promise<string> {
        const response: any = await this.post('accessTokens', new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: this.clientId,
            client_secret: this.clientSecret,
            scope: 'general'
        }).toString(), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        const accessToken = response.access_token;
        return accessToken;
    }
}
