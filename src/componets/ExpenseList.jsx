import ExpensiveItem from "./Expensiveitem";
import './ExpenseList.css';
function ExpenseList(props){
   if(props.items.length===0){
    return <h2>found no any Expense</h2>
   }
    return ( <ul>
    {props.items.map((item) => (
     <ExpensiveItem
     key={item.id}
       title={item.title}
       amount={item.amount}
       date={item.date}
     ></ExpensiveItem>
   ))}
   </ul>
   )
}
export default ExpenseList;