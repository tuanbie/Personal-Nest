import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1697595513320 implements MigrationInterface {
    name = 'Migration1697595513320'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "emailVerifyCode" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "emailVerifyCode"`);
    }

}
