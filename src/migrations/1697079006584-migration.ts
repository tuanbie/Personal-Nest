import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1697079006584 implements MigrationInterface {
    name = 'Migration1697079006584'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_permissions_permission" ("userId" integer NOT NULL, "permissionId" integer NOT NULL, CONSTRAINT "PK_8dd49853fbad35f9a0f91b11877" PRIMARY KEY ("userId", "permissionId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5b72d197d92b8bafbe7906782e" ON "user_permissions_permission" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c43a6a56e3ef281cbfba9a7745" ON "user_permissions_permission" ("permissionId") `);
        await queryRunner.query(`ALTER TABLE "user_permissions_permission" ADD CONSTRAINT "FK_5b72d197d92b8bafbe7906782ec" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_permissions_permission" ADD CONSTRAINT "FK_c43a6a56e3ef281cbfba9a77457" FOREIGN KEY ("permissionId") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_permissions_permission" DROP CONSTRAINT "FK_c43a6a56e3ef281cbfba9a77457"`);
        await queryRunner.query(`ALTER TABLE "user_permissions_permission" DROP CONSTRAINT "FK_5b72d197d92b8bafbe7906782ec"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c43a6a56e3ef281cbfba9a7745"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5b72d197d92b8bafbe7906782e"`);
        await queryRunner.query(`DROP TABLE "user_permissions_permission"`);
    }

}
