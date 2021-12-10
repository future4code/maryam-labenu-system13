import {Request, Response} from "express"
import connection from "../connection"

const getActiveClasses = async(req:Request, res:Response) => {
    try {
        const resultado = await connection("Turma")
        .where('modulo','>=',1);
    
        res.send(resultado)
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
}

export default getActiveClasses

