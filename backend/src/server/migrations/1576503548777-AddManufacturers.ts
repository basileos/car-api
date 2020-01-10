import {MigrationInterface, QueryRunner} from "typeorm";

export class AddManufacturers1576503548777 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO "manufacturer" (name, phone, siret) VALUES ('Peugeot', '0892976138', '55214450301248'), ('Citroen', '0892976342', '64205019901030')`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
