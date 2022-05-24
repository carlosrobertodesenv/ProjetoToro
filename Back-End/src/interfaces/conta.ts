import Shares from './shares';

interface Conta{
    CPF: string;
    Saldo: number;
    Coats?: Shares[];
}

export default Conta;