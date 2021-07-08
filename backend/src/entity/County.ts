import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm";
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

    @ManyToOne(() => Country)
    @JoinColumn()
    country: Country;

    @ManyToOne(() => District)
    @JoinColumn()
    district: District;
}