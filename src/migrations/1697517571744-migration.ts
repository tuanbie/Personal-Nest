import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1697517571744 implements MigrationInterface {
    name = 'Migration1697517571744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_5493e241ab6c27f36c7f9bae51a"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "rolesId" TO "role_id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "role_id" TO "rolesId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_5493e241ab6c27f36c7f9bae51a" FOREIGN KEY ("rolesId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
