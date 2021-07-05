import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCountries1625526403367 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        INSERT INTO COUNTRY (ID, NAME) VALUES (1, 'Portugal'), (2, 'Brazil')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        DELETE FROM COUNTRY WHERE ID IN (1, 2)
        `);
    }

}
