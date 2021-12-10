import {Request, Response} from "express"
import connection from "../connection"
import {Turma} from "../type"


const createClass = async(req:Request, res:Response) => {
    try {
        const {nome, modulo} = req.body

        if(!nome){
            throw new Error("Parâmetro faltando!")
        }

        // const turma: Turma = {
        //     id:Date.now().toString(),
        //     nome,
        //     modulo
        // }

        const turma: Turma = new Turma ( 
            Date.now().toString(),
            nome,
            modulo
        )

        await connection("Turma").insert(turma)
        res.status(200).send({message: "Turma criada!"})
        
    } catch (error:any) {
        res.status(400).send({message: error.message})
        
    }
}

export default createClass