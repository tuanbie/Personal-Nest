import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1697080533640 implements MigrationInterface {
    name = 'Migration1697080533640'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "permission" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "permission" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "rolesId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_5493e241ab6c27f36c7f9bae51a" FOREIGN KEY ("rolesId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_5493e241ab6c27f36c7f9bae51a"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "rolesId"`);
        await queryRunner.query(`ALTER TABLE "permission" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "permission" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
