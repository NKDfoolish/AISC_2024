import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateReward1726630518441 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'reward',
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
                  name: 'brand_id',
                  type: 'varchar',
                },
                {
                  name: 'description',
                  type: 'varchar',
                },
                {
                  name: 'score',
                  type: 'varchar',
                },
                {
                  name: 'total_remaining',
                  type: 'integer',
                },
                {
                  name: 'expired_date',
                  type: 'timestamp',
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
                },
                {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
                },
            ]
        }))

        await queryRunner.createForeignKey(
            "reward",
            new TableForeignKey({
                columnNames: ["brand_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "brand",
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("reward")
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("brand_id") !== -1,
        )

        await queryRunner.dropForeignKey("reward", foreignKey)
        await queryRunner.dropTable("reward")
    }

}
