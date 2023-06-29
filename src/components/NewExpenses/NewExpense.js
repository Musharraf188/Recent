import ExpenseForm from '../Expenses/ExpenseForm';
import './NewExpense.css';

const NewExpense = (props)=>{
    const dataFromUser =(userInput)=>{
const expenseData={
    ...userInput
}
props.onAdd(expenseData)
}
    return<div className='new-expense'> 
    <ExpenseForm onSaveData={dataFromUser}/></div>
}

export default NewExpense;