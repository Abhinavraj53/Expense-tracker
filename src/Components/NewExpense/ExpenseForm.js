import React, {useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enterdTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // Another method
    // const [userInput, setUserInput] = useState({
    //     enterdTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // Another method
        // setUserInput({
        //     ...userInput,
        //     enterdTitle: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,   // ...prevState is the previous state
        //         enterdTitle: event.target.value,
        //     };
        
    }
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData ={
            title : enterdTitle,
            amount : enteredAmount,
            date : enteredDate,
        }
        console.log(expenseData);

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
      setShowForm(true);
    };
  
    // const handleFormSubmit = (event) => {
    //   event.preventDefault();
    // };

    return (
        <div>
        <button onClick={handleButtonClick}>Want to Add Expenses, Click here</button>
        {showForm && (
            <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enterdTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
        )}
      </div>
    );
}

export default ExpenseForm