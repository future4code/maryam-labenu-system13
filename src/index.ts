import {Request, Response} from "express"
import app from "./app"
import createClass from "./endpoints/createClass"
import createStudent from "./endpoints/createStudents"
import getActiveClasses from "./endpoints/getActiveClasses"
import getStudents from "./endpoints/getStudents"

// Teste
app.get("/", (req:Request, res:Response) => {
    res.send("Hello World!")
})

app.get("/class", getActiveClasses)
app.post("/class", createClass)

app.get("/student", getStudents)
app.post("/student", createStudent)