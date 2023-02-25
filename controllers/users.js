import { v4 as uuidv4 } from 'uuid';

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nps2'
});

connection.connect();

let users = [];

// * Rota para criar um usuário (Usando Postman)
export const createUser = (req, res) => {
    const user = req.body;
    // * Criando um ID para o usuário chamado, com a extensão/lib uuid
    users.push({ ...user, id:  uuidv4() });
    const query = 'INSERT INTO funcionario (nome, idade, id) VALUES (?, ?, ?)';

    res.send(`Usuário com o nome de ${user.firstName} adicionado ao banco de dados`);
}

// * Rota para achar um usuário com um ID específico
// * req.params está requerindo um certo parâmetro, no caso O id
export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
}

// * Rota para visualizar os usuários

export const getUsers =  (req, res) => {

    res.send(users);
}

// * Rota para deletar um usuário com um ID específico

export const deleteUser = (req, res) => {
    const { id } =  req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with the id ${id} deleted from the database.`);
}

// * Rota para atualizar um usuário com um ID específico

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id == id);

    if(firstName) user.firstName = firstName; 
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated.`);
}