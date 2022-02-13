const Database = require("better-sqlite3");
const prompt = require("prompt")
const createTable = "CREATE TABLE IF NOT EXISTS offers('name' TEXT, 'points' INTEGER, 'email' TEXT)";

prompt.start();

const addOffer = (name, points, email) => {
    const offers = './offers-data.sqlite3';
    let db = new Database(offers, Database.OPEN_READWRITE, (err) => { //make sure db creation works
        if (err) {
            console.error(err.message);
        }
        verbose: console.log;
    });
    db.exec(createTable);

    db.exec(`INSERT INTO offers(name, points, email) VALUES('${name}', ${points}, '${email}')`);
}

prompt.get(["name", "points", "email"], function (err, result) { //test function for adding submissions via command line
    if (err) { return onErr(err); }

    if (!(isNaN(Number(result.points)))) { //checks that point input is a number (integer)
        addOffer(result.name, result.points, result.email);
        console.log("Received input: ");
        console.log("   Name: " + result.name);
        console.log("   Points: " + result.points);
        console.log("   Email: " + result.email); //HTML form input will check if input is email before submission

    } else {
        console.log("Point input is not an integer; data not inserted.");
    }

});