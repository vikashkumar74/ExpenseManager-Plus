import react, { useState } from "react";
import "./App.css";
import Expenses from "./componets/Expenses";
import ExpensiveInput from "./componets/ExpensiveInput";
const dummy_Item = [
  { id:"e1", title: 'Tolet paper', amount: 0.93, date: new Date(2020, 7, 14) },
  { id:"e2", title: 'Room cleaner', amount: 0.93, date: new Date(2020, 7, 14) },
  { id:"e3", title: 'salt', amount: 0.93, date: new Date(2020, 7, 14) },
  { id:"e4", title: 'Detergent', amount: 0.93, date: new Date(2020, 7, 14) },
];
function App() {
    const [expressitem,SetNewData]=useState(dummy_Item);
  const addExpenseHandlers = (getprevDate) => {
    SetNewData([getprevDate, ...expressitem])

  };
  return (
    <div>
      <ExpensiveInput addExpenseDate={addExpenseHandlers}></ExpensiveInput>
      <Expenses express={expressitem}></Expenses>
    </div>
  );
}

export default App;
