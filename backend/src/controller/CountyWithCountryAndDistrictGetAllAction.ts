import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {County} from '../entity/County';

export const countyWithCountryAndDistrictGetAllAction = async (request: Request, response: Response) => {
    const countyRepository = getManager().getRepository(County);

    const counties = await countyRepository.find({
        relations: ["country", "district"]
    });

    response.send(counties);
}