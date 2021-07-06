import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {District} from '../entity/District';

export const districtGetByCountryIdAction = async (request: Request, response: Response) => {
    const districtRepository = getManager().getRepository(District);

    const districts = await districtRepository.find({
        relations: ["country"],
        where: {
            country: {
                id: request.params.countryId
            }
        }
    });

    response.send(districts);
}