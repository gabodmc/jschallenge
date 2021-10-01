import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

function MovementListRow(props) {
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.concept}</td>
                <td>${props.amount}</td>
                <td>{ManageDate(props.date)}</td>
                <td>{props.revenue === 1 ? 'Ingreso' : 'Egreso'}</td>
                <td>
                    <Link to={`/edit/${props.id}`}>Edit</Link>
                </td>
            </tr>
        </React.Fragment>
    )
}

const ManageDate = (date) => {
    let dateObj = new Date(date);
    let month = dateObj.getUTCMonth() + 1
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    let newdate = day + "/" + month + "/" + year;
    return newdate;
}


export default MovementListRow;