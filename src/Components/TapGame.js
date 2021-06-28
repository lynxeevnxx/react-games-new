import React, { useEffect, useRef, useState } from 'react'
import swal from 'sweetalert'

const TapGame = () => {
    const [cordinate, setCordinate] = useState({top : 0 + '%', left : 0 + '%'})
    const [wrongCordinate, setWrongCordinate] = useState({bottom : 0 + '%', right : 0 + '%'})
    let [score, setScore] = useState(0)
    const correctEl = useRef(null)
    const wrongEl = useRef(null)
    let [time, setTime] = useState(60)
    let [localInterval, setLocalInterval] = useState(100000000000)
     
    useEffect(() => {
        setTime(time - 1);
            if (time === 0) {
                setTime(0)
                swal({
                    title: "Waktu Sudah Habis !",
                    text: `Kamu Memperoleh Score Sebanyak ${score}`,
                    icon: "success",
                    button : 'Ok'
                  }).then(() => {
                    let takePoint = JSON.parse(localStorage.getItem('points'))
                    let calculateScore = (takePoint + score) - 5
                    localStorage.setItem('points', JSON.stringify(calculateScore))
                    window.location.reload()
                })
                
            }

    }, [localInterval])

   

    const handleClick = () => {
        let coordinateX = Math.floor(Math.random() * 80);
        let coordinateY = Math.floor(Math.random() * 80);

        let wrongCoordinateX = Math.floor(Math.random() * 80);
        let wrongCoordinateY = Math.floor(Math.random() * 80);

        let arrayColor = [
            {correct : 'bg-red-500', wrong : 'bg-red-800'},
            {correct : 'bg-green-500', wrong : 'bg-green-800'},
            {correct : 'bg-blue-500', wrong : 'bg-blue-800'},
            {correct : 'bg-indigo-500', wrong : 'bg-indigo-800'},
            {correct : 'bg-yellow-500', wrong : 'bg-yellow-800'},
            {correct : 'bg-gray-500', wrong : 'bg-gray-800'}
        ]

        let random = Math.floor(Math.random() * arrayColor.length)

        correctEl.current.classList.remove('bg-red-500')
        correctEl.current.classList.remove('bg-green-500')
        correctEl.current.classList.remove('bg-blue-500')
        correctEl.current.classList.remove('bg-indigo-500')
        correctEl.current.classList.remove('bg-yellow-500')
        correctEl.current.classList.remove('bg-gray-500')

        wrongEl.current.classList.remove('bg-red-800')
        wrongEl.current.classList.remove('bg-green-800')
        wrongEl.current.classList.remove('bg-blue-800')
        wrongEl.current.classList.remove('bg-indigo-800')
        wrongEl.current.classList.remove('bg-yellow-800')
        wrongEl.current.classList.remove('bg-gray-800')

        correctEl.current.classList.add(arrayColor[random].correct)
        wrongEl.current.classList.add(arrayColor[random].wrong)

        setCordinate({
            top : coordinateY + '%',
            left : coordinateX + '%'
        })

        setWrongCordinate({
            bottom : wrongCoordinateY + '%',
            right : wrongCoordinateX + '%'
        })

        setScore(score + 1)
    }

    const handleWrong = () => {
        swal({
            title: "Kamu Memilih Lingkaran Yang Salah!",
            text: `Score Akhir Kamu Adalah ${score}` ,
            icon: "error",
            button: "Ok"
          }).then(() => {
            let takePoint = JSON.parse(localStorage.getItem('points'))
            let calculateScore = (takePoint + score) - 5
            localStorage.setItem('points', JSON.stringify(calculateScore))
            window.location.reload()
          })
    }

    const startHandle = (e) => {
       let theInterval = setInterval(() => {
            setLocalInterval(localInterval--)
       }, 500)

       setTimeout(() => {
        clearInterval(theInterval)
       }, 31000)
        
        e.target.parentElement.classList.add('hidden')

        let arrayColor = [
            {correct : 'bg-red-500', wrong : 'bg-red-800'},
            {correct : 'bg-green-500', wrong : 'bg-green-800'},
            {correct : 'bg-blue-500', wrong : 'bg-blue-800'},
            {correct : 'bg-indigo-500', wrong : 'bg-indigo-800'},
            {correct : 'bg-yellow-500', wrong : 'bg-yellow-800'},
            {correct : 'bg-gray-500', wrong : 'bg-gray-800'}
        ]

        let random = Math.floor(Math.random() * arrayColor.length)

        correctEl.current.classList.remove('bg-red-500')
        correctEl.current.classList.remove('bg-green-500')
        correctEl.current.classList.remove('bg-blue-500')
        correctEl.current.classList.remove('bg-indigo-500')
        correctEl.current.classList.remove('bg-yellow-500')
        correctEl.current.classList.remove('bg-gray-500')

        wrongEl.current.classList.remove('bg-red-800')
        wrongEl.current.classList.remove('bg-green-800')
        wrongEl.current.classList.remove('bg-blue-800')
        wrongEl.current.classList.remove('bg-indigo-800')
        wrongEl.current.classList.remove('bg-yellow-800')
        wrongEl.current.classList.remove('bg-gray-800')

        correctEl.current.classList.add(arrayColor[random].correct)
        wrongEl.current.classList.add(arrayColor[random].wrong)
    }


    return (
        <div className='tappingGame text-gray-300 w-full bg-gray-700  relative h-full w-full rounded-lg md:py-0 py-10 p-4'>
            <div className='absolute px-10 flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0 rounded-lg bg-gray-700 z-10'>
            <h1 className='text-3xl'>Tapping Game</h1>
            <hr className='my-3 border w-full mx-3 border-t-1 border-gray-500 '/>
            <h1 className='text-2xl'>Tekan Start Untuk Memulai</h1>
            <button onClick={startHandle} className='my-2 font-semibold bg-blue-500 px-3 py-2 rounded-lg'>Start</button>
            <hr className='my-3 border w-full mx-3 border-t-1 border-gray-500 '/>
            <p className='capitalize'>Klik start untuk memulai, kalian cukup menekan lingkaran yang berwarna lebih <strong>muda</strong>. Jika kalian
            menekan warna yang lebih tua kalian akan kalah dan point akan berkurang 5 dan setiap berhasil memilih yang benar score akan
            bertambah dan akan dikalkulasikan ke point dinavigasi</p>
            </div>
            <h1 className='text-3xl'>Tapping Game</h1>
            <hr className='my-3 border border-t-1 border-gray-600 '/>
            <div className='flex justify-evenly'>
            <h1 className='text-2xl md:text-3xl text-red-600'>Waktu : {time}</h1>
            <h1 className='text-2xl md:text-3xl text-green-500'>Score : {score}</h1>
            </div>
            <hr className='my-3 border border-t-1 border-gray-600 '/>
            <div  className='w-full p-3 h-80 rounded-lg bg-gray-600 relative'>
                <div id='correct' ref={correctEl} style={cordinate} onClick={handleClick} className='w-12 h-12 absolute rounded-full'></div>
                <div style={wrongCordinate} ref={wrongEl} onClick={() => {
                    handleClick()
                    handleWrong()
                }} className='w-12 h-12 absolute rounded-full'></div>
            </div>
        </div>
    )
}

export default TapGame
