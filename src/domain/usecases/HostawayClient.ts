import { HttpClient } from '@src/datasource/HttpClient.interface';
import { logger } from '../../plugins/logger.plugin';
import { PMSClient } from './PMSClient.interface';
import { Response } from '../models/Listing';

export class HostawayClient implements PMSClient {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
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

    async getListingById(listingId: number): Promise<Response> {
        try {
            const response: Response = await this.httpClient.get(`listings/${listingId}`);
            return response;
        } catch (error) {
            logger.error(`Error obtaining listing by id: ${(error as any).message}`);
            return {
                status: 'error',
                result: [],
                count: 0,
                limit: 100,
                offset: null
            };
        }
    }

    async getCalendar(listingId: number, startDate: string, endDate: string): Promise<Response> {
        try {
            const response: Response = await this.httpClient.get(`listings/${listingId}/calendar`, {
                params: { startDate, endDate }
            });
            return response;
        } catch (error) {
            logger.error(`Error obtaining calendar: ${(error as any).message}`);
            return {
                status: 'error',
                result: [],
                count: 0,
                limit: 100,
                offset: null
            };
        }
    }

    async getReservations(limit?: number, offset?: number, sortOrder?: string): Promise<Response> {
        try {
            const response: Response = await this.httpClient.get('reservations', {
                params: { limit, offset, sortOrder }
            });
            return response;
        } catch (error) {
            logger.error(`Error obtaining reservations: ${(error as any).message}`);
            return {
                status: 'error',
                result: [],
                count: 0,
                limit: 100,
                offset: null
            };
        }
    }

    async getReservationById(reservationId: number): Promise<Response> {
        try {
            const response: Response = await this.httpClient.get(`reservations/${reservationId}`);
            return response;
        } catch (error) {
            logger.error(`Error obtaining reservation by id: ${(error as any).message}`);
            return {
                status: 'error',
                result: [],
                count: 0,
                limit: 100,
                offset: null
            };
        }
    }

    async createReservation(reservationData: any): Promise<Response> {
        try {
            const response: Response = await this.httpClient.post('reservations', reservationData);
            return response;
        } catch (error) {
            logger.error(`Error creating reservation: ${(error as any).message}`);
            return {
                status: 'error',
                result: [],
                count: 0,
                limit: 100,
                offset: null
            };
        }
    }

    async updateReservation(reservationId: number, reservationData: any): Promise<Response> {
        try {
            const response: Response = await this.httpClient.put(`reservations/${reservationId}`, reservationData);
            return response;
        } catch (error) {
            logger.error(`Error updating reservation: ${(error as any).message}`);
            return {
                status: 'error',
                result: [],
                count: 0,
                limit: 100,
                offset: null
            };
        }
    }

    async cancelReservation(reservationId: number): Promise<Response> {
        try {
            const response: Response = await this.httpClient.delete(`reservations/${reservationId}`);
            return response;
        } catch (error) {
            logger.error(`Error canceling reservation: ${(error as any).message}`);
            return {
                status: 'error',
                result: [],
                count: 0,
                limit: 100,
                offset: null
            };
        }
    }

    async getReservationPaymentCards(reservationId: number): Promise<Response> {
        try {
            const response: Response = await this.httpClient.get(`reservations/${reservationId}/paymentCards`);
            return response;
        } catch (error) {
            logger.error(`Error getting reservation payment cards: ${(error as any).message}`);
            return {
                status: 'error',
                result: [],
                count: 0,
                limit: 100,
                offset: null
            };
        }
    }

    async getReservationPaymentMethods(reservationId: number): Promise<Response> {
        try {
            const response: Response = await this.httpClient.get(`reservations/${reservationId}/paymentMethods`);
            return response;
        } catch (error) {
            logger.error(`Error getting reservation payment methods: ${(error as any).message}`);
            return {
                status: 'error',
                result: [],
                count: 0,
                limit: 100,
                offset: null
            };
        }
    }

    async blockCalendarDays(listingId: number, days: any): Promise<Response> {
        try {
            const response: Response = await this.httpClient.post(`listings/${listingId}/calendar/block`, days);
            return response;
        } catch (error) {
            logger.error(`Error bloqueando días en el calendario: ${(error as any).message}`);
            return {
                status: 'error',
                result: [],
                count: 0,
                limit: 100,
                offset: null
            };
        }
    }

    async unblockCalendarDays(listingId: number, days: any): Promise<Response> {
        try {
            const response: Response = await this.httpClient.post(`listings/${listingId}/calendar/unblock`, days);
            return response;
        } catch (error) {
            logger.error(`Error desbloqueando días en el calendario: ${(error as any).message}`);
            return {
                status: 'error',
                result: [],
                count: 0,
                limit: 100,
                offset: null
            };
        }
    }

    async getGuests(limit?: number, offset?: number, filters?: any): Promise<Response> {
        try {
            const params = { limit, offset, ...filters };
            const response: Response = await this.httpClient.get('guests', { params });
            return response;
        } catch (error) {
            logger.error(`Error obteniendo huéspedes: ${(error as any).message}`);
            return {
                status: 'error',
                result: [],
                count: 0,
                limit: 100,
                offset: null
            };
        }
    }

    async getGuestById(guestId: number): Promise<Response> {
        try {
            const response: Response = await this.httpClient.get(`guests/${guestId}`);
            return response;
        } catch (error) {
            logger.error(`Error obteniendo huésped por id: ${(error as any).message}`);
            return {
                status: 'error',
                result: [],
                count: 0,
                limit: 100,
                offset: null
            };
        }
    }

    async createGuest(guestData: any): Promise<Response> {
        try {
            const response: Response = await this.httpClient.post('guests', guestData);
            return response;
        } catch (error) {
            logger.error(`Error creando huésped: ${(error as any).message}`);
            return {
                status: 'error',
                result: [],
                count: 0,
                limit: 100,
                offset: null
            };
        }
    }

    async updateGuest(guestId: number, guestData: any): Promise<Response> {
        try {
            const response: Response = await this.httpClient.put(`guests/${guestId}`, guestData);
            return response;
        } catch (error) {
            logger.error(`Error actualizando huésped: ${(error as any).message}`);
            return {
                status: 'error',
                result: [],
                count: 0,
                limit: 100,
                offset: null
            };
        }
    }

    async deleteGuest(guestId: number): Promise<Response> {
        try {
            const response: Response = await this.httpClient.delete(`guests/${guestId}`);
            return response;
        } catch (error) {
            logger.error(`Error eliminando huésped: ${(error as any).message}`);
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
