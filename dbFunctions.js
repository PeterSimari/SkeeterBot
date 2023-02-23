const fs = require('fs')
const { messageDB } = require('./config.json');

function readDb(dbName = messageDB) {
    const data = fs.readFileSync(dbName, 'utf8')
    return JSON.parse(data)
}

function writeDb(obj, dbName = messageDB) {
    if (!obj) return console.log('Please Provide data to save')
    try {
        fs.writeFileSync(dbName, JSON.stringify(obj))
        return console.log('SAVE SUCCESS')
    } catch (err) {
        return console.log('FAILED TO WRITE')
    }
}

module.exports = { readDb, writeDb }