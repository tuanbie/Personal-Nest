import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1696926570906 implements MigrationInterface {
    name = 'Migration1696926570906'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "age" integer NOT NULL, "password" character varying NOT NULL, "gender" character varying NOT NULL, "refresToken" character varying NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "photo" ("imageId" SERIAL NOT NULL, "url" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_0824afd24d4163bfd384ae04f4b" PRIMARY KEY ("imageId"))`);
        await queryRunner.query(`ALTER TABLE "photo" ADD CONSTRAINT "FK_4494006ff358f754d07df5ccc87" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photo" DROP CONSTRAINT "FK_4494006ff358f754d07df5ccc87"`);
        await queryRunner.query(`DROP TABLE "photo"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
