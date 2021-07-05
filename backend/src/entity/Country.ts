import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {District} from './District';

@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => District, district => district.country)
    districts: District[];
}
