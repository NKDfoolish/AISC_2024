import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUserDisplay1726628229092 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users_display',
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
                  name: 'total_score',
                  type: 'integer',
                },
                {
                  name: 'rank',
                  type: 'integer',
                },
            ]
        }))

        await queryRunner.createForeignKey(
            "users_display",
            new TableForeignKey({
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("users_display")
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("user_id") !== -1,
        )

        await queryRunner.dropForeignKey("users_display", foreignKey)
        await queryRunner.dropTable("users_display")
    }
}
