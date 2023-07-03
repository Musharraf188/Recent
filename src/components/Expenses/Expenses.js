import Card from '../UI/Card';
import './Expenses.css';
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesChart from './ExpenseChart';

const Expenses =(props)=>{
  const [filterYear, setFilterYear] = useState("2022")
  const onChange =(selectedYear)=>{
setFilterYear(selectedYear);
  }
  const filterExpense = props.expenses.filter(expense=>{
    return expense.date.getFullYear().toString()=== filterYear
  })
    
    return <Card className='expenses '>
      <ExpenseFilter onFilter={onChange} />
      <ExpensesChart expenses={filterExpense}/>
     <ExpenseList items={filterExpense}/>
         {/* <ExpenseItem date={props.expenses[0].date} title={props.expenses[0].title} amount={props.expenses[0].amount} />
  <ExpenseItem date={props.expenses[1].date} title={props.expenses[1].title} amount={props.expenses[1].amount} />
  <ExpenseItem date={props.expenses[2].date} title={props.expenses[2].title} amount={props.expenses[2].amount} />
  <ExpenseItem date={props.expenses[3].date} title={props.expenses[3].title} amount={props.expenses[3].amount} /> */}
    </Card>
}

export default Expenses;