import { Request, Response } from "express"
import connection from "../connection"

export default async function getStudent(req: Request, res: Response){
    try{
    
        //consultar banco de dados
        const student = await connection('Estudante').select('*')


        //responder a requisição
        res.status(200)
        .send(student[0])
        
    }catch(error){
        res.status(500).send(error.message)
    }
}