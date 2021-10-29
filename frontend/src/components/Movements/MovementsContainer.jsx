import React from "react";
import MovementsList from "./MovementsList";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MovementsContainer = ({ lastMovements, incomes, outcomes }) => {
  return (
    <>
      <Router>
        <Link to="/">
          <Button variant="primary">Últimos movimientos</Button>
        </Link>
        {"   "}
        <Link to="/ingresos">
          <Button variant="success">Ingresos</Button>
        </Link>
        {"   "}
        <Link to="/egresos">
          <Button variant="danger">Egresos</Button>
        </Link>
        {"   "}
        <br />
        <br />
        <Switch>
          <Route path="/" exact>
            <MovementsList movements={lastMovements} />
          </Route>
          <Route path="/ingresos" exact>
            <MovementsList movements={incomes} />
          </Route>
          <Route path="/egresos" exact>
            <MovementsList movements={outcomes} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default MovementsContainer;
