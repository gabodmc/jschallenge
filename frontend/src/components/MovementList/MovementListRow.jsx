import React from 'react';


function MovementListRow (props){
    return (
        <React.Fragment>
            <tr>                
                <td>{props.id}</td>
                <td>{props.concept}</td>
                <td>${props.amount}</td>
                <td>{props.date}</td>        
                <td>{props.revenue}</td>         
            </tr>
        </React.Fragment>
    )
}
    
        

export default MovementListRow;