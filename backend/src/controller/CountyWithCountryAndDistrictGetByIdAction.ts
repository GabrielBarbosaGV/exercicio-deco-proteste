import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {County} from '../entity/County';

export const countyWithCountryAndDistrictGetByIdAction = async (request: Request, response: Response) => {
    const countyRepository = getManager().getRepository(County);

    const county = await countyRepository.findOne(request.params.id, {
        relations: ["country", "district"]
    });

    if (!county) {
        response.status(404);
        response.end();
    } else {
        response.send(county);
    }
}