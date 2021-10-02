import { useState } from 'react'
import { Link, useParams, withRouter, useHistory } from "react-router-dom";
import { FloatingLabel, Button } from 'react-bootstrap'

const EditTransaction = ({ movements }) => {
    const { id } = useParams()
    const history = useHistory();

    let [formValues, setFormValues] = useState({
        concept: "",
        amount: 0,
        revenue: 0,
        date: ""
    })

    const deletePost = async () => {
        await fetch(`http://localhost:3001/api/movements/${id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

    const editPost = async () => {
        await fetch(`http://localhost:3001/api/movements/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                concept: formValues.concept == '' ? movements.concept : formValues.concept,
                amount: formValues.amount == '' ? movements.amount : formValues.amount,
                date: formValues.date == '' ? movements.date : formValues.date,
                revenue: movements.revenue
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
    };

    const handleInputChange = (e) => {
        e.preventDefault()
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    };

    let inputErrors = () => {
        formValues.concept === '' || formValues.amount === null ? alert('Faltan datos para realizar la operación') : alert('Operación realizada')
    }


    let handleDeleteButton = event => {
        event.preventDefault();
        inputErrors();
        deletePost();
        history.push('/');
    };


    let handleSubmit = event => {
        event.preventDefault()
        inputErrors();
        editPost();
        history.push('/');
    };

    return (
        <>
            {movements.filter(movement => movement.id == id).map((movement) =>
                <form onSubmit={handleSubmit}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <h3>Formulario de edición</h3>
                                <div className="col-span-6 sm:col-span-4">
                                    <FloatingLabel for="floatingInput" className="block text-sm font-medium text-gray-700">Concepto</FloatingLabel>
                                    <input onChange={handleInputChange} type="text" name="concept" id="concept" placeholder={`${movement.concept}`} />
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                    <FloatingLabel for="floatingInput" className="block text-sm font-medium text-gray-700">Monto</FloatingLabel>
                                    <input onChange={handleInputChange} type="number" name="amount" id="amount" placeholder={`${movement.amount}`} />
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                    <FloatingLabel for="floatingInput" className="block text-sm font-medium text-gray-700">Fecha</FloatingLabel>
                                    <input onChange={handleInputChange} type="date" name="date" id="date" placeholder={`${movement.concept}`} />
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <Button type="submit" variant="primary">Actualizar</Button>{' '}
                            <Button onClick={handleDeleteButton} variant="danger">Borrar</Button>{" "}
                            <Link to='/'><Button variant="success">Volver al listado</Button></Link>
                        </div>
                    </div>
                </form>
            )}
        </>
    )
}

export default withRouter (EditTransaction);