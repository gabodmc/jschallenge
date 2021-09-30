
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateForm from './components/Forms/CreateTransaction'




function App() {
  return (
    <div className="App">
            <Router>
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                </Switch>
                <Switch>
                    <Route path='/create'>
                        <CreateForm />
                    </Route>
                </Switch>
            </Router>
    
    </div>
  );
}

export default App;
