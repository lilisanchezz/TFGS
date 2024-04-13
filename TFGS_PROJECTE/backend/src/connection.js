function saveMessage(db, type, from, data) {
    console.log('Saving message. Type:', type, '| From:', from);
    db.insertOne({ type, from, data });
}
function getMessages(db) {
    return db.find().toArray();
}

/**
 * 
 * @param {import('socket.io').Socket} socket 
 */
module.exports = db => async (socket) => {
    console.log("Connected succesfully to the socket ...");
    let loggedIn = false;
    let email;

    socket.on('login', async data => {
        if(loggedIn) return;
        console.log('login', data);

        for(const msg of await getMessages(db)) {
            if(msg.type === 'message') {
                if(msg.from === data) socket.emit('message_accepted', msg.data);
                else socket.emit('message', { message: msg.data, from: msg.from });
            } else if(msg.type === 'file') {
                const [filename, file] = msg.data.split('///');
                if(msg.from === data) socket.emit('file_accepted', { file, filename });
                else socket.emit('file', { file, filename, from: msg.from });
            }
        }

        loggedIn = true;
        email = data;
    });

    socket.on('message', data => {
        if(!loggedIn) return;
        socket.broadcast.emit('message', { message: data, from: email });
        socket.emit('message_accepted', data);
        saveMessage(db, 'message', email, data);
    });

    socket.on('file', data => {
        if(!loggedIn) return;
        socket.broadcast.emit('file', { file: data.file, filename: data.filename, from: email });
        socket.emit('file_accepted', data);
        saveMessage(db, 'file', email, `${data.filename}///${data.file}`);
    })
}
