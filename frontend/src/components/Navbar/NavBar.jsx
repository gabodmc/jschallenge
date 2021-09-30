import React, { useState, useEffect } from 'react'


import Balance from './Balance'

export const NavBar = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        data()
    }, [])

    const data = async () => {
        await fetch('http://localhost:3001/api/movements/')
            .then(response => response.json())
            .then(receivedData => setItem(receivedData.transactions))
    };
    return (
        <div>
               <Balance item={item} />
        </div>
    )
}
export default NavBar;