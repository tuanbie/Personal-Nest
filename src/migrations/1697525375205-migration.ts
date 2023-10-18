import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1697525375205 implements MigrationInterface {
    name = 'Migration1697525375205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "refresh_token" TO "refreshToken"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "refreshToken" TO "refresh_token"`);
    }

}
