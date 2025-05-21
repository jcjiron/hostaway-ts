import { Response } from "../models/Listing"


export interface PMSClient {

    getListings(): Promise<Response>

    getListingsByCountry(country: string, limit: number, offset: number, sortOrder: string): Promise<Response>

    getListingsByCity(city: string, limit: number, offset: number, sortOrder: string): Promise<Response>

    getListingById(listingId: number): Promise<Response>

    getCalendar(listingId: number, startDate: string, endDate: string): Promise<Response>

    getReservations(limit?: number, offset?: number, sortOrder?: string): Promise<Response>

    getReservationById(reservationId: number): Promise<Response>

    createReservation(reservationData: any): Promise<Response>

    updateReservation(reservationId: number, reservationData: any): Promise<Response>

    cancelReservation(reservationId: number): Promise<Response>
}