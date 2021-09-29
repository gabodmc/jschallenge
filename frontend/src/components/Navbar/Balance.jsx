
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, Button, Container } from 'react-bootstrap';

export const Balance = ({item}) => {
   
    const spending = [];
    const income = [];
    const spendingValue = [];
    const incomeValue = [];

    item.forEach(function (item) {
        if(item.revenue === 2) {
            spendingValue.push(item.amount,);
        }else{
            incomeValue.push(item.amount);
        }
    });
    item.forEach(function (item) {
        if(item.revenue === 2) {
        spending.push(item.concept);
        }else{
            income.push(item.concept);
        }
    });
  
    const spendingTotal = spendingValue.reduce((a, b) => a + b, 0);
    const incomeTotal = incomeValue.reduce((a, b) => a + b, 0);
    const total = incomeTotal - spendingTotal

    return (

        <>
 <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Balance actual: ${total}</Navbar.Brand>
    <Button variant="primary">Crear registro</Button>
    </Container>
  </Navbar>
</>

        
        // <div>
        //     <div className= "cont_balance">
        //     <h3 className= "Balance_home"  >Balance actual: ${total}</h3>
        //     </div>
        // </div>
    )
}

export default Balance;