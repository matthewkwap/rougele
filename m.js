const express = require("express");
const http = require("http");

const cors = require('cors')
 
const index = require("./index");

const app = express();
// app.use(index);
app.use(cors())
app.use(express.json())
const server = http.createServer(app);

const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    } 
  });;
// const io = socketIo(server);


let connected = []
io.on('connection', function (socket) {

  connected.push("ss")
  socket.emit('FromAPI', { hello: `jdxsello` });
  
  socket.on('ping', function (data) {
      console.log('socket ping', data);
      socket.emit('pong', data);
  });
  socket.on('From', function (data) {
      console.log('socket action', data);
      // io.emit('action', data);
  });
  socket.on("disconnect", () => {
        console.log("Client disconnected");
        
      });
});

// let interval;
// io.on("connection", (socket) => {
//   console.log("New client connected");
//   if (interval) {
//     clearInterval(interval);
//   }
//   interval = setInterval(() => 
//   getApiAndEmit(socket)
  
//   , 1000);

  
//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//     clearInterval(interval);
//   });
// });

// const getApiAndEmit = socket => {
//   const response = new Date();
//   // Emitting a new message. Will be consumed by the client
//   socket.on("From", data => {
//     console.log(data);
//    });
//   socket.emit("FromAPI", "hello");
// };


io.on('connection', function (socket) {
    socket.on('message',({name,message})=>{
      console.log(name + message)
      io.emit('message',{name,message})
    })
});
const users = []

const addUser = (id, name, room) => {
    const existingUser = users.find(user => user.name.trim().toLowerCase() === name.trim().toLowerCase())

    if (existingUser) return { error: "Username has already been taken" }
    if (!name && !room) return { error: "Username and room are required" }
    if (!name) return { error: "Username is required" }
    if (!room) return { error: "Room is required" }

    const user = { id, name, room }
    users.push(user)
    return { user }
}

const getUser = id => {
    let user = users.find(user => user.id == id)
    return user
}

const deleteUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) return users.splice(index, 1)[0];
}

const getUsers = (room) => users.filter(user => user.room === room)
io.on('connection', (socket) => {
  socket.on('login', ({ name, room }, callback) => {
      const { user, error } = addUser(socket.id, name, room)
      if (error) return callback(error)
      socket.join(user.room)
      socket.in(room).emit('notification', { title: 'Someone\'s here', description: `${user.name} just entered the room` })
      io.in(room).emit('users', getUsers(room))
      callback()
  })

  socket.on('sendMessage', message => {
      const user = getUser(socket.id)
      io.in(user.room).emit('message', { user: user.name, text: message });
  })

  socket.on("disconnect", () => {
      console.log("User disconnected");
      const user = deleteUser(socket.id)
      if (user) {
          io.in(user.room).emit('notification', { title: 'Someone just left', description: `${user.name} just left the room` })
          io.in(user.room).emit('users', getUsers(user.room))
      }
  })
})
server.listen(3001,()=>{
  console.log("on port 3001")
});