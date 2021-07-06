import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
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
    @JoinColumn()
    country: Country;

    @OneToOne(() => District)
    @JoinColumn()
    district: District;
}