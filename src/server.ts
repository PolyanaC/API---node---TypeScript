import express from 'express';
import './database/conection';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';
import errorHandler from './errors/handler';

import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);











//Rota = conjunto
//Recurso = usuario
//metodos HTTP = GET, POST, PUT, DELETE
//Parâmetros
//GET = Buscar uma informação(lista, itens)
//POST = criando uma informação nova
//PUT = editando uma informação
//DELETE = deletando uma informação
//Métodos de parâmetros
//Query params: https://localhost:3333/user?search=nome
//Route params: https://localhost:3333/users/1 (identificar um recurso)
//Body: https://localhost:3333/users(serve para enviar dados que não cabem nos outros parametros)



//Requisição e resposta
//Drive nativo (sem abstração), query builder(sintaxe JS), ORM(classe que simboliza uma tabela typeorm)
//ORM - Object Relation Mapping