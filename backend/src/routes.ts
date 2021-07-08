import { countryGetAllAction } from "./controller/CountryGetAllAction";
import { countySaveAction } from "./controller/CountySaveAction";
import { countyWithCountryAndDistrictGetAllAction } from "./controller/CountyWithCountryAndDistrictGetAllAction";
import { countyWithCountryAndDistrictGetByIdAction } from "./controller/CountyWithCountryAndDistrictGetByIdAction";
import { districtGetByCountryIdAction } from "./controller/DistrictGetByCountryIdAction";

export const AppRoutes = [
    {
        path: "/countries",
        method: "get",
        action: countryGetAllAction
    },
    {
        path: "/countiesWithCountryAndDistrict",
        method: "get",
        action: countyWithCountryAndDistrictGetAllAction
    },
    {
        path: "/districts/byCountry/:countryId",
        method: "get",
        action: districtGetByCountryIdAction
    },
    {
        path: "/countyWithCountryAndDistrict/:id",
        method: "get",
        action: countyWithCountryAndDistrictGetByIdAction
    },
    {
        path: "/county",
        method: "post",
        action: countySaveAction
    }
];
