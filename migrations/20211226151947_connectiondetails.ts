import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('connections', function (table) {
    table.increments();
    table.string('name');
    table.string('ip');
    table.string('port');
    table.string('username');
    table.string('password');
    table.string('keypath');
    table.timestamps();
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('connections')
}
