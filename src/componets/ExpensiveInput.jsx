import React,{useState} from 'react';
import './Expensiveinput.css'
import ExpenseForm from './ExpenseForm';
function ExpensiveInput(props){
  const [isEditing,setIsEditing]=useState(false);
  const handlingExpenses= (expensesItem)=>{
 
    const expensesData={
      ...expensesItem,
      id: Math.random().toString()
    };
      props.addExpenseDate(expensesData);
      setIsEditing(false);
  };
   const startEditingHandling= ()=>{
    setIsEditing(true);
   };
   const  stopEditingHandling=()=>{
    setIsEditing(false);
   }
    return (
        <div className='new-expense'>
          {!isEditing &&( <button onClick={startEditingHandling}>Add New Expense</button>)}
        {isEditing &&(
      <ExpenseForm   onSaveExpenses={handlingExpenses} onClick={stopEditingHandling}></ExpenseForm>
    )} </div>
    )
}
export default ExpensiveInput;