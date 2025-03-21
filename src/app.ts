import dotenv from 'dotenv';
import { HostawayClient } from "./HostawayClient";

dotenv.config();

const clientId = process.env.CLIENT_ID || '';
const clientSecret = process.env.CLIENT_SECRET || '';


(async () => {
    const client = await HostawayClient.create(clientId, clientSecret);
    const listings = await client.getListings();
    console.log(listings);
})();


