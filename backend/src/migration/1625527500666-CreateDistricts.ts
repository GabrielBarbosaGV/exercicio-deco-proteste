import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDistricts1625527500666 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        INSERT INTO DISTRICT (ID, NAME, "countryId") VALUES (1, 'Lisbon', 1),
        (2, 'Porto', 1),
        (3, 'Recife', 2),
        (4, 'Olinda', 2)
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        DELETE FROM DISTRICT WHERE ID IN (1, 2, 3, 4)
        `);
    }

}
