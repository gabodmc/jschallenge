import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateForm from "./components/Forms/CreateForm";
import EditForm from './components/Forms/EditForm'

const App = () => {
  const [items, setItems] = useState([]);
  const [balance, setBalance] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/movements/")
      .then((res) => res.json())
      .then((result) => {
        setItems(result.transactions.reverse().slice(result.length, 10));
        setBalance(result.balance);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home balance={balance} items={items} />
          </Route>
          <Route path="/edit/:id">
            <EditForm movements={items}  />
          </Route>
          <Route path="/create">
            <CreateForm />
          </Route>

        </Switch>
      </Router>
    </div>
    </>
  );
};

export default App;
