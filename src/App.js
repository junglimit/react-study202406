
import React from "react";
import './App.css';
import ExpenseItem from "./components/expenses/ExpenseItem";


const App = () => {

    const hello = '안녕안녕'
    return (
        <>
            <ExpenseItem />
            <ExpenseItem />
        </>
    );
}

export default App;
