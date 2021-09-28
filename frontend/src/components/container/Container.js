import React, {useState,useEffect} from 'react'
import { NavBar } from '../Navbar/NavBar'


import "./Container.css"

export const Container = () => {
    const [item, setItem] = useState([])


        useEffect ( ()=> {
            data()
        }, [])

      const data = async () => {
          await fetch('http://localhost:3001/api/movements/')
            .then(response => response.json())
            .then(receivedData => setItem(receivedData.data))
};

    
    return (
        <div>
           <NavBar item={item}/>          
        </div>
    )
}


