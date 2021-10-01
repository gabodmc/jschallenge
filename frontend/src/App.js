import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect, useState } from 'react'
import CreateForm from './components/Forms/CreateTransaction'
import EditForm from './components/Forms/EditTransaction'



const App = ()  => {
  const [item, setItem] = useState([])

  useEffect(() => {
      data()
  }, [])

  const data = async () => {
      await fetch('http://localhost:3001/api/movements/')
          .then(response => response.json())
          .then(receivedData => setItem(receivedData.transactions))
  };


  return (
    <div className="App">
            <Router>
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path="/edit/:id">
                    <EditForm movements={item} />
                    </Route>
                    <Route path='/create'>
                        <CreateForm />
                    </Route>
                </Switch>
            </Router>
    
    </div>
  );
}

export default App;
