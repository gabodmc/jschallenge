import React from 'react'

import MovementList from './MovementList/MovementList'
import IncomeList from './Categories/IncomeList'
import OutcomeList from './Categories/OutcomeList'
import NavBar from './Navbar/Navbar'

export const Home = () => {


    return (
        <div>
            <NavBar />
            <MovementList />
            <IncomeList />
            <OutcomeList />
        </div>
    )
}

export default Home;