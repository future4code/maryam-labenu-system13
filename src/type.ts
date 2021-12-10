
export type Teacher = {
    id : string,
    nome : string,
    email : string,
    dataNasc : Date,
    docenteId: string  
}


// export type Turma = {
//     id: string,
//     nome: string,
//     modulo?: number;
// }

export class Turma  {
    id: string;
    nome: string;
    modulo?: number;

    constructor(id:string, nome:string, modulo:number){
        this.id = id;
        this.nome = nome;
        this.modulo = modulo
    }
}
