import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1696926587385 implements MigrationInterface {
    name = 'Migration1696926587385'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photo" ADD "type" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photo" DROP COLUMN "type"`);
    }

}
