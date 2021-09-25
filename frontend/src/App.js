import logo from './logo.svg';
import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css';
import Navbar from './components/Navbar';
import { Router } from 'react-router';


const App = () => {

  const [currentBalance, setCurrentBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5001/api/transactions`)
      .then(
        res => (
          setCurrentBalance(res.data.meta.currentBalance),
          setTransactions(res.data.data)
        )
      )
      .catch(err => {
        console.log('Error : ' + err);
      })
  }, [])
  
  return (
    <Router>
    <>
    <Navbar currentBalance={currentBalance} />
    </>
    </Router>);
}

export default App;
