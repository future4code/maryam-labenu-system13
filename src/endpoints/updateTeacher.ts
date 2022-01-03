
import { Request, Response } from "express"

        
async function updateTeacher(
     req: Request,
    res: Response
    ): Promise<void> {
        try {
            const id = req.params.id

                        
             res.status(200).send({id: id})

         }catch(error : any){
             res.status(500).send(error.message)
        }    
 }


export default updateTeacher