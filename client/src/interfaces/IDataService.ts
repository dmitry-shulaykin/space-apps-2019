export class Year {
    level: number = 0;
    year: number = 1880;
}

export class YearsResponse {
    years: Year[] = [];
}

export class City {
    id: number = 0;
    name: string = '';
    country: string = '';
    elevation: number = 0;
    population: number = 0;
    iso3: number = 0;
    lng: number = 0;
    lat: number = 0;
}

export class CitiesResponse{
    cities: City[] = [];
}

export interface IDataService {
    getYears(): Promise<YearsResponse>;
    getCities(): Promise<CitiesResponse>
}