import { MigrationInterface, QueryRunner } from "typeorm";

export class PostsRefactoring1701390974718 implements MigrationInterface {
    name = 'PostsRefactoring1701390974718'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "created_at"`);
    }

}
