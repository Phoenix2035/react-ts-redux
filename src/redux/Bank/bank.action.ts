import { Types } from './bank.types';
import { Dispatch } from 'redux';
import { Action } from './bank.interface';



export const depositMoney =  (amount: number) => {
    return {
        type: Types.DEPOSIT,
        payload: amount
    }
}


export const withdrawMoney = (amount: number) =>  ({
    type: Types.WITHDRAW,
    payload: amount
})

export const bankrupt = () =>  ({
    type: Types.BANKRUPT,
})