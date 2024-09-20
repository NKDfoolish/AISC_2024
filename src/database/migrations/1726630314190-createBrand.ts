import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBrand1726630314190 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'brand',
            columns:[
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "uuid",
                },
                {
                  name: 'brand_name',
                  type: 'varchar',
                },
                {
                  name: 'email',
                  type: 'varchar',
                },
                {
                  name: 'phone',
                  type: 'varchar',
                },
                {
                  name: 'password',
                  type: 'varchar',
                },
                {
                  name: 'total_amount_voucher',
                  type: 'integer',
                  isNullable: true,
                },
                {
                  name: 'total_remaining_voucher',
                  type: 'integer',
                  isNullable: true,
                },
                {
                  name: 'sign_date',
                  type: 'timestamp',
                  default: 'now()'
                },
                {
                  name: 'views',
                  type: 'integer',
                  isNullable: true,
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('brand')
    }

}
