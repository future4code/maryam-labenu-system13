
export type Teacher = {
    id : string,
    nome : string,
    email : string,
    dataNasc : Date,
    docenteId: string  
}


export type Turma = {
    id: string,
    nome: string,
    modulo?: number
}
