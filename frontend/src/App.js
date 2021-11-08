import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MovementsContainer from "./components/Movements/MovementsContainer";
import Search from "./components/Search/Search";
import CreateForm from "./components/Forms/CreateForm";
import EditForm from "./components/Forms/EditForm";

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <MovementsContainer />
            </Route>
            <Route path="/movements/:movementId" exact>
              <MovementsContainer />
            </Route>
            <Route path="/edit/:id" exact>
              <EditForm />
            </Route>
            <Route path="/create" exact>
              <CreateForm />
            </Route>
            <Route path="/search" exact>
              <Search />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
