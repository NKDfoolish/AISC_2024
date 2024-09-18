import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateDonation1726629314478 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'donation',
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
                  name: 'quantity',
                  type: 'integer',
                },
                {
                  name: 'total_score',
                  type: 'integer',
                },
                {
                  name: 'type_id',
                  type: 'varchar',
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

        const foreignKeys = [
            new TableForeignKey({
                columnNames: ["user_id"],  // column in the current table
                referencedTableName: "id",  // referenced table name
                referencedColumnNames: ["users"],  // column in the referenced table
                onDelete: "CASCADE"  // what to do on delete
            }),
            new TableForeignKey({
                columnNames: ["type_id"],
                referencedTableName: "id",
                referencedColumnNames: ["type"],
                onDelete: "CASCADE"
            })
        ];

        await queryRunner.createForeignKeys(
            "donation",
            foreignKeys,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("donation")

        const userIdForeignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("user_id") !== -1,
        )

        await queryRunner.dropForeignKey("donation", userIdForeignKey)

        const typeIdForeignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("type_id") !== -1,
        )

        await queryRunner.dropForeignKey("donation", typeIdForeignKey)

        await queryRunner.dropTable("donation")
    }

}
