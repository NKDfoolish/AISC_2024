import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateRanking1726629039693 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'ranking',
            columns:[
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "uuid",
                },
                {
                  name: 'user_id',
                  type: 'varchar',
                },
                {
                  name: 'ranking_month',
                  type: 'varchar',
                },
                {
                  name: 'total_score',
                  type: 'integer',
                },
                {
                  name: 'rank',
                  type: 'integer',
                  isNullable: true,
                },
            ]
        }))

        await queryRunner.createForeignKey(
            "ranking",
            new TableForeignKey({
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("ranking")
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("user_id") !== -1,
        )

        await queryRunner.dropForeignKey("ranking", foreignKey)
        await queryRunner.dropTable("ranking")
    }

}
