import React from 'react';


function IncomeListRow(props) {
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.concept}</td>
                <td>${props.amount}</td>
                <td>{ManageDate(props.date)}</td>
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


export default IncomeListRow;