const express = require('express')
const app = express();
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
app.use(cors())
let UsersRoom = {}
let map = new Map()
const server = http.createServer(app)
let bat='',ball=''
let players = []

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
})


io.on('connection', (socket) => {
    console.log(socket.id, ' connected');
    
    socket.on('disconnect', () => {
        console.log(socket.id, ' of room ', map.get(socket.id), ' has disconnected');
        let users = UsersRoom[map.get(socket.id)]
        // console.log(users);
        if (users) {
            let idx = users.indexOf(socket.id)
            UsersRoom[map.get(socket.id)].splice(idx,1)
            if(UsersRoom[map.get(socket.id)].length ===0)
                delete UsersRoom[map.get(socket.id)]
        }
        map.delete(socket.id)
        console.log(UsersRoom);
    })



    socket.on('send_message', data => {
        const room = data.room;
        socket.join(room)
        map.set(socket.id, room)
        // players.push[socket]
        if (UsersRoom[room]) {
            UsersRoom[room].push(socket.id)
        } else {
            UsersRoom[room] = [socket.id]
        }

        if(UsersRoom[room].length >=2){
            console.log(UsersRoom[room]);
            bat=UsersRoom[room][0]
            ball=UsersRoom[room][1]
            io.to(room).emit("start_play",UsersRoom[room])
        }
    })


    socket.on('batting',(turn)=>{
        
    })

    socket.on('bowling',(turn)=>{

    })

})

server.listen(4000, () => {
    console.log('Server Running');
})