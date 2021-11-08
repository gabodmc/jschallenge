import React, { useState, useEffect } from "react";
import Balance from "./Balance";
import MovementsList from "./MovementsList";
import { Button, Spinner, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovementsContainer = () => {
  const [balance, setBalance] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    datos();
  }, []);

  const datos = async () => {
    await fetch("http://localhost:3001/api/movements/")
      .then((response) => response.json())
      .then((result) => {
        setItems(result.transactions);
        setBalance(result.balance);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Balance balance={balance} />
            <br />
            <Link to="/">
              <Button variant="primary">Últimos movimientos</Button>
            </Link>
            {"   "}
            <Link to="/movements/1">
              <Button variant="success">Ingresos</Button>
            </Link>
            {"   "}
            <Link to="/movements/2">
              <Button variant="danger">Egresos</Button>
            </Link>
            {"   "}
            <br />
            <br />
            {items.length ? (
              <MovementsList movements={items} />
            ) : (
              <Stack gap={2} className="col-md-5 mx-auto">
                <br />
                <Spinner animation="border" variant="primary">
                  <span className="visually-hidden">Loading...</span>
                  <br />
                </Spinner>
                <br />
              </Stack>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default MovementsContainer;
