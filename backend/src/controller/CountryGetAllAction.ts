import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {Country} from '../entity/Country';

export const countryGetAllAction = async (request: Request, response: Response) => {
    const countryRepository = getManager().getRepository(Country);

    const countries = await countryRepository.find();

    response.send(countries);
}