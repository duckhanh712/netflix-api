import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', table => {
    table.increments('id').unique().primary();
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
    table.string('email', 255).notNullable().unique();
    table.string('password', 255).notNullable();
    table.boolean('gender').notNullable();
    table.date('birthday').notNullable();
    table.integer('role_id', 10).notNullable();
    table.string('image_url').notNullable().defaultTo(null);
    table.timestamps(true, true);
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema
      .dropTable("users");
}

