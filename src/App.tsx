import { useDispatch, useSelector } from 'react-redux'

import { depositMoney, withdrawMoney, bankrupt } from './redux/Bank/bank.action';
import { State } from './redux/rootReducer';

function App() {

  const dispatch = useDispatch()
  const amount = useSelector((state: State) => state.bank)

  return (
    <div className="container">
      <h1>{amount}</h1>
      <button onClick={()=>dispatch(depositMoney(1000))}>Deposit</button>
      <button onClick={()=>dispatch(withdrawMoney(50))}>Withdraw</button>
      <button onClick={()=>dispatch(bankrupt())}>Bankrupt</button>
    </div>
  );
}

export default App;
