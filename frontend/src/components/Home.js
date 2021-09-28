import React from 'react'
import "../css/home.css"
import MovementList from './MovementList/MovementList'
import IncomeList from './Incomes/IncomeList'

export const Home = ({item}) => {

    // const ultimos = item.slice(item.length -10)
   
    const spending = [];
    const income = [];
    const spendingValue = [];
    const incomeValue = [];

    // item.forEach(function (item) {
    //     if(item.revenue === 2) {
    //         spendingValue.push(item.amount,);
    //     }else{
    //         incomeValue.push(item.amount);
    //     }
    // });
    // item.forEach(function (item) {
    //     if(item.revenue === 2) {
    //     spending.push(item.concept);
    //     }else{
    //         income.push(item.concept);
    //     }
    // });
  










    const spendingTotal = spendingValue.reduce((a, b) => a + b, 0);
    const incomeTotal = incomeValue.reduce((a, b) => a + b, 0);
    const total = incomeTotal - spendingTotal

    
    console.log(income)
    console.log(spending)
    console.log(spendingTotal);
    console.log(incomeTotal);






    
    return (
        <div>
  
            <div className= "cont_balance">
            <h3 className= "Balance_home"  >Balance actual: ${total}</h3>
            </div>
            <h4>Ultimas 10 operaciones registradas</h4>
            <MovementList />
            <h3>Operaciones registradas según su tipo</h3>
            <IncomeList />
            {/* <ul className="list-group" >Egresos:
                {spending.map( element => <li className="list-group-item list-group-item-warning" key={ element.id}>{element}</li> ) }
            </ul>
            <ul>Ingresos:
                {income.map( element => <li className="list-group-item list-group-item-success"  key={ element.id}>{element}</li> ) }
            </ul> */}
        </div>
    )
}