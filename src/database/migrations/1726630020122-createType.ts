import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateType1726630020122 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'type',
            columns:[
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "uuid",
                },
                {
                  name: 'name',
                  type: 'varchar',
                },
                {
                  name: 'co2',
                  type: 'decimal',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("type")
    }

}
