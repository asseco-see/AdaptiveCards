import { Downloader } from "./downloader";

export class CatalogueEntry {
    static createEmptyCardEntry(): CatalogueEntry {
        let result = new CatalogueEntry("Blank card", {
            type: "AdaptiveCard",
            $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
            version: "1.0",
            body: [
            ]
        });
        return result;
    }

    private _sampleData: object;
    private _cardPayload: object;
    private _name: string;
    private _cardId: string;

    private downloadCompleted() {
        if (this.onDownloaded) {
            this.onDownloaded(this);
        }
    }

    onDownloaded: (sender: CatalogueEntry) => void = null;

    constructor(displayName: string, cardPayload: object, sampleData?: object, cardId?: string) {
        this._sampleData = sampleData;
        this._cardPayload = cardPayload;
        this._cardId = cardId;
        this._name = displayName;
    }

    download() {
        this.downloadCompleted();
    }


    get cardId(): string {
        return this._cardId;
    }

    set cardPayload(value: object) {
        this._cardPayload = value;
    }
    get cardPayload(): object {
        return this._cardPayload;
    }
    set sampleData(value: object) {
        this._sampleData = value;
    }
    get sampleData(): object {
        return this._sampleData;
    }
    set name(value: string) {
        this._name = value;
    }
    get name(): string {
        return this._name;
    }
}

export class SampleCatalogue {
    private _entries: CatalogueEntry[] = [];
    private _isDownloaded: boolean = false;
    private _url: string;
    private _tags: string[] = [];
    private _totalPages: number;
    private _page: number;
    private _baseUrl: string;

    get totalPages(): number {
        return this._totalPages;
    }
    get page(): number {
        return this._page;
    }

    public loadPage(page, tags?: string[]) {
        this._page = page;
        this._isDownloaded = false;
        this.downloadSamples(page, tags);
        this.mockData.page = page;
    }
    private downloaded() {
        this._isDownloaded = true;

        if (this.onDownloaded) {
            this.onDownloaded(this);
        }
    }

    private parse(input: any) {
        let entries: any[] = null;
        this._totalPages = input['total-pages'];
        this._page = input['page'];
        if (Array.isArray(input)) {
            entries = input;
        }
        else if (Array.isArray(input["entries"])) {
            entries = input["entries"]
        }
        else {
            entries = Array.isArray(input["items"]) ? input["items"] : null;
        }

        if (this._page == 1) {
            this._entries = [
                CatalogueEntry.createEmptyCardEntry()
            ];
        } else {
            this._entries = [];
        }
        if (entries != null) {
            for (let entry of entries) {
                if (typeof entry === "object") {
                    let displayName = entry["name"];
                    let cardPayload = entry["template"];
                    let cardData = entry["data"];
                    const card = new CatalogueEntry(
                        displayName,
                        cardPayload,
                        cardData);
                    if (displayName) {
                        this._entries.push(
                            card);
                    }
                }
            }
        }
    }

    onDownloaded: (sender: SampleCatalogue) => void;

    public mockData = {
        'total-pages': 25,
        'page': 1,
        items: [
            {
                id: 'pera',
                name: 'pera',
                description: 'Opis primera',
                tags: ['pera', 'laza', 'mika'],
                data: {
                    "@context": "http://schema.org",
                    "@type": "FlightReservation",
                    "reservationId": "RXJ34P",
                    "reservationStatus": "http://schema.org/ReservationConfirmed",
                    "passengerPriorityStatus": "Fast Track",
                    "passengerSequenceNumber": "ABC123",
                    "securityScreening": "TSA PreCheck",
                    "underName": {
                        "@type": "Person",
                        "name": "Eva Green"
                    },
                    "reservationFor": {
                        "@type": "Flight",
                        "flightNumber": "UA110",
                        "provider": {
                            "@type": "Airline",
                            "name": "Continental",
                            "iataCode": "CO",
                            "boardingPolicy": "http://schema.org/ZoneBoardingPolicy"
                        },
                        "seller": {
                            "@type": "Airline",
                            "name": "United",
                            "iataCode": "UA"
                        },
                        "departureAirport": {
                            "@type": "Airport",
                            "name": "San Francisco Airport",
                            "iataCode": "SFO"
                        },
                        "departureTime": "2017-03-04T20:15:00-08:00",
                        "arrivalAirport": {
                            "@type": "Airport",
                            "name": "John F. Kennedy International Airport",
                            "iataCode": "JFK"
                        },
                        "arrivalTime": "2017-03-05T06:30:00-05:00"
                    }
                },
                template: {
                    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                    "type": "AdaptiveCard",
                    "version": "1.0",
                    "speak": "Flight KL0605 to San Fransisco has been delayed.It will not leave until 10:10 AM.",
                    "body": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "Image",
                                            "size": "small",
                                            "url": "https://adaptivecards.io/content/airplane.png"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Flight Status",
                                            "horizontalAlignment": "right",
                                            "isSubtle": true
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "DELAYED",
                                            "horizontalAlignment": "right",
                                            "spacing": "none",
                                            "size": "large",
                                            "color": "attention"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "ColumnSet",
                            "separator": true,
                            "spacing": "medium",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Passengers",
                                            "isSubtle": true,
                                            "weight": "bolder"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "Sarah Hum",
                                            "spacing": "small"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "Jeremy Goldberg",
                                            "spacing": "small"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "Evan Litvak",
                                            "spacing": "small"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Seat",
                                            "horizontalAlignment": "right",
                                            "isSubtle": true,
                                            "weight": "bolder"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "14A",
                                            "horizontalAlignment": "right",
                                            "spacing": "small"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "14B",
                                            "horizontalAlignment": "right",
                                            "spacing": "small"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "14C",
                                            "horizontalAlignment": "right",
                                            "spacing": "small"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "ColumnSet",
                            "spacing": "medium",
                            "separator": true,
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": 1,
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Flight",
                                            "isSubtle": true,
                                            "weight": "bolder"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "KL0605",
                                            "spacing": "small"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": 1,
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Departs",
                                            "isSubtle": true,
                                            "horizontalAlignment": "center",
                                            "weight": "bolder"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "10:10 AM",
                                            "color": "attention",
                                            "weight": "bolder",
                                            "horizontalAlignment": "center",
                                            "spacing": "small"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": 1,
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Arrives",
                                            "isSubtle": true,
                                            "horizontalAlignment": "right",
                                            "weight": "bolder"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "12:00 AM",
                                            "color": "attention",
                                            "horizontalAlignment": "right",
                                            "weight": "bolder",
                                            "spacing": "small"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "ColumnSet",
                            "spacing": "medium",
                            "separator": true,
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": 1,
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Amsterdam",
                                            "isSubtle": true
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "AMS",
                                            "size": "extraLarge",
                                            "color": "accent",
                                            "spacing": "none"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": " "
                                        },
                                        {
                                            "type": "Image",
                                            "url": "https://adaptivecards.io/content/airplane.png",
                                            "size": "small"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": 1,
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "San Francisco",
                                            "isSubtle": true,
                                            "horizontalAlignment": "right"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "SFO",
                                            "horizontalAlignment": "right",
                                            "size": "extraLarge",
                                            "color": "accent",
                                            "spacing": "none"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    };

    public mockClassification = {
        "values": [
            { "literal": "product", "name": "Product", "description": "Product information card", "additional-fields": {} },
            { "literal": "payment", "name": "Payment", "description": "Payment information card", "additional-fields": {} },
            { "literal": "party", "name": "Party", "description": "Party information card", "additional-fields": {} },
            { "literal": "customer", "name": "Customer", "description": "Customer information card", "additional-fields": {} },
            { "literal": "arrangement", "name": "Arrangement", "description": "Arrangement information card", "additional-fields": {} },
            { "literal": "balance", "name": "Balance", "description": "Balance information card", "additional-fields": {} },
            { "literal": "offer", "name": "Offer", "description": "Offer information card", "additional-fields": {} }
        ],
        "schema-id": "sample-tag",
        "name": "Sample tags",
        "description": "Adaptive card tags for grouping",
        "additional-fields": ""
    };

    constructor(url: string = "./sample-catalogue.json") {
        this.url = url;
    }

    public downloadClassifications() {
        this._tags = [];
        let downloader = new Downloader(this._baseUrl + '/alpha/screens/classifications/sample-tag');
        downloader.onSuccess = () => {
            if (downloader.data) {
                try {
                    const classifications = JSON.parse(downloader.data);
                    for (let value of classifications.values) {
                        this._tags.push(value.literal);
                    }
                } catch (e) {
                    console.error(e);
                }
                this.downloadSamples();
            }
        };
        downloader.onError = () => {
            for (let value of this.mockClassification.values) {
                this._tags.push(value.literal);
            }
            this.downloadSamples();
        };
        downloader.download();
    }

    public downloadSamples(page?, tags?) {
        let pageNumber = page ?? 1;
        if (!this.isDownloaded) {
            let url = this._baseUrl + '/alpha/screens/samples?page-size=10&page=' + pageNumber;
            if (tags) {
                url += '&tags=' + tags.join(',');
            }
            let downloader = new Downloader(url);
            downloader.onError = () => {
                if (this._entries.length === 0) {
                    this._entries = [CatalogueEntry.createEmptyCardEntry()];
                }

                this.downloaded();
            };
            downloader.onSuccess = () => {
                if (downloader.data) {
                    try {
                        this.parse(JSON.parse(downloader.data));
                    }
                    catch (e) {
                    }
                }

                this.downloaded();
            };
            downloader.onError = () => {
                console.log('mock data on fail');
                this.parse(this.mockData);
                this.downloaded();
            };
            downloader.download();
        }
        else {
            this.downloaded();
        }
    }

    download() {
        let downloadConfig = new Downloader('configuration.json');
        downloadConfig.download();
        downloadConfig.onSuccess = () => {
            if (downloadConfig.data) {
                try {
                    var configData = JSON.parse(downloadConfig.data);
                    this._baseUrl = configData.baseUrl;
                    this.downloadClassifications();
                } catch (e) {
                }
            }
        }
    }

    get isDownloaded(): boolean {
        return this._isDownloaded;
    }

    get tags(): string[] {
        return this._tags;
    }
    get entries(): CatalogueEntry[] {
        return this._entries;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        if (value !== this._url) {
            this._url = value;

            this._isDownloaded = false;
        }
    }
}
