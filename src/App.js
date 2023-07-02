import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";


  // Array of object for dummy expense
  const dummy_Expenses = [
    { id: 'e1', date: new Date(2020, 11, 15), title: 'Car Insurance', amount: 876.98 },
    { id: 'e2', date: new Date(2021, 8, 1), title: 'Home Expenses', amount: 453.98 },
    { id: 'e3', date: new Date(2023, 6, 22), title: 'Personal Expenses', amount: 237.98 },
    { id: 'e4', date: new Date(2023, 2, 11), title: 'Flue Expenses', amount: 88.98 }
  ]
  const App =()=>{
    
  
  const [expense, setExpense] = useState(dummy_Expenses);
const dataFromUser =(userInput)=>{
setExpense((preValue=>{
  return[userInput, ...preValue];
}))
}
  return <div>
    <NewExpense onAdd={dataFromUser}/>
    <Expenses expenses={expense } />
  </div>
}

export default App;
