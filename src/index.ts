import app from "./app"
import getTeachers from "./endpoints/getAllTeachers"
import createTeacher from "./endpoints/createTeacher"
import updateTeacher  from "./endpoints/updateTeacher"
import createClass from "./endpoints/createClass"
import createStudent from "./endpoints/createStudents"
import getActiveClasses from "./endpoints/getActiveClasses"
import getStudents from "./endpoints/getStudents"
import changeModule from "./endpoints/changeModule"


app.get("/class", getActiveClasses)
app.post("/class", createClass)
app.put("/class/:id", changeModule)

//Todos os docentes
app.get("/docentes", getTeachers)
app.post("/docente", createTeacher)
app.put('/docente/:id',updateTeacher)


app.get("/student", getStudents)
app.post("/student", createStudent)

