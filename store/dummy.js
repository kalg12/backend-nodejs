const db = {
    'user': [
        { id: '1', name: 'Kevin' },
    ],
};

function list(tabla) {
    return db[tabla];
}

function get(tabla, id) {
    let coleccion = list(tabla);
    return coleccion.filter(item => item.id === id)[0] || null;
}

function upsert(tabla, id) {
    db[tabla].push(id);
}

function remove(tabla, id) {
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
};