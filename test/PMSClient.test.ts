import { HostawayClient } from '../src/domain/usecases/HostawayClient';
import { HttpClient } from '../src/datasource/HttpClient.interface';
import { PMSClient } from '@src/domain/usecases/PMSClient.interface';
import { HostawayApi } from '@src/plugins/hostaway-api.plugin';



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

        const listings = await pmsClient.getListings();

        expect(listings).toEqual(mockListings);
    });

    it('should get listings by country', async () => {
        const mockListings = [{ id: 1, name: 'test' }];
        jest.spyOn(api, 'get').mockResolvedValue(mockListings);

        const listings = await pmsClient.getListingsByCountry('Spain', 10, 0, 'ASC');

        expect(listings).toEqual(mockListings);
    });
});