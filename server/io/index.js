import fs from "fs"
import path from "path"

export default function Svc(socket, io) {
    return Object.freeze({
        test(){
            socket.emit("testServer", "message de liaison entre serveur")
        }, 
    })
}