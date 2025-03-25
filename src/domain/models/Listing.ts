export interface Listing {
    id: number;
    propertyTypeId: number;
    name: string;
    externalListingName: string;
    internalListingName: string;
    description: string;
    houseRules: string;
    keyPickup: string;
    specialInstruction: string;
    doorSecurityCode: string;
    country: string;
    countryCode: string;
    state: string;
    city: string;
    street: string;
    address: string;
    publicAddress: string;
    zipcode: string;
    price: number;
    starRating: number;
    averageReviewRating: number;
    weeklyDiscount: number;
    monthlyDiscount: number;
    propertyRentTax: number;
    guestPerPersonPerNightTax: number;
    guestStayTax: number;
    guestNightlyTax: number;
    guestBathroomsNumber: number;
    refundableDamageDeposit: number;
    personCapacity: number;
    maxChildrenAllowed: null;
    maxInfantsAllowed: null;
    maxPetsAllowed: null;
    lat: number;
    lng: number;
    checkInTimeStart: number;
    checkInTimeEnd: number;
    checkOutTime: number;
    cancellationPolicy: string;
    cancellationPolicyId: number;
    vrboCancellationPolicyId: number;
    airBnbCancellationPolicyId: number;
    marriottCancellationPolicyId: number;
    bookingCancellationPolicyId: number;
    squareMeters: number;
    roomType: string;
    bathroomType: string;
    bedroomsNumber: number;
    bedsNumber: number;
    bedType: string;
    bathroomsNumber: number;
    minNights: number;
    maxNights: number;
    guestsIncluded: number;
    cleaningFee: number;
    priceForExtraPerson: number;
    instantBookable: number;
    instantBookableLeadTime: number;
    allowSameDayBooking: number;
    sameDayBookingLeadTime: number;
    contactName: string;
    contactSurName: string;
    contactPhone1: string;
    contactPhone2: string;
    contactLanguage: string;
    contactEmail: string;
    contactAddress: string;
    language: string;
    currencyCode: string;
    timeZoneName: string;
    wifiUsername: string;
    wifiPassword: string;
    cleannessStatus: null;
    cleaningInstruction: null;
    cleannessStatusUpdatedOn: null;
    homeawayPropertyName: string;
    homeawayPropertyHeadline: string;
    homeawayPropertyDescription: string;
    bookingcomPropertyName: string;
    bookingcomPropertyDescription: string;
    invoicingContactName: string;
    invoicingContactSurName: string;
    invoicingContactPhone1: string;
    invoicingContactPhone2: string;
    invoicingContactLanguage: string;
    invoicingContactEmail: string;
    invoicingContactAddress: string;
    invoicingContactCity: string;
    invoicingContactZipcode: string;
    invoicingContactCountry: string;
    propertyLicenseNumber: null;
    propertyLicenseType: null;
    propertyLicenseIssueDate: null;
    propertyLicenseExpirationDate: null;
    partnersListingMarkup: null;
    airbnbOfficialListingMarkup: null;
    bookingEngineMarkup: null;
    homeawayApiMarkup: null;
    marriottListingMarkup: null;
    isRentalAgreementActive: boolean;
    listingAgreementText: string;
    bookingcomPropertyRegisteredInVcs: boolean;
    bookingcomPropertyHasVat: boolean;
    bookingcomPropertyDeclaresRevenue: boolean;
    airbnbListingUrl: string;
    vrboListingUrl: string;
    googleVrListingUrl: string;
    airbnbName: string;
    airbnbSummary: string;
    airbnbSpace: null;
    airbnbAccess: null;
    airbnbInteraction: null;
    airbnbNeighborhoodOverview: null;
    airbnbTransit: null;
    airbnbNotes: null;
    insuranceEligibilityStatus: boolean;
    listingAmenities: ListingAmenity[];
    listingBedTypes: ListingBedType[];
    listingImages: ListingImage[];
    customFieldValues: CustomFieldValue[];
}

export interface CustomFieldValue {
    customFieldId: number;
    value: string;
}

export interface ListingAmenity {
    id: number;
    amenityId: number;
}

export interface ListingBedType {
    id: number;
    bedTypeId: number;
    quantity: number;
}

export interface ListingImage {
    id: number;
    caption: string;
    url: string;
    sortOrder: number;
}
