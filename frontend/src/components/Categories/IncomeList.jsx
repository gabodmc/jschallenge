import React, { Component } from 'react';
import IncomeListRow from './IncomeListRow';



class IncomeList extends Component {
    constructor() {
        super();
        this.state = {
            movementList: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/movements')
            .then(respuesta => {
                return respuesta.json()
                console.log("Respuesta" + respuesta)

            })
            .then(data => {
                this.setState({
                    movementList: data.transactions.filter(movement => movement.revenue === 1)
                })
            })
            .catch(error => console.log(error))
    }





    render() {
        return (
            <React.Fragment>
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <h3>Ingresos</h3>
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Concepto</th>
                                        <th>Monto $</th>
                                        <th>Fecha</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.movementList.map((product, index) => {
                                            return <IncomeListRow {...product} key={index} />
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default IncomeList;