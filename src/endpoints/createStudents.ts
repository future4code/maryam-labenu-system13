import { Request, Response } from "express";
import insertStudent from "../data/insertStudent";

export default async function createStudent(req: Request, res: Response){
    try{
        //validar parametros da req
        if(
            !req.body.nome ||
            !req.body.email ||
            !req.body.data_nasc ||
            !req.body.turma_id
        ){
                res
                .status(400)
                .send('Preencha todos os campos')
        }

        //incluir validação de turma

        //consultar banco de dados
        const id: string = Date.now().toString()
        await insertStudent(
            id,
            req.body.nome,
            req.body.email,
            req.body.data_nasc,
            req.body.turma_id
        )


        //responder a requisição
        res.status(200).send("Usuário criado com sucesso")
        
    }catch(error){
        res.status(500).send(error.message)
    }
}