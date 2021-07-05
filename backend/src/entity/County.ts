import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinTable} from "typeorm";
import {District} from './District';
import {Country} from './Country';

@Entity()
export class County {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    initialZipCode: string;

    @Column()
    finalZipCode: string;

    @Column()
    active: boolean;

    @OneToOne(() => Country)
    @JoinTable()
    country: Country;

    @OneToOne(() => District)
    @JoinTable()
    district: District;
}