import React , {useState} from 'react';
import './Expensive.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
function Expensiveitem(props){
    // const [title,setTitle]= useState(props.title);
    // const evenHandler=()=>{
    //     setTitle('updated');
    // }
return (
    <Card className='expense-item'>
<ExpenseDate date={props.date}></ExpenseDate>
     <div className='expense-item__description'>
        <h2>{props.title}</h2>
     
     <div className='expense-item__price'>${props.amount}</div>
     
     </div>
     {/* <button onClick={evenHandler}>update</button> */}
    </Card>
)
}
export default Expensiveitem;