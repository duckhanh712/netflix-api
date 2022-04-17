import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('categories', table => {
    table.increments('id').primary();
    table.string('name', 255).notNullable();
    table.integer('parent_id', 10).notNullable();
    table.string('image_url', 255).notNullable().defaultTo(null);
    table.timestamps(true, true);
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema
      .dropTable("categories");
}

