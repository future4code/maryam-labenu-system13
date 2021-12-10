import {Request, Response} from "express"
import app from "./app"
import createStudent from "./endpoints/createStudents"
import getStudents from "./endpoints/getStudents"

// Teste
app.get("/", (req:Request, res:Response) => {
    res.send("Hello World!")
})

app.get("/student", getStudents)
app.post("/student", createStudent)