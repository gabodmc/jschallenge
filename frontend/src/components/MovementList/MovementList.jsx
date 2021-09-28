import React, {Component} from 'react';
import MovementListRow from './MovementListRow';



class MovementList extends Component {
    constructor(){
        super();
        this.state = {
            movementList: [],
        }
    }

    componentDidMount(){                 
        fetch('http://localhost:3001/api/movements')
        .then(respuesta => {
            return respuesta.json()
            console.log("Respuesta" + respuesta)
       
        })
        .then(data => {                   
            this.setState({ 
                movementList: data.transactions.slice(data.length, 10)              
            })     
        })
        .catch(error => console.log(error))              
    }
    
    

    render(){
        return (
            <React.Fragment>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Concepto</th>
                                    <th>Monto</th>
                                    <th>Fecha</th> 
                                    <th>Tipo</th>                                   
                                </tr>
                            </thead>
                            <tbody>                                                                
                                {
                                this.state.movementList.map((product, index) => {                                                                       
                                    return <MovementListRow {...product} key={index} />
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

export default MovementList;