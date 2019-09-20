const db = require('../data/db-config');

module.exports = {
    find,
    findBy,
    findById,
    add,
    remove
}

function find() {
    return db('departments')
};

function findBy(filter) {
    return db('departments')
        .where(filter)
};

function findById(id) {
    return db('departments')
        .where({ id })
};

function add(newDept) {
    return db('departments')
        .insert(newDept)
};

function remove(id) {
    return db('departments')
        .where({ id })
        .delete()
};
