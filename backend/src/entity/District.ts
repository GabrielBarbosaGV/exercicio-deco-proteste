import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Country} from './Country'

@Entity()
export class District {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Country, country => country.districts)
    country: Country;
}
