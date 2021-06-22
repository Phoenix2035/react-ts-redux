import { combineReducers } from 'redux'
import bankReducer from './Bank/bank.reducer'

const rootReducers = combineReducers({
    bank: bankReducer
})

export default rootReducers


export type State = ReturnType<typeof rootReducers>