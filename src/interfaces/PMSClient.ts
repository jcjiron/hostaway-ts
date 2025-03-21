

export interface PMSClient {



    authenticate(): Promise<void>


    getListings(): Promise<any>

    getListingsByCountry(country: string, limit: number, offset: number, sortOrder: string): Promise<any>

    getListingsByCity(city: string, limit: number, offset: number, sortOrder: string): Promise<any>
}