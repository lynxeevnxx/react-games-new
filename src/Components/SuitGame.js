import React, { useState } from 'react'
import swal from 'sweetalert'

const SuitGame = () => {
    let [user,setUser] = useState('Gunting')
    let [comp, setComp] = useState('Gunting')
    let [index, setIndex] = useState(0)
    let [scoreBar, setScoreBar] = useState({
        win : 0,
        lose : 0,
        draw  : 0
    })
    const handleStart = (e) => {
        e.target.disabled = true
        e.target.classList.toggle('cursor-not-allowed')
        e.target.textContent = 'Wait...'
        e.target.classList.toggle('opacity-50')
       
        let theInterval = setInterval(() => {
            
            let suit = ['Gunting','Batu','Kertas']
            setIndex(index++)
            if (index === suit.length) {
                setIndex(index = 0)
            }

            setComp(suit[index]) 

        }, 100)

        setTimeout(() => {
            e.target.disabled = false
            e.target.classList.toggle('cursor-not-allowed')
            e.target.textContent = 'Start'
            e.target.classList.toggle('opacity-50') 
            let suit = ['Gunting','Batu','Kertas']
            let random = Math.floor(Math.random() * suit.length);
            setComp(comp = suit[random])

            clearInterval(theInterval)

            if (user == comp) {
                swal({
                    title: "Kamu Seri!",
                    text: `Kamu Memilih ${user} Dan Komputer Memilih ${comp}`,
                    icon: "info",
                  });

                  setScoreBar({
                      ...scoreBar,
                      draw : scoreBar.draw + 1
                  })
            } else if (user == 'Gunting' && comp == 'Kertas') {
                swal({
                    title: "Kamu Menang!",
                    text: `Kamu Memilih ${user} Dan Komputer Memilih ${comp}`,
                    icon: "success",
                  });

                  setScoreBar({
                    ...scoreBar,
                    win : scoreBar.win + 1
                })

                  let takePoints = JSON.parse(localStorage.getItem('points'))
                  let calculate = takePoints + 2;
                  localStorage.setItem('points', JSON.stringify(calculate))
            } else if (user == 'Gunting' && comp == 'Batu') {
                swal({
                    title: "Kamu Kalah!",
                    text: `Kamu Memilih ${user} Dan Komputer Memilih ${comp}`,
                    icon: "error",
                  });

                  setScoreBar({
                    ...scoreBar,
                    lose : scoreBar.lose + 1
                })

                let takePoints = JSON.parse(localStorage.getItem('points'))
                let calculate = takePoints - 1;
                localStorage.setItem('points', JSON.stringify(calculate))

                
            } else if (user == 'Kertas' && comp == 'Batu') {
                swal({
                    title: "Kamu Menang!",
                    text: `Kamu Memilih ${user} Dan Komputer Memilih ${comp}`,
                    icon: "success",
                  });

                  setScoreBar({
                    ...scoreBar,
                    win : scoreBar.win + 1
                })

                  let takePoints = JSON.parse(localStorage.getItem('points'))
                  let calculate = takePoints + 2;
                  localStorage.setItem('points', JSON.stringify(calculate))
            } else if (user == 'Kertas' && comp == 'Gunting') {
                swal({
                    title: "Kamu Kalah!",
                    text: `Kamu Memilih ${user} Dan Komputer Memilih ${comp}`,
                    icon: "error",
                  });

                  setScoreBar({
                    ...scoreBar,
                    lose : scoreBar.lose + 1
                })

                let takePoints = JSON.parse(localStorage.getItem('points'))
                let calculate = takePoints - 1;
                localStorage.setItem('points', JSON.stringify(calculate))
            } else if (user == 'Batu' && comp == 'Gunting') {
                swal({
                    title: "Kamu Menang!",
                    text: `Kamu Memilih ${user} Dan Komputer Memilih ${comp}`,
                    icon: "success",
                  });

                  setScoreBar({
                    ...scoreBar,
                    win : scoreBar.win + 1
                })

                  let takePoints = JSON.parse(localStorage.getItem('points'))
                  let calculate = takePoints + 2;
                  localStorage.setItem('points', JSON.stringify(calculate))
            } else if (user == 'Batu' && comp == 'Kertas') {
                swal({
                    title: "Kamu Kalah!",
                    text: `Kamu Memilih ${user} Dan Komputer Memilih ${comp}`,
                    icon: "error",
                  });

                  setScoreBar({
                    ...scoreBar,
                    lose : scoreBar.lose + 1
                })

                let takePoints = JSON.parse(localStorage.getItem('points'))
                let calculate = takePoints - 1;
                localStorage.setItem('points', JSON.stringify(calculate))
            }

        },3000)
    }

    return (
        <div className='suitGame text-gray-300 w-full bg-gray-700 rounded-lg p-4'>
            <h1 className='text-3xl py-2'>Suit Game</h1>
            <hr className='mb-3 border border-t-1 border-gray-600 '/>
            <div className='suitGameTable w-full px-2 flex items-center justify-between'>
                <div className='user'>
                    <h2 className='text-2xl md:text-3xl'>User </h2>
                    <h1 className='p-3 bg-gray-600 text-green-500 rounded-lg my-2 text-2xl md:text-3xl'>{user}</h1>
                </div>
                <h1 className='text-3 md:static hidden font-bold'>VS</h1>
                <div className='comp'>
                <h2 className='text-2xl md:text-3xl'>Comp </h2>
                    <h1 className='p-3 bg-gray-600 text-red-500 rounded-lg my-2 text-2xl md:text-3xl'>{comp}</h1>
                </div>
            </div>
            <hr className='mb-3 my-3 border border-t-1 border-gray-600 '/> 
            <div className='flex justify-evenly'>
            <button onClick={handleStart} className='text-xl mx-3 text-white bg-blue-500 py-2 px-3 rounded-lg'>Start</button>
            <button onClick={() => {window.location.reload()}} className='text-xl text-white bg-red-600 mx-3 py-2 px-3 rounded-lg'>Reload</button>
            </div>
            <hr className='mb-3 my-3 border border-t-1 border-gray-600 '/> 
            <div className='flex p-3 text-lg md:text-2xl justify-evenly'>
                <h2 className='text-green-400'>Menang : {scoreBar.win}</h2>
                <h2 className='text-red-500'>Kalah : {scoreBar.lose}</h2>
                <h2 className='text-yellow-600'>Seri : {scoreBar.draw}</h2>
            </div>
            <hr className='mb-3 my-3 border border-t-1 border-gray-600 '/> 
            <div className='userChoice'>
            <form className='flex text-xl md:text-2xl justify-around'>
                <div className='flex items-center'>
                <input type="radio" id="male" onChange={(e) => {setUser(e.target.value)}} className='md:p-4 p-2 form-radio text-indigo-600 h-4 w-4 md:mx-2 mx-1' name="gender" value="Gunting"/>
                <label htmlFor="male">Gunting</label>
                </div>
                <div className='flex items-center'>
                <input type="radio" id="male" onChange={(e) => {setUser(e.target.value)}} className='md:p-4 p-2  form-radio h-4 w-4 bg-red-600 md:mx-2 mx-1' name="gender" value="Batu"/>
                <label htmlFor="male">Batu</label>    
                </div>    
                <div className='flex items-center'>
                <input type="radio" id="male" onChange={(e) => {setUser(e.target.value)}} className='md:p-4 p-2 form-radio h-4 w-4 bg-red-600 md:mx-2 mx-1' name="gender" value="Kertas"/>
                <label htmlFor="male">Kertas</label>     
                </div>      
            </form>
            <hr className='my-3 border border-t-1 border-gray-600 '/>
            <p className='capitalize'>Kalian cukup memilih pilihan kalian dan klik tombol start seluruh hasil menang, kalah, seri akan ditambahkan ke scoreboard,
                nanti seluruh score benar akan dikalikan dengan 2 dan dikalkulasikan kedalam point navigasi, dan score kalah akan dikalkulasikan juga sebagai pengurangan kedalam point navigasi,
                dan untuk seri dia tidak akan dikalkulasikan. (refresh browser untuk melihat update pointmu)
            </p>

            </div>
        </div>
    )
}

export default SuitGame
