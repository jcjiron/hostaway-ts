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
});
