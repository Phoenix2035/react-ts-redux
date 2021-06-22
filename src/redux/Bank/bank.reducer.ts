import { Action } from "../Bank/bank.interface"
import { Types } from '../Bank/bank.types';



const initial_state = 0



const bankReducer = (state: number = initial_state, action: Action) => {
    switch (action.type) {
        case Types.DEPOSIT:
            return state + action.payload
        case Types.WITHDRAW:
            return state - action.payload
        case Types.BANKRUPT:
            return 0
        default:
            return state
    }
}

export default bankReducer