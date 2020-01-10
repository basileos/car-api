import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1576497115318 implements MigrationInterface {
    name = 'Initial1576497115318'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "manufacturer" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone" character varying NOT NULL, "siret"  bigint NOT NULL, CONSTRAINT "PK_81fc5abca8ed2f6edc79b375eeb" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "owner" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "purchaseDate" TIMESTAMP NOT NULL, "carId" integer, CONSTRAINT "PK_8e86b6b9f94aece7d12d465dc0c" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "car" ("id" SERIAL NOT NULL, "price" integer NOT NULL, "firstRegistration" TIMESTAMP NOT NULL, "manufacturerId" integer, CONSTRAINT "PK_55bbdeb14e0b1d7ab417d11ee6d" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "owner" ADD CONSTRAINT "FK_732957c1d4ade78a38331490d76" FOREIGN KEY ("carId") REFERENCES "car"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "car" ADD CONSTRAINT "FK_219df163feb468a934c3a7b24ca" FOREIGN KEY ("manufacturerId") REFERENCES "manufacturer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "car" DROP CONSTRAINT "FK_219df163feb468a934c3a7b24ca"`, undefined);
        await queryRunner.query(`ALTER TABLE "owner" DROP CONSTRAINT "FK_732957c1d4ade78a38331490d76"`, undefined);
        await queryRunner.query(`DROP TABLE "car"`, undefined);
        await queryRunner.query(`DROP TABLE "owner"`, undefined);
        await queryRunner.query(`DROP TABLE "manufacturer"`, undefined);
    }

}
