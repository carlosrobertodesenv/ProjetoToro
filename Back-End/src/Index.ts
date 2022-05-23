import express, {Request, Response, NextFunction} from 'express';

const app = express()

app.get('/status', (req: Request, res: Response, next: NextFunction) =>{
    res.status(200).send({foo: 'Agora eu mudei'})
});

app.listen(9090,() =>{
    console.log('Executando na porta: 9090')
});