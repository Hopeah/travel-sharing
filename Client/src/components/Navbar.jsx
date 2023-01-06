import React from 'react'
import { FaGlobeAmericas } from 'react-icons/fa'

function Navbar() {
    return(
        <nav>
            <FaGlobeAmericas size={24}/>
            <span className='heading'>Sharing travel is caring double!</span>
        </nav>
    )
}

export default Navbar