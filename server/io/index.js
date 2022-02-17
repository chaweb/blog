import fs from "fs"

export default function Svc(socket, io) {
    return Object.freeze({
        test(){
            console.log("coucou")
            socket.emit("testServer", "vas te faire")
        }
    })
}