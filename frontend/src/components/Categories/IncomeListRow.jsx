import React from 'react';


function IncomeListRow (props){
    return (
        <React.Fragment>
            <tr>                
                <td>{props.id}</td>
                <td>{props.concept}</td>
                <td>${props.amount}</td>
                <td>{props.date}</td>               
            </tr>
        </React.Fragment>
    )
}
    
        

export default IncomeListRow;