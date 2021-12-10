import {Request, Response} from "express"
import connection from "../connection"

const changeModule = async(req:Request, res:Response): Promise<void> => {
    try {
        const id = req.params.id
        const modulo = Number(req.body.modulo)

        if(!id){
            throw new Error("Parâmetro inválido!")
        }
    
        if (isNaN(modulo)) {
          throw new Error("Insira um módulo válido!")
        }

        if (modulo !==0 && modulo !==1 && modulo !==2 && modulo !==3 && modulo !==4 && modulo !==5 && modulo !==6) {
          throw new Error("Módulo inválido!")
        }
        
    await connection("Turma")
      .update({
        modulo: modulo,
      })
      .where({id: id});

        res.status(200).send({message: "Módulo atualizado!"})
      } catch (error:any) {
        res.status(400).send({message: error.message})
      }
}

export default changeModule

