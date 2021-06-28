import React, { useEffect, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'


 const Navbar = ({handleNav}) => {

    const [nav, setNav] = useState(true)
    const [navStyle, setNavStyle] = useState({display : 'none'})
    const [expandText, setExpandText] = useState('Open')

    setInterval(() => {
        if (window.innerWidth > 768) {
            setNavStyle(null)
        }
    },100)


    useEffect(() => {
        if (window.innerWidth < 768) {
            setNavStyle({display : 'none'})
        }

        if (JSON.parse(localStorage.getItem('points')) == null || JSON.parse(localStorage.getItem('points')) <= 0) {
            localStorage.setItem('points', 0);
        } else {
            localStorage.setItem('points',localStorage.getItem('points'))
        }

    }, [])

    const points = JSON.parse(localStorage.getItem('points'))

   const renderBadge = () => {
    if (points >= 0 && points <= 50) {
        return (
            <li className='cursor-pointer bg-yellow-600 md:py-0 rounded-full px-3 py-2 md:py-2'>Rokie : {points}</li>
        )
    } else if (points >= 51 && points <= 150) {
        return (
            <li className='cursor-pointer bg-green-500 md:py-0 rounded-full px-3 py-2 md:py-2'>Elite : {points}</li>
        )
    } else if (points >= 151 && points <= 300) {
       return <li className='cursor-pointer bg-blue-600 md:py-0 rounded-full px-3 py-2 md:py-2'>Pro : {points}</li> 
    } else if (points >= 301 && points <= 500) {
        return <li className='cursor-pointer bg-red-600 md:py-0 rounded-full px-3 py-2 md:py-2'>Expert : {points}</li>
    } else if (points >= 501) {
        return <li className='cursor-pointer bg-yellow-400 md:py-0 rounded-full px-3 py-2 md:py-2'>Legendary : {points}</li>
    }
   }

    
    const handleClick = () => {
        setNav(!nav)
        if (nav) {
            setNavStyle({display : 'none'})
            setExpandText('Open')
        } else {
            setNavStyle({display : null})
            setExpandText('Close')
        }
    }

    return (
        <React.Fragment>
            <nav className='md:static text-center relative bg-gray-700 text-white p-5 flex md:flex-row flex-col justify-between items-center w-full md:px-20 px-10'>

            <p id='brand-logo' className='animate-pulse text-xl  md:pb-0 pb-10'><i className="fab fa-react duration-3000 animate-spin"></i> Kyo React Games</p>
            <button onClick={handleClick} className='w-full absolute inset-x-0 md:hidden bottom-0 py-3 m-0 bg-gray-800 md:text-black text-white'>{expandText}</button>
                
                <ul style={navStyle} className='md:pb-0 pb-10 md:flex md:flex-row flex-col items-center w-1/2 items-center justify-center md:justify-between'>
                {renderBadge()}
                    <NavLink exact to='/'><li className='md:py-0 py-3'>Home</li></NavLink>
                    <NavLink to='/about'><li className='md:py-0 py-3'>About</li></NavLink>
                    <li onClick={handleNav} className='cursor-pointer rounded-full gamesBtn px-3 md:py-0 py-2 md:py-2'>Games</li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Navbar
