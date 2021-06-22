import { Types } from '../Bank/bank.types';


interface IDepositAction {
    type: Types.DEPOSIT;
    payload: number;
}

interface IWithdrawAction {
    type: Types.WITHDRAW;
    payload: number;
}


interface IBankruptAction {
    type: Types.BANKRUPT;
}


export type Action = IDepositAction | IWithdrawAction | IBankruptAction