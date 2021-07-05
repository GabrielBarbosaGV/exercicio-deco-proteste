import { countryGetAllAction } from "./controller/CountryGetAllAction";
import { countySaveAction } from "./controller/CountySaveAction";
import { countyWithCountryAndDistrictGetAllAction } from "./controller/CountyWithCountryAndDistrictGetAllAction";
import { countyWithCountryAndDistrictGetByIdAction } from "./controller/CountyWithCountryAndDistrictGetByIdAction";
import { districtGetByCountryIdAction } from "./controller/DistrictGetByCountryIdAction";
import {postGetAllAction} from "./controller/PostGetAllAction";
import {postGetByIdAction} from "./controller/PostGetByIdAction";
import {postSaveAction} from "./controller/PostSaveAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/posts",
        method: "get",
        action: postGetAllAction
    },
    {
        path: "/posts/:id",
        method: "get",
        action: postGetByIdAction
    },
    {
        path: "/posts",
        method: "post",
        action: postSaveAction
    },
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
        path: "/district/byCountry/:countryId",
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