import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('connections', function (table) {
    table.increments();
    table.string('name');
    table.string('ip');
    table.string('password');
    table.string('keypath');
    table.string('provider');
    table.timestamps();
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('connections')
}
