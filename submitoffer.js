const Database = require("better-sqlite3");
const createTable = "CREATE TABLE IF NOT EXISTS offers('name' TEXT, 'points' INTEGER, 'contact' TEXT)";

const addOffer = (name, points, contact) => {
    const offers = './offers-data.sqlite3';
    let db = new Database(offers, Database.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        verbose: console.log;
    });
    db.exec(createTable);

    db.exec(`INSERT INTO offers(name, points, contact) VALUES('${name}', ${points}, '${contact}')`);
}