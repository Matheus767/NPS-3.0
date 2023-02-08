// * Importando express, framework que abre o servidor
import express from 'express';
//* Body parser, para auxiliar no processamento de requisições
import bodyParser from 'body-parser';
// * Importando rotas
import usersRoutes from './routes/users.js'

// * Constantes que armazenam a função que executa o servidor e a porta em que o servidor está retornando
const app = express();
const PORT = 5000;

// * Fazendo com que o express entenda .json
app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('Hello from homepage.');
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

// * https://www.youtube.com/watch?v=l8WPWK9mS5M 28min
