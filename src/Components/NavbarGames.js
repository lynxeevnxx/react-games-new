import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const NavbarGames = ({handleNav, navStyle}) => {

  

    return (
        <div style={navStyle} className=' fixed transition duration-700 z-50 py-20 w-1/2 md:w-2/5 h-full bg-gray-800 text-white '>
           <ul className='flex z-10 flex-col h-full justify-between'>
               <NavLink to='/typing-game' onClick={handleNav}><li className='border-b-2 border-gray-700 pb-5 transition duration-500 listNavGame' >Typing Game</li></NavLink>
               <NavLink to='/suit-game' onClick={handleNav}><li className='border-b-2 border-gray-700 pb-5 transition duration-500 listNavGame'>Suit Game</li></NavLink>
               <NavLink to='/guess-game' onClick={handleNav}><li className='border-b-2 border-gray-700 pb-5 transition duration-500 listNavGame'>Guess Card Game</li></NavLink>
               <NavLink to='/tapping-game' onClick={handleNav}><li className='border-b-2 border-gray-700 pb-5 transition duration-500 listNavGame'>Tapping Game</li></NavLink>
               <NavLink to='/click-game' onClick={handleNav}><li className='border-b-2 border-gray-700 pb-5 transition duration-500 listNavGame'>Click - Click Game</li></NavLink>
            </ul> 
        </div>
    )
}

export default NavbarGames
