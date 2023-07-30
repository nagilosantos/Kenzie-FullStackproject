import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1690576639146 implements MigrationInterface {
    name = 'InitialMigration1690576639146'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "User" ("id" SERIAL NOT NULL, "name" character varying(150) NOT NULL, "email" character varying(45) NOT NULL, "phone" character varying(45) NOT NULL, "password" character varying(120) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Contact" ("id" SERIAL NOT NULL, "name" character varying(150) NOT NULL, "email" character varying(45) NOT NULL, "phone" character varying(45) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "UQ_f488353292a1f08767f4e30b6bd" UNIQUE ("email"), CONSTRAINT "PK_9d0ea6f3557586cef53e954d13a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Contact" ADD CONSTRAINT "FK_c0e04e1068848911421d27f2d32" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Contact" DROP CONSTRAINT "FK_c0e04e1068848911421d27f2d32"`);
        await queryRunner.query(`DROP TABLE "Contact"`);
        await queryRunner.query(`DROP TABLE "User"`);
    }

}
