
exports.up = function(knex) {
  return knex.schema.createTable('departments', dept => {
      dept.increments();
      dept
        .string('name', 128)
        .unique()
        .notNullable()
      dept
        .string('building', 128)
        .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('departments');
};
