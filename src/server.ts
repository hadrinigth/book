import express from 'express';
import mustache from 'mustache-express';
import path from 'path';
import mainRouter from './routes/index'
import dotenv from 'dotenv'
import { mongoConnect } from './database/mongoDB';
import bodyParser from 'body-parser';
const server = express();
dotenv.config();
mongoConnect();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// parte de views // setando a engine// caminho
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
server.use(express.static(path.join(__dirname, '../public')));
// rotas 
server.use(mainRouter)
server.listen(process.env.PORT)
