# Hostaway API Client

This is a Node.js client for interacting with the Hostaway API. It is written in TypeScript and allows authentication and listing retrieval.

## 🚀 Installation

```sh
npm install hostaway-ts
```

## 📌 Usage

```typescript
import dotenv from "dotenv";
import { HostawayClient } from "./domain/usecases/HostawayClient";
import { HostawayApi } from "./plugins/hostaway-api.plugin";

env.config(); //load your env variables

const clientId = process.env.CLIENT_ID || "";
const clientSecret = process.env.CLIENT_SECRET || "";

(async () => {
  const api = new HostawayApi(clientId, clientSecret);
  const accessToken = await api.getAccessToken();
  api.authenticate(accessToken);
  const pms = new HostawayClient(api);

  // List all guests
  const guests = await pms.getGuests(100, 0);
  console.log(guests);

  // Get guest by ID
  const guest = await pms.getGuestById(1);
  console.log(guest);

  // Create a new guest
  const newGuest = await pms.createGuest({ name: "Juan" });
  console.log(newGuest);

  // Update a guest
  const updatedGuest = await pms.updateGuest(1, { name: "Juan Carlos" });
  console.log(updatedGuest);

  // Delete a guest
  const deletedGuest = await pms.deleteGuest(1);
  console.log(deletedGuest);

  // Block calendar days
  const blockResult = await pms.blockCalendarDays(1, { dates: ["2024-07-01"] });
  console.log(blockResult);

  // Unblock calendar days
  const unblockResult = await pms.unblockCalendarDays(1, {
    dates: ["2024-07-01"],
  });
  console.log(unblockResult);
})();
```

## 📦 Features

- Authentication with the Hostaway API
- Listings Management:
  - Get all listings
  - Filter listings by country
  - Filter listings by city
  - Get listing by ID
  - Get availability calendar
  - Block calendar days
  - Unblock calendar days
- Reservations Management:
  - List all reservations
  - Get reservation by ID
  - Create new reservations
  - Update existing reservations
  - Cancel reservations
  - Get reservation payment cards
  - Get reservation payment methods
- Guests Management:
  - List all guests
  - Get guest by ID
  - Create guest
  - Update guest
  - Delete guest
- Robust error handling and logging
- Axios integration for HTTP requests
- Full TypeScript support

## 🔧 Scripts

Run the following commands for development:

```sh
npm install       # Install dependencies
npm test          # Run unit tests
npm run build     # Compile TypeScript code
npm publish       # Publish to NPM
```

## 📜 Versioning with Semantic Release

This package uses Semantic Release to automatically manage versions based on commit messages.

Commit Examples:

- `fix: fixed an authentication bug` → `1.0.1`
- `feat: added support for filters` → `1.1.0`
- `BREAKING CHANGE: modified data structure` → `2.0.0`

## 🚀 CI/CD with GitHub Actions

Each push to master triggers a workflow that:

- Runs tests.
- Builds the code.
- Publishes the package to NPM if the commit follows Semantic Versioning.

## 📄 License

This project is licensed under the MIT License.
