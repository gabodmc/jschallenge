
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Balance = ({ item }) => {

    const outcome = [];
    const income = [];
    const outcomeValue = [];
    const incomeValue = [];

    item.forEach(function (item) {
        item.revenue === 2 ? outcomeValue.push(item.amount) : incomeValue.push(item.amount)
    });

    item.forEach(function (item) {
        item.revenue === 2 ? outcome.push(item.concept) : income.push(item.concept)
    });

    const spendingTotal = outcomeValue.reduce((a, b) => a + b, 0);
    const incomeTotal = incomeValue.reduce((a, b) => a + b, 0);
    const total = incomeTotal - spendingTotal

    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Balance actual: ${total}</Navbar.Brand>
                    <Link to='/create'><Button variant="primary">Crear registro</Button></Link>
                </Container>
            </Navbar>
        </>
    )
}

export default Balance;