import React,{useState} from 'react';
import './ExpenseForm.css'
function ExpeseForm(props){
      const [prevTitle,setTitle]=useState('');
      function getNewTitle(event){
   setTitle(event.target.value)
       
      };
      const [prevAmount,setAmount]=useState('');
      function getNewAmount(event){
   setAmount(event.target.value)
        
      };
      const [prevDate,setDate]=useState('');
      function getNewDate(event){
   setDate(event.target.value)
        
      };

      
      const formSubmission=(event)=>{
        event.preventDefault();
        const expenses={
         title:prevTitle,
         amount:prevAmount,
         date: new Date(prevDate),
        };
       
        props.onSaveExpenses(expenses);
        setAmount('');
        setDate('');
        setTitle('');

     }
    return (
        <form  onSubmit={formSubmission}>
        <div className='new-expense__controls'>
            <div  className='new-expense__control'>
                <label htmlFor="" >Write Title</label>
                <input type="text" value={prevTitle} onChange={getNewTitle} required/>
            </div>
            <div className='new-expense__control'> 
                <label htmlFor="">Amount</label>
                <input type="number" value={prevAmount} onChange={getNewAmount} required/>
            </div>
            <div className='new-expense__control'>
                <label htmlFor="">Enter Date</label>
                <input type="date" value={prevDate} onChange={getNewDate}/>
            </div>
        </div>
        <div  className='new-expense__actions'>
            <button type='submit'> Add Expnese</button>
        </div>
        </form>
    )
    

    
}
export default ExpeseForm;