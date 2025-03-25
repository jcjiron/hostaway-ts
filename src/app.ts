import dotenv from 'dotenv';
import { HostawayClient } from "./domain/usecases/HostawayClient";
import { HostawayApi } from './plugins/hostaway-api.plugin';

dotenv.config();

const clientId = process.env.CLIENT_ID || '';
const clientSecret = process.env.CLIENT_SECRET || '';


(async () => {
    const api = new HostawayApi(clientId, clientSecret);
    const accessToken = await api.getAccessToken();
    api.authenticate(accessToken);
    const pms = new HostawayClient(api);
    const listings = await pms.getListings();
    console.log(listings);
})();


