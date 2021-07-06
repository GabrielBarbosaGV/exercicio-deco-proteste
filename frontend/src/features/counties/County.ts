import { Country } from "../countries/Country";
import { District } from "../districts/District";

export interface County {
    id: number;
    name: string;
    country: Country;
    district: District;
    initialZipCode: string;
    finalZipCode: string;
    active: boolean;
}