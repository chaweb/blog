import fs from "fs"
import path from "path"
import { stringify } from "querystring"

export default function Svc(socket, io) {
    return Object.freeze({
        CSVtoJS(link){
            if(link){
                return new Promise((resolve, reject)=>{
                    const LINKreal = path.join(__dirname,"..\\..\\static",link)
                    const fileCSV = fs.readFileSync(LINKreal, "utf-8")
                    const data = fileCSV.split("\r\n")
                    let jsonCSV = []
                    data.forEach((element, index) => {
                        jsonCSV[index] = element.split(",")
                    });
                    socket.emit('CSV' , jsonCSV)
                    resolve(JSON.stringify(jsonCSV))
                    
                }).catch((error) => {console.log(error);process.exit()})
            }else{console.log("no linked");}
        }
    })
}