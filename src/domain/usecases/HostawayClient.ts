import { HttpClient } from '@src/datasource/HttpClient.interface';
import { logger } from '../../plugins/logger.plugin';
import { PMSClient } from './PMSClient.interface';

export class HostawayClient implements PMSClient {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;;
    }

    async getListings(): Promise<any> {
        try {
            const response: any = await this.httpClient.get('listings');
            return response;
        } catch (error) {
            logger.error(`Error obtaining listings: ${(error as any).message}`);
            return [];
        }
    }

    async getListingsByCountry(country: string, limit: number, offset: number, sortOrder: string): Promise<any> {

    }

    async getListingsByCity(city: string, limit: number, offset: number, sortOrder: string): Promise<any> {

    }
}
