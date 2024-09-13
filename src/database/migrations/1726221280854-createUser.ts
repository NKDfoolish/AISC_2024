import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1726221280854 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns:[
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "uuid",
                },
                {
                  name: 'userName',
                  type: 'varchar',
                },
                {
                  name: 'passWord',
                  type: 'varchar',
                },
                {
                  name: 'email',
                  type: 'varchar',
                },
                {
                  name: 'role',
                  type: 'enum',
                  enum: ['ADMIN', 'USER'],
                  default: `'USER'`,
                },
                {
                  name: 'firstName',
                  type: 'varchar',
                  isNullable: true,
                },
                {
                  name: 'lastName',
                  type: 'varchar',
                  isNullable: true,
                },
                {
                  name: 'telephone',
                  type: 'varchar',
                  isNullable: true,
                },
                {
                  name: 'createdAt',
                  type: 'timestamp',
                  default: 'now()',
                },
                {
                  name: 'updatedAt',
                  type: 'timestamp',
                  default: 'now()',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
