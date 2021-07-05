import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {County} from "../entity/County";

export const countySaveAction = async (request: Request, response: Response) => {
    const countyRepository = getManager().getRepository(County);

    const newCounty = countyRepository.create(request.body);

    await countyRepository.save(newCounty);

    response.send(newCounty);
}