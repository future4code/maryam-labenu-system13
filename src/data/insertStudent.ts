import connection from "../connection";

export default async function insertStudent(
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
) {
    await connection
    .insert({
        id,
        nome,
        email,
        data_nasc,
        turma_id

    })
    .into('Estudante')
}