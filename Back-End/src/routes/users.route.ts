import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';

import User from "../interfaces/user";
import Conta from "../interfaces/conta";

const usersRoute = Router();

//Instanciando o banco de dados.
const serviceAccount = require('../../serviceAccountKey.json');
const firebase = initializeApp({
    credential: cert(serviceAccount)
});
const db = getFirestore();

// End-Points

//Get  de usuário   
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users: User[] = []
    res.status(StatusCodes.OK).send(users)
});

//Get de um usuário por id
usersRoute.get('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send(uuid)
});

// Post : Cadastra um usuário
usersRoute.post('/users', (req: Request<{body : User}>, res: Response, next: NextFunction) => {
    const novoUsuario = req.body;
    console.log(novoUsuario)

    const criarUsuario = db.collection('User').doc(novoUsuario.Email);
    criarUsuario.set(novoUsuario);

    const novaConta: Conta = {
        CPF: novoUsuario.CPF,
        Saldo: 0
    };

    const criarConta = db.collection('Conta').doc(novoUsuario.CPF);
    criarConta.set(novaConta);

    res.status(StatusCodes.CREATED).send(novoUsuario)
});

// // Put : Edita um usuário
// usersRoute.put('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
//     const uuid = req.params.uuid;
//     console.log(uuid)
//     res.sendStatus(StatusCodes.OK)
// });

// // Delete : Deleta um usuário
// usersRoute.delete('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
//     const uuid = req.params.uuid;
//     console.log(uuid)
//     res.status(StatusCodes.OK).send(uuid)
// });

export default usersRoute;