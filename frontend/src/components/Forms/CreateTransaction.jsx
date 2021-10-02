import React, { useState, } from "react";
import { Label, Input, } from 'reactstrap';
import { Form, Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom";


export const CreateTransaction = () => {

  const [inputs, setInputs] = useState({});
  const history = useHistory();

  const apiPost = async () => {
    await fetch("http://localhost:3001/api/movements/", {
      method: "POST",
      body: JSON.stringify({
        concept: inputs.concept,
        amount: inputs.amount,
        date: inputs.date,
        revenue: inputs.revenue,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const handleChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  let inputErrors = () => {
    inputs.concept === '' && inputs.amount === null ? alert('Faltan datos para realizar la operación') : alert('Operación realizada')
}

  const handleSubmit = (event) => {
    event.preventDefault();
    inputErrors();
    apiPost();
    history.push('/');
  };

  return (
    <Form onSubmit={handleSubmit}>

      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <h1>Ingrese su operación</h1>
            <div className="form-floating mb-3">
              <input
                className="form-control" id="floatingInput"
                type="text"
                name="concept"
                placeholder="concepto"
                onChange={handleChange}
              />{" "}
              <label for="floatingInput">Concepto</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control" id="floatingInput"
                type="number"
                name="amount"
                placeholder="amount"
                onChange={handleChange}
              />
              <label for="floatingInput">Monto</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control" id="floatingInput"
                type="date"
                name="date"
                placeholder="date"
                onChange={handleChange}
              />
              <label for="floatingInput">Fecha</label>
            </div>
            <Label for="exampleSelect">Tipo de operación</Label>
            <Input className="form-control" type="select" name="revenue" id="floatingInput" onChange={handleChange}>
              <option value="" disabled selected>- Seleccione una categoria - </option>
              <option value='1'>Ingreso</option>
              <option value='2'>Egreso</option>
            </Input>
            <br></br>
            <input className="btn btn-primary" type="submit" value="Enviar" onChange={handleChange} />{' '}
            <Link to='/'><Button variant="success">Volver al listado</Button></Link>
          </div></div></div>
    </Form>
  );
}

export default withRouter (CreateTransaction);


