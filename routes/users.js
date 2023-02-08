import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = []

// * Todas as rotas aqui estão começando com /users
router.get('/', (req, res) => {

    res.send(users);
}); 

router.post('/', (req, res) => {
    const user = req.body;
    // * Criando um ID para o usuário chamado, com a extensão/lib uuid
    users.push({ ...user, id:  uuidv4() });

    res.send(`Usuário com o nome de ${user.firstName} adicionado ao banco de dados`);
});

export default router;