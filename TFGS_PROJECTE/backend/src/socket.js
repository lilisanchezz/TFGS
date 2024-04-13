const createDb = require('./chatDb');
const socket = require('socket.io');
/**
 * @type {import('socket.io').Server}
 */
const io = new socket.Server()

module.exports = async (server) => {
    io.listen(server)

    const connection = require('./connection')(await createDb());
    
    io.on('connection', connection);
}
