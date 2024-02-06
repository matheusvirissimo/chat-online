const http = require('http');
const express = require("express");
const app = express();

const serverHttp = http.createServer(app);
const io = require("socket.io")(serverHttp);

app.use(express.static("public")) // arquivos estáticos == hmtl, css...

io.addListener("connection", (socket) =>{ // === addEventListener
    console.log("Um usuário conectou");
    socket.addListener("Nova mensagem", (mensagem)=> {
        io.emit("Nova mensagem", mensagem);
    });
}) 

serverHttp.listen(3030, ()=> {
    console.log("Servidor na porta 3030")
});