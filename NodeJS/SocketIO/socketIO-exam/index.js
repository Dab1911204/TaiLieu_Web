const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  socket.emit("SEVER_SEND_SOCKET_ID", socket.id);
  socket.on("CLIENT_SEND_MESSAGE", (msg) =>{
    console.log('message: ' + msg);
    //A gửi lên cho sever và sever gửi về cho A
    //ví dụ:gửi tin nhắn bị lỗi,thì thông báo lỗi chỉ trả về cho A
    //socket.emit("SEVER_RETURN_MESSAGE", msg);

    //A gửi lên cho sever và sever gửi về cho client tất cả người dùng A,B,C,...
    //Tính năng chat theo nhóm
    io.emit("SEVER_RETURN_MESSAGE", msg);

    //A gửi lên cho sever và sever gửi về cho client tất cả người dùng (trừ A) B,C,...
    //Ví dụ: hn sn ô A thì sẽ gửi thông báo cho B,C
    //socket.broadcast.emit("SEVER_RETURN_MESSAGE", msg);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});