import './ExpenseItem.css';

const ExpenseItem = () => {
    // Wrapper Component
    return (
        <div className='expense-item '>
            <div>Date</div>
            <div className='expense-item__description'><h2>Title</h2>
            <div className='expense-item__price'>Amount</div></div>
        </div>
    )

}

export default ExpenseItem;