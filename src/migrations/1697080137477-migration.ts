import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1697080137477 implements MigrationInterface {
    name = 'Migration1697080137477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "role" DROP COLUMN "created_at"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "role" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
