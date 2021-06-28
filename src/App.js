import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FooterComp from './Components/Footer';
import GuessColorGame from './Components/ClickGame';
import GuessGame from './Components/GuessGame';
import Navbar from './Components/Navbar';
import NavbarGames from './Components/NavbarGames';
import SuitGame from './Components/SuitGame';
import TapGame from './Components/TapGame';
import TypingGame from './Components/TypingGame';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  const [gameNav, setGameNav] = useState(true)
  const [navStyle, setNavStyle] = useState({transform : 'translateX(-100%)'})

  const handleNav = () => {
   setGameNav(!gameNav) 
}

   useEffect(() => {
       if (gameNav) {
           setNavStyle({transform : 'translateX(-100%)'})
       } else {
           setNavStyle({transform : 'translateX(0%)'})
       }
   }, [gameNav])

  return (
    <Router>
      <div className="p-10 text-gray-300 App">
    <NavbarGames handleNav={handleNav} navStyle={navStyle}/>
      <Navbar handleNav={handleNav}/>
        <div className='contentGames md:px-0 px-5 pt-20 pb-10 text-center'>
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route path='/typing-game'><TypingGame/></Route>
          <Route path='/suit-game'><SuitGame/></Route>
          <Route path='/guess-game'><GuessGame/></Route>
          <Route path='/tapping-game'><TapGame/></Route>
          <Route path='/click-game'><GuessColorGame/></Route>
          <Route path='/about'><About/></Route>
          
        </Switch>
        
      </div>
      <FooterComp/>
    </div>
    
    </Router>
  );
}

export default App;
