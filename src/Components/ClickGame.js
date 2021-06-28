import React, { useEffect, useRef, useState } from 'react'
import swal from 'sweetalert'

const GuessColorGame = () => {

    let [time, setTime] = useState(30)
    let [value, setValue] = useState('10')
    let [score, setScore] = useState(0)
    const layerEl = useRef(null)
    const selectEl = useRef(null)
    const clickContainer = useRef(null)

    const handleStart =(e) => {
        e.target.disable = true
        e.target.classList.toggle('cursor-not-allowed')
        e.target.classList.toggle('opacity-50')
        layerEl.current.classList.toggle('hidden')
        selectEl.current.classList.toggle('hidden')
        clickContainer.current.classList.remove('absolute')
        clickContainer.current.classList.add('static')

       let theInterval = setInterval(() => {
            setTime(time--)
            

            setTimeout(() => {
                if (time === -1) {
                    setTime(0)
                    e.target.disable = true
                    e.target.classList.toggle('cursor-not-allowed')
                    e.target.classList.toggle('opacity-50')
                    layerEl.current.classList.toggle('hidden')
                    clearInterval(theInterval)
                    swal({
                        title: "Kamu Gagal !",
                        text: `Waktu Sudah Habis Kamu Gagal Memperoleh Score Sebesar ${value}` ,
                        icon: "error",
                        button: "Ok",
                      }).then(() =>{
                            let takePoint = JSON.parse(localStorage.getItem('points'))
                            let calculateScore = takePoint - value
                            localStorage.setItem('points', JSON.stringify(calculateScore))
                          window.location.reload()
                      })
                    
                } else if (time == -1 || score >= value) {
                    clearInterval(theInterval)
                }
                
                
            }, 300)
        }, 400)

    }

    useEffect(() => {
        if (score >= value) {
            setTime(0)
            swal({
                title: "Kamu Berhasil !",
                text: `Kamu Berhasil Meraih Score Yang Ditentukan Sebelum Waktu Habis Yaitu ${value}` ,
                icon: "success",
                button: "Ok",
              }).then(() =>{
                    let takePoint = JSON.parse(localStorage.getItem('points'))
                    let calculateScore = takePoint + score
                    localStorage.setItem('points', JSON.stringify(calculateScore))
                  window.location.reload()
              })
        }
    }, [time])

    const clickHandle = () => {
        setScore(score + 1)
    }

    return (
        <div  className='clickCard text-gray-300 w-full bg-gray-700 rounded-lg p-4'>
            <h1 className='text-3xl py-2'>Click - Click Game</h1>
            <hr className='mb-3 border border-t-1 border-gray-600 '/>
            <div className='flex justify-evenly items-center'>
            <h1 className='text-2xl pb-2 text-green-400'>Score : {score}</h1>
            <h1 className='text-2xl pb-2 text-red-500'>Time : {time}</h1>
            </div>
            <hr className='mb-3 border border-t-1 border-gray-600 '/>
            <div className='colorContent relative flex items-center justify-center flex-wrap'>
                <div ref={layerEl} className='static md:absolute rounded-lg w-full h-full bg-gray-600 z-30 flex flex-col p-5 items-center justify-center'>
                    <h1 className='text-2xl'>Click Start Untuk Memulai !</h1>
                    <hr className='my-3 w-full border border-t-1 border-gray-700 '/>
                    <p className='capitalize'>kalian cukup menentukan berapa point yang kalian inginkan, lalu setelah kalian menentukan pointnya kalian cukup
                        menekan tombol start dan gamepun dimulai kalian hanya cukup menekan tombol 'click' yang ditengah... sampai score kalian
                        mencapai point yang kalian pilih, jika kalian gagal meraih score sesuai point yang kalian pilih maka kalian akan gagal 
                        dan value point yang kalian pilih akan diakumulasikan sebagai pengurangan sebaliknya jika kalian berhasil point akan 
                        diakumulasikan sebagai penambahan ke dalam point dinavigasi.
                    </p>
                </div>
                <div ref={clickContainer} onClick={clickHandle} className='md:static absolute w-32 h-32 z-20 active:bg-green-700 my-20 cursor-pointer  flex justify-center items-center rounded-full bg-green-500'>
                    <h1 className='text-2xl font-bold '>Click !</h1>
                </div>
                <div className='w-24 h-24 absolute animate-ping active:bg-green-700 cursor-pointer  flex justify-center items-center rounded-full bg-green-500'>
                    
                </div>
            </div>
            <hr className='my-4 border border-t-1 border-gray-600 '/>
            <div>
            <select ref={selectEl} value={value} onChange={(e) => {
                setValue(e.target.value) }} className='bg-gray-600 p-2 m-2 rounded-lg' id="">
                <option className='bg-gray-600 p-10' value="10">10 Point</option>
                <option className='bg-gray-600 p-10' value="30">30 Point</option>
                <option className='bg-gray-600 p-10' value="60">60 Point</option>
                <option className='bg-gray-600 p-10' value="100">100 Point</option>
            </select>
            <button onClick={handleStart} className='text-xl disabled:opacity-50 mx-3 text-white bg-blue-500 py-2 px-3 rounded-lg'>Start</button>
            </div>
        </div>  

        
    )
}

export default GuessColorGame
