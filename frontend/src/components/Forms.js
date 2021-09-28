
import React, { useState, } from "react";
import {  Label, Input,  } from 'reactstrap';


function Forms() {
  
  const [inputs, setInputs] = useState({});

  


  
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

  const handleSubmit = (event) => {
    event.preventDefault();
    apiPost();
    console.log(inputs);
  };



  return (
    <div>
     <h1>Ingrese su operación</h1>
      <div>
        <form onSubmit={handleSubmit}>
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
          <br />
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
          <br />
          <div className="form-floating mb-3">
          <input
          className="form-control" id="floatingInput"
            type="date"
            name="date"
            placeholder="date"
            onChange={handleChange}
          />
          <label for="floatingInput">fecha</label>
          </div>
          <br /> 
          
         
       
        <Label for="exampleSelect">Tipo de operación</Label>
        <Input className="form-control" type="select"  name="revenue" id="floatingInput" onChange={handleChange}>
          <option>1</option>
          <option>2</option>
         </Input>
        <br /> 
 


  
          





          <input className="btn btn-primary" type="submit" value="enviar" onChange={handleChange} />
        </form>
      </div>
    </div>
  );
}

export default Forms;


