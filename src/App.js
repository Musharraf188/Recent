import React from "react";
import ExpenseItem from "./components/ExpenseItem";

const App =()=>{
  // Array of object for dummy expense
  const expenses=[
    {id:'e1',date:new Date(2020, 11, 12), title:'Car Insurance', amount:237.98 },
    {id:'e2',date:new Date(2021, 8, 12), title:'Home Expenses', amount:237.98 },
    {id:'e3',date:new Date(2022, 6, 12), title:'Personal Expenses', amount:237.98 },
    {id:'e4',date:new Date(2023, 2, 12), title:'Flue Expenses', amount:237.98 }
  ]
  return <div> <h2>Hello World</h2>
  <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} />
  <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} />
  <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} />
  <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} />
  </div>
}

export default App;
