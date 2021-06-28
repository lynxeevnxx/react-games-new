import React, {useEffect, useState,useRef } from 'react'
import swal from 'sweetalert'


const TypingGame = () => {

    

    


const [arr, setArr] = useState(
        ['mobil','pesawat','baju','seragam','kaca','rambut','biru','laboratorium','konkatenasi','asimilasi','perdagangan','jepang','kita','saudara','tentang'
    ,'anda','yakin','variable','javascript','inggris','mencari','petualangan','beragam','kasihan','indahnya','kekecewaan','kenangan','kejahatan','pahlawan',
    'keranda','ikan','cahaya','fundamental','emas','laporan','ikatan','iskandar','infrastruktur','kecepatan','jari','boneka','gunting','blaster','tornado',
    'angka','indahan','pecahan','phyton','nomer','sembilan','sandal','kayu','batu','kebaya','keris','pedang','baja','pedang','tiang','listrik','dinamo','bahaya','keamanan','huruf','bunga'])
    const [answer, setAnswer] = useState('')
    let [index, setIndex] = useState(0)
    let [time, setTime] = useState(60)
    let [score, setScore] = useState(0)
    let [effectInterval, setEffectInterval] = useState(100000000);
    let correctAudio = useRef(null)

    

    useEffect(() => {
                if (answer == arr[index]) {
                    correctAudio.current.play();
                    setAnswer('')
                    setIndex(Math.floor(Math.random() * arr.length))
                    setScore(score + 1)
                    
                    
                }

                if (time != -1) {
                    setTime(time--);
                } else {
                    setTime(0);
                    
                }

                if (time <= 0) {

                
                    swal({
                        title: "Waktu Sudah Habis!",
                        text: `Score Akhir Kamu Adalah ${score}` ,
                        icon: "success",
                        button: "Reload",
                      }).then(() => {
                        let takePoints = JSON.parse(localStorage.getItem('points'))
                        let calculate = takePoints + score;
                        localStorage.setItem('points', JSON.stringify(calculate))
                        window.location.reload();
                      })
                    } 


    }, [effectInterval])

    const handleLayer = (e) => {
        e.target.parentElement.parentElement.classList.add('hidden')

            let theInterval =  setInterval(() => {
            setTime(time--)

            if (time == -1) {
                clearInterval(theInterval)
            }

    }, 450)

    let effectIntervaled = setInterval(() => {
        setEffectInterval(effectInterval--)
        if (time == 0) {
            clearInterval(theInterval)
            clearInterval(effectIntervaled)

        }
       
    }, 100)

    }

    return (
       
            <div className='typingGame p-3 md:py-0 py-10 text-gray-200 relative bg-gray-700 rounded-lg'>
            <div id='layer' className='p-5 absolute w-full top-0 left-0 right-0 bottom-0 rounded-lg
             h-full bg-gray-700 flex justify-center items-center'>
                <div >
                    <audio ref={correctAudio} src="../audio/correct.mp3"></audio>
                    <p className='text-3xl py-2'>Typing Game</p>
                    <hr className='mb-3 border border-t-1 border-gray-600 '/>
                    <button onClick={handleLayer} className='bg-blue-500 px-3 py-2 rounded-lg'>Start</button>
                    <hr className='my-5 border border-t-1 border-gray-600'/>
            <p className='capitalize'>Seperti Typing Game lainnya kalian hanya perlu menuliskan apa yang tertulis, jika sudah benar maka teks akan
                barubah secara otomatis, kalian diberikan waktu 60 detik, setiap kata yang berhasil ditulis akan mendapatkan score 1
                dan ketika waktu sudah habis score akan ditambahkan ke point dinavigasi.
            </p>
            <hr className='my-5 border border-t-1 border-gray-600'/>
            <p className='py-2 capitalize px-3 rounded-lg bg-gray-600'>untuk menghindari kesalahan system permainan, beralihlah permainan setelah permainan diselesaikan</p>
                </div>
            </div>
            <h1 className='text-2xl'>Typing Game</h1>
            <h1 className='textTypingGame py-5 text-4xl'>{arr[index]}</h1>
            <hr className=' border border-t-1 border-gray-600'/>
            <div className='flex justify-evenly'>
            <h1 className='my-5 text-2xl text-red-500'>Time Left : {time}</h1>
             <h1 className='my-5 text-2xl text-green-400'>Score : {score}</h1>
            </div>
            <hr className='mb-5 border border-t-1 border-gray-600'/>
            <input placeholder='Masukan Text Disini' value={answer} onChange={(e) => {setAnswer(e.target.value)}} 
            type="text" className='block w-full 
            border border-2 border-gray-400 box-border p-2 bg-gray-600 rounded-lg border-none'/>
            <hr className='my-5 border border-t-1 border-gray-600'/>
            <p className='capitalize'>Seperti Typing Game lainnya kalian hanya perlu menuliskan apa yang tertulis, jika sudah benar maka teks akan
                barubah secara otomatis, kalian diberikan waktu 60 detik, setiap kata yang berhasil ditulis akan mendapatkan score 1
                dan ketika waktu sudah habis score akan ditambahkan ke point dinavigasi.
            </p>
            
        
        </div>
        
    )
}

export default TypingGame
