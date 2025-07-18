let express = require("express");
let app = express();
let http = require("http")
let server = http.createServer(app);
let path = require("path")

// Socket
let socketio=require("socket.io")   // object creation of socket
let io = socketio(server);  //wrapping server inside socket

app.use('/',express.static(path.join(__dirname,"public")))

//io.on accpets an even or act as eventListener

io.on("connection",(socket)=>{
    console.log(`Connection Established at ${socket.id}...`)
    socket.on("sendMssge",(data)=>{

        // socket.emit("reveivedMssge",{
        //     msg : data.msg,
        //     id:socket.id
        // })

        // console.log("Server : " ,data.msg)

        io.emit("reveivedMssge",{
            msg : data.msg,
            sender : data.sender
        })

    })   // listen event...
 })
//socket work done
let port = process.env.PORT || 5000
server.listen(5000,()=>{
    console.log("Server is active at port 5000")
})