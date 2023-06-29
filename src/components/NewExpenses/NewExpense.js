import { useState } from 'react';
import ExpenseForm from '../Expenses/ExpenseForm';
import './NewExpense.css';

const NewExpense = (props)=>{
    const [isEditing, setIsEditing] = useState(false)
    const dataFromUser =(userInput)=>{
const expenseData={
    ...userInput
}
props.onAdd(expenseData)
}
const changeButtontoForm =()=>{
    setIsEditing(true)
}
const stopEding =()=>{
    setIsEditing(false);
}
    return<div className='new-expense'> 
   {!isEditing && <button onClick={changeButtontoForm}>Add New Expenses</button>}
{isEditing&& <ExpenseForm onCancel={stopEding} onSaveData={dataFromUser}/>}

</div>
}
export default NewExpense;