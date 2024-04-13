require('dotenv').config();

const express = require('express');
const http = require('node:http');

async function checkIfDbExists(db) {
    const collections = await db.listCollections().toArray();
    return collections.length > 0;
}

(async () => {

require('express-shortcuts')._inject();
const app = require('./src/app');
const db = await require('./src/services/db')();
const addLenguatges = require('./addLenguatges');


const server = http.createServer(app);
// const port = parseInt(process.env.PORT || 3000);

require('./src/socket')(server);

const dbExists = await checkIfDbExists(db);
    if (!dbExists) {
        await require('./dbcreate')(db);
        await addLenguatges(db);
}

// app.listen(port, () => console.log(`Listening on port`, port));

app.use(express.static('public'));

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
})();
