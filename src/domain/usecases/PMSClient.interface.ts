import { Response } from "../models/Listing"


export interface PMSClient {

    getListings(): Promise<Response>

    getListingsByCountry(country: string, limit: number, offset: number, sortOrder: string): Promise<Response>

    getListingsByCity(city: string, limit: number, offset: number, sortOrder: string): Promise<Response>
}