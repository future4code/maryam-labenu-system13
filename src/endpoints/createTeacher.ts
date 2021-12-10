import { Request, Response } from "express";
import { Teacher } from "../type";
import  connection  from "../connection";

 async function createTeacher(
    req: Request,
    res: Response
    ): Promise<void>{
    try{
        const {nome, email, dataNasc, docenteId} = req.body;

        // erro , mas eu tenho que passar como obrigatorio o docenteID?
        if(!nome || !email || !dataNasc || docenteId){ 
            throw new Error("Erro ao cadastrar.")
        }
    
        const docente:Teacher = {
            id:Date.now().toString(),
            nome, 
            email,
            dataNasc,
            docenteId
        }

        await connection("docente").insert(docente);

        res.status(200).send({message:"Usuario criado com sucesso"})
    }catch(error: any){
        res.status(400).send({message:error.message})
    }
    
}

export default createTeacher