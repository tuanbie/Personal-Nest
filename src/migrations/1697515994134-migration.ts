import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1697515994134 implements MigrationInterface {
    name = 'Migration1697515994134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "refresToken" TO "refresh_token"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "refresh_token" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "refresh_token" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "refresh_token" TO "refresToken"`);
    }

}
