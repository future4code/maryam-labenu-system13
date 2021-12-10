import { Request, Response } from "express";
import  connection  from "../connection"


export async function getTeachers(
    req: Request,
    res: Response
    ): Promise<void> {
        try {
            const result = await connection("docente").select('*')
            
            res.status(200).send(result)

        }catch(error : any){
            res.status(500).send({message:error.message})
        }    
}

export default getTeachers