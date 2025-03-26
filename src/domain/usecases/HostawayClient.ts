import { HttpClient } from '@src/datasource/HttpClient.interface';
import { logger } from '../../plugins/logger.plugin';
import { PMSClient } from './PMSClient.interface';
import { Response } from '../models/Listing';

export class HostawayClient implements PMSClient {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;;
    }

    async getListings(): Promise<Response> {
        try {
            const response: any = await this.httpClient.get('listings');
            return response;
        } catch (error) {
            logger.error(`Error obtaining listings: ${(error as any).message}`);
            return {
                status: 'error',
                result: [],
                count: 0,
                limit: 100,
                offset: null
            };
        }
    }

    async getListingsByCountry(country: string, limit: number, offset: number, sortOrder: string): Promise<Response> {
        try {
            const response: Response = await this.httpClient.get(`listings`, { params: { country, limit, offset, sortOrder } });
            return response;
        } catch (error) {
            logger.error(`Error obtaining listings by country: ${(error as any).message}`);
            return {
                status: 'error',
                result: [],
                count: 0,
                limit: 100,
                offset: null
            };
        }
    }
    async getListingsByCity(city: string, limit: number, offset: number, sortOrder: string): Promise<Response> {
        try {
            const response: Response = await this.httpClient.get(`listings`, { params: { city, limit, offset, sortOrder } });
            return response;
        } catch (error) {
            logger.error(`Error obtaining listings by city: ${(error as any).message}`);
            return {
                status: 'error',
                result: [],
                count: 0,
                limit: 100,
                offset: null
            };
        }
    }
}
