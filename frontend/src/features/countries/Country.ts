import { District } from "../districts/District";

export interface Country {
    id: number;
    name: string;
    districts: District[];
}