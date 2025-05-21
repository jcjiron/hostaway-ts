import { Response } from "../models/Listing"


export interface PMSClient {
    /**
     * Retrieves all listings available in the system
     * @returns Promise containing the response with all listings
     */
    getListings(): Promise<Response>

    /**
     * Retrieves listings filtered by country
     * @param country - The country name to filter listings
     * @param limit - Maximum number of records to return
     * @param offset - Number of records to skip for pagination
     * @param sortOrder - Order of the results ('asc' or 'desc')
     * @returns Promise containing the filtered listings
     */
    getListingsByCountry(country: string, limit: number, offset: number, sortOrder: string): Promise<Response>

    /**
     * Retrieves listings filtered by city
     * @param city - The city name to filter listings
     * @param limit - Maximum number of records to return
     * @param offset - Number of records to skip for pagination
     * @param sortOrder - Order of the results ('asc' or 'desc')
     * @returns Promise containing the filtered listings
     */
    getListingsByCity(city: string, limit: number, offset: number, sortOrder: string): Promise<Response>

    /**
     * Retrieves a specific listing by its ID
     * @param listingId - The unique identifier of the listing
     * @returns Promise containing the listing details
     */
    getListingById(listingId: number): Promise<Response>

    /**
     * Retrieves the availability calendar for a specific listing
     * @param listingId - The unique identifier of the listing
     * @param startDate - Start date for the calendar (YYYY-MM-DD)
     * @param endDate - End date for the calendar (YYYY-MM-DD)
     * @returns Promise containing the calendar information
     */
    getCalendar(listingId: number, startDate: string, endDate: string): Promise<Response>

    /**
     * Retrieves all reservations with optional pagination
     * @param limit - Optional maximum number of records to return
     * @param offset - Optional number of records to skip for pagination
     * @param sortOrder - Optional order of the results ('asc' or 'desc')
     * @returns Promise containing the reservations
     */
    getReservations(limit?: number, offset?: number, sortOrder?: string): Promise<Response>

    /**
     * Retrieves a specific reservation by its ID
     * @param reservationId - The unique identifier of the reservation
     * @returns Promise containing the reservation details
     */
    getReservationById(reservationId: number): Promise<Response>

    /**
     * Creates a new reservation
     * @param reservationData - Object containing the reservation details
     * @returns Promise containing the created reservation
     */
    createReservation(reservationData: any): Promise<Response>

    /**
     * Updates an existing reservation
     * @param reservationId - The unique identifier of the reservation to update
     * @param reservationData - Object containing the updated reservation details
     * @returns Promise containing the updated reservation
     */
    updateReservation(reservationId: number, reservationData: any): Promise<Response>

    /**
     * Cancels an existing reservation
     * @param reservationId - The unique identifier of the reservation to cancel
     * @returns Promise containing the cancellation result
     */
    cancelReservation(reservationId: number): Promise<Response>

    /**
     * Retrieves payment cards associated with a reservation
     * @param reservationId - The unique identifier of the reservation
     * @returns Promise containing the payment cards information
     */
    getReservationPaymentCards(reservationId: number): Promise<Response>

    /**
     * Retrieves available payment methods for a reservation
     * @param reservationId - The unique identifier of the reservation
     * @returns Promise containing the payment methods information
     */
    getReservationPaymentMethods(reservationId: number): Promise<Response>
}