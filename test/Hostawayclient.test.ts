import { HttpClient } from '../src/datasource/HttpClient.interface';
import { Response } from '../src/domain/models/Listing';
import { HostawayClient } from '../src/domain/usecases/HostawayClient';
import { PMSClient } from '../src/domain/usecases/PMSClient.interface';
import { HostawayApi } from '../src/plugins/hostaway-api.plugin';


describe('HostawayClient', () => {
    let api: HttpClient;
    let pmsClient: PMSClient;

    beforeEach(async () => {
        api = new HostawayApi('clientId', 'clientSecret');
        pmsClient = new HostawayClient(api);
    });

    it('should get listings', async () => {
        const mockListings = [{ id: 1, name: 'test' }];
        jest.spyOn(api, 'get').mockResolvedValue(mockListings);

        const response = await pmsClient.getListings();

        expect(response).toEqual(mockListings);
        expect(api.get).toHaveBeenCalledWith('listings');
    });

    it('should return listings error', async () => {
        const mockError: Response = {
            status: 'error',
            result: [],
            count: 0,
            limit: 100,
            offset: null
        };

        jest.spyOn(api, 'get').mockRejectedValue(mockError);

        const response = await pmsClient.getListings();

        expect(response).toEqual(mockError);
        expect(api.get).toHaveBeenCalledWith('listings');
    });

    it('Should return listings by country success,', async () => {
        const mockListings = [{ id: 1, name: 'test' }];
        jest.spyOn(api, 'get').mockResolvedValue(mockListings);

        const response = await pmsClient.getListingsByCountry('Brazil', 100, 0, 'asc');

        expect(response).toEqual(mockListings);
        expect(api.get).toHaveBeenCalledWith('listings', { params: { country: 'Brazil', limit: 100, offset: 0, sortOrder: 'asc' } });
    });

    it('shouild return listings by coountry failure', async () => {
        const mockError: Response = {
            status: 'error',
            result: [],
            count: 0,
            limit: 100,
            offset: null
        };

        jest.spyOn(api, 'get').mockRejectedValue(mockError);

        const response = await pmsClient.getListingsByCountry('Brazil', 100, 0, 'asc');

        expect(response).toEqual(mockError);
        expect(api.get).toHaveBeenCalledWith('listings', { params: { country: 'Brazil', limit: 100, offset: 0, sortOrder: 'asc' } });
    });

    it('should return listings by city success', async () => {
        const mockListings = [{ id: 1, name: 'test' }];
        jest.spyOn(api, 'get').mockResolvedValue(mockListings);

        const response = await pmsClient.getListingsByCity('São Paulo', 100, 0, 'asc');

        expect(response).toEqual(mockListings);
        expect(api.get).toHaveBeenCalledWith('listings', { params: { city: 'São Paulo', limit: 100, offset: 0, sortOrder: 'asc' } });
    });

    it('should return listings by city failure', async () => {
        const mockError: Response = {
            status: 'error',
            result: [],
            count: 0,
            limit: 100,
            offset: null
        };

        jest.spyOn(api, 'get').mockRejectedValue(mockError);

        const response = await pmsClient.getListingsByCity('Sao Paulo', 100, 0, 'asc');

        expect(response).toEqual(mockError);
        expect(api.get).toHaveBeenCalledWith('listings', { params: { city: 'Sao Paulo', limit: 100, offset: 0, sortOrder: 'asc' } });
    });

    it('should get listing by id successfully', async () => {
        const mockListing = { id: 1, name: 'test' };
        jest.spyOn(api, 'get').mockResolvedValue(mockListing);

        const response = await pmsClient.getListingById(1);

        expect(response).toEqual(mockListing);
        expect(api.get).toHaveBeenCalledWith('listings/1');
    });

    it('should handle error when getting listing by id', async () => {
        const mockError: Response = {
            status: 'error',
            result: [],
            count: 0,
            limit: 100,
            offset: null
        };

        jest.spyOn(api, 'get').mockRejectedValue(mockError);

        const response = await pmsClient.getListingById(1);

        expect(response).toEqual(mockError);
        expect(api.get).toHaveBeenCalledWith('listings/1');
    });

    it('should get calendar successfully', async () => {
        const mockCalendar = { dates: [] };
        jest.spyOn(api, 'get').mockResolvedValue(mockCalendar);

        const response = await pmsClient.getCalendar(1, '2024-01-01', '2024-12-31');

        expect(response).toEqual(mockCalendar);
        expect(api.get).toHaveBeenCalledWith('listings/1/calendar', {
            params: { startDate: '2024-01-01', endDate: '2024-12-31' }
        });
    });

    it('should handle error when getting calendar', async () => {
        const mockError: Response = {
            status: 'error',
            result: [],
            count: 0,
            limit: 100,
            offset: null
        };

        jest.spyOn(api, 'get').mockRejectedValue(mockError);

        const response = await pmsClient.getCalendar(1, '2024-01-01', '2024-12-31');

        expect(response).toEqual(mockError);
        expect(api.get).toHaveBeenCalledWith('listings/1/calendar', {
            params: { startDate: '2024-01-01', endDate: '2024-12-31' }
        });
    });

    it('should get reservations successfully', async () => {
        const mockReservations = [{ id: 1, status: 'confirmed' }];
        jest.spyOn(api, 'get').mockResolvedValue(mockReservations);

        const response = await pmsClient.getReservations(100, 0, 'asc');

        expect(response).toEqual(mockReservations);
        expect(api.get).toHaveBeenCalledWith('reservations', {
            params: { limit: 100, offset: 0, sortOrder: 'asc' }
        });
    });

    it('should handle error when getting reservations', async () => {
        const mockError: Response = {
            status: 'error',
            result: [],
            count: 0,
            limit: 100,
            offset: null
        };

        jest.spyOn(api, 'get').mockRejectedValue(mockError);

        const response = await pmsClient.getReservations();

        expect(response).toEqual(mockError);
        expect(api.get).toHaveBeenCalledWith('reservations', {
            params: { limit: undefined, offset: undefined, sortOrder: undefined }
        });
    });

    it('should get reservation by id successfully', async () => {
        const mockReservation = { id: 1, status: 'confirmed' };
        jest.spyOn(api, 'get').mockResolvedValue(mockReservation);

        const response = await pmsClient.getReservationById(1);

        expect(response).toEqual(mockReservation);
        expect(api.get).toHaveBeenCalledWith('reservations/1');
    });

    it('should handle error when getting reservation by id', async () => {
        const mockError: Response = {
            status: 'error',
            result: [],
            count: 0,
            limit: 100,
            offset: null
        };

        jest.spyOn(api, 'get').mockRejectedValue(mockError);

        const response = await pmsClient.getReservationById(1);

        expect(response).toEqual(mockError);
        expect(api.get).toHaveBeenCalledWith('reservations/1');
    });

    it('should create reservation successfully', async () => {
        const mockReservation = { id: 1, status: 'confirmed' };
        const reservationData = { listingId: 1, checkInDate: '2024-01-01' };
        jest.spyOn(api, 'post').mockResolvedValue(mockReservation);

        const response = await pmsClient.createReservation(reservationData);

        expect(response).toEqual(mockReservation);
        expect(api.post).toHaveBeenCalledWith('reservations', reservationData);
    });

    it('should handle error when creating reservation', async () => {
        const mockError: Response = {
            status: 'error',
            result: [],
            count: 0,
            limit: 100,
            offset: null
        };
        const reservationData = { listingId: 1, checkInDate: '2024-01-01' };

        jest.spyOn(api, 'post').mockRejectedValue(mockError);

        const response = await pmsClient.createReservation(reservationData);

        expect(response).toEqual(mockError);
        expect(api.post).toHaveBeenCalledWith('reservations', reservationData);
    });

    it('should update reservation successfully', async () => {
        const mockReservation = { id: 1, status: 'confirmed' };
        const reservationData = { checkInDate: '2024-01-02' };
        jest.spyOn(api, 'put').mockResolvedValue(mockReservation);

        const response = await pmsClient.updateReservation(1, reservationData);

        expect(response).toEqual(mockReservation);
        expect(api.put).toHaveBeenCalledWith('reservations/1', reservationData);
    });

    it('should handle error when updating reservation', async () => {
        const mockError: Response = {
            status: 'error',
            result: [],
            count: 0,
            limit: 100,
            offset: null
        };
        const reservationData = { checkInDate: '2024-01-02' };

        jest.spyOn(api, 'put').mockRejectedValue(mockError);

        const response = await pmsClient.updateReservation(1, reservationData);

        expect(response).toEqual(mockError);
        expect(api.put).toHaveBeenCalledWith('reservations/1', reservationData);
    });

    it('should cancel reservation successfully', async () => {
        const mockResponse = { success: true };
        jest.spyOn(api, 'delete').mockResolvedValue(mockResponse);

        const response = await pmsClient.cancelReservation(1);

        expect(response).toEqual(mockResponse);
        expect(api.delete).toHaveBeenCalledWith('reservations/1');
    });

    it('should handle error when canceling reservation', async () => {
        const mockError: Response = {
            status: 'error',
            result: [],
            count: 0,
            limit: 100,
            offset: null
        };

        jest.spyOn(api, 'delete').mockRejectedValue(mockError);

        const response = await pmsClient.cancelReservation(1);

        expect(response).toEqual(mockError);
        expect(api.delete).toHaveBeenCalledWith('reservations/1');
    });
});
