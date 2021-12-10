import {Request, Response} from "express"
import app from "./app"


// import { connection } from "./connection"
// import {getTeachers} from "./endpoints/getAllTeachers"
// import {Teacher} from "./type"
// import {createTeacher} from "./endpoints/createTeacher"
// import { updateTeacher } from "./endpoints/updateTeacher"

import createClass from "./endpoints/createClass"

import createStudent from "./endpoints/createStudents"
import getActiveClasses from "./endpoints/getActiveClasses"
import getStudents from "./endpoints/getStudents"


// Teste
app.get("/", (req:Request, res:Response) => {
    res.send("Hello World!")
})



// //Todos os docentes
// app.get("/docentes", getTeachers)
// app.post("/docente", createTeacher)
// app.put('/docente/:id',updateTeacher)

app.get("/class", getActiveClasses)
app.post("/class", createClass)


app.get("/student", getStudents)
app.post("/student", createStudent)

