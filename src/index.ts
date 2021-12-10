import {Request, Response} from "express"
import app from "./app"
import { connection } from "./connection"
import {getTeachers} from "./endpoints/getAllTeachers"
import {Teacher} from "./type"
import {createTeacher} from "./endpoints/createTeacher"
import { updateTeacher } from "./endpoints/updateTeacher"

// Teste
app.get("/", (req:Request, res:Response) => {
    res.send("Hello World!")
})

//Todos os docentes
app.get("/docentes", getTeachers)
app.post("/docente", createTeacher)
app.put('/docente/:id',updateTeacher)