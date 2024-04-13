import React,{useState} from "react";
import ExpensiveItem from "./Expensiveitem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";
import Card from "./Card";
function Expenses(props) {
  const [prevYear,setYear]=useState('2020');
 const setOnChangeFilter=selectedYear=>{
  setYear(selectedYear);
 }
 const filteredExpress=props.express.filter(expense=>{
  return expense.date.getFullYear().toString()===prevYear
 });


 
  return (
    <Card className="expenses">
      <ExpenseFilter selected={prevYear} onChangeFilter={setOnChangeFilter}></ExpenseFilter>
          <ExpenseChart expen={filteredExpress}></ExpenseChart>
          <ExpenseList items={filteredExpress}></ExpenseList>
      {/* <ExpensiveItem title={props.express[0].title} amount={props.express[0].amount} date={props.express[0].date}></ExpensiveItem>
<ExpensiveItem title={props.express[1].title} amount={props.express[1].amount} date={props.express[1].date}></ExpensiveItem>
<ExpensiveItem title={props.express[2].title} amount={props.express[2].amount} date={props.express[2].date}></ExpensiveItem>
<ExpensiveItem title={props.express[3].title} amount={props.express[3].amount} date={props.express[3].date}></ExpensiveItem> */}
    </Card>
  );
}
export default Expenses;
