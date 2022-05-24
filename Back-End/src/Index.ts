import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users.route';

const app = express();

//Configuaçãoes da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
//Configurações de Rota
app.use(usersRoute);

//Inicia;ização do Servidor
app.listen(9090,() =>{
    console.log('A Aplicação esta rodando na porta: 9090');
});

