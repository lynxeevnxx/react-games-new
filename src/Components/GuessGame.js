import React, {useEffect, useState} from 'react'
import gambar1 from '../image/utaha.png'
import gambar2 from '../image/naruto.png'
import gambar3 from '../image/rosseta.png'
import gambar4 from '../image/rem.png'
import gambar5 from '../image/rose.png'
import gambar6 from '../image/nanase.png'
import gambar7 from '../image/tanjiro.png'
import swal from 'sweetalert'

const GuessGame = () => {

    const [arrGambar, setArrGambar] = useState([{src : gambar1, id : 'utaha', idKey : 1}, {src : gambar2, id : 'naruto', idKey : 2},
    {src : gambar3, id : 'rosseta', idKey : 3}, {src : gambar4, id : 'rem', idKey : 4}, {src : gambar5, id : 'rose', idKey : 5}, 
    {src : gambar6, id : 'nanase',idKey : 6}, {src : gambar7, id : 'tanjiro', idKey : 7}])
    let [answer, setAnswer] = useState(arrGambar[Math.floor(Math.random() * arrGambar.length)])
    let [score, setScore] = useState(0)
    let [wrong, setWrong] = useState(0)
    let [card, setCard] = useState(null)

    const handleLayer = (e) => {
        e.target.classList.remove('bg-gray-900');
        const imgClicked = e.target.parentElement.querySelector('img');
       
        if (imgClicked.id === answer.id) {
           setScore(score = score + 1)
           
        } else {
            setWrong(wrong = wrong + 1)
        }
        const imgContainer = e.target.parentElement.parentElement;
        const layer = imgContainer.querySelectorAll('.bg-gray-900');
        if (layer.length === 0) {
            setTimeout(() => {
                swal({
                    title: "Waktu Sudah Habis !",
                    text: `Kamu Berhasil Menebak Dengan Benar ${score} Kali Dan Salah Sebanyak ${wrong} Kali`,
                    icon: "success",
                  }).then(() => {
                    let takePointsScore = JSON.parse(localStorage.getItem('points'))
                    let calculateScore = takePointsScore + (score * 5);
                    localStorage.setItem('points', JSON.stringify(calculateScore))

                    let takePointsWrong = JSON.parse(localStorage.getItem('points'))
                    let calculateWrong = takePointsWrong - wrong;
                    localStorage.setItem('points', JSON.stringify(calculateWrong))

                    window.location.reload();
                  })
            }, 500)
        }
        


    }

    const stopGame = () => {
        swal({
            title: "Kamu Memberhentikan Permainan !",
            text: `Kamu Berhasil Menebak Dengan Benar ${score} Kali Dan Salah Sebanyak ${wrong} Kali`,
            icon: "error",
          }).then(() => {
            let takePointsScore = JSON.parse(localStorage.getItem('points'))
            let calculateScore = takePointsScore + (score * 5);
            localStorage.setItem('points', JSON.stringify(calculateScore))

            let takePointsWrong = JSON.parse(localStorage.getItem('points'))
            let calculateWrong = takePointsWrong - wrong;
            localStorage.setItem('points', JSON.stringify(calculateWrong))

            window.location.reload();
          })
    }

    useEffect(() => {
    
           setCard(arrGambar ? (
            arrGambar.map((gambar, index) => {
                let random = Math.floor(Math.random() * arrGambar.length)
                return <div key={index} className='w-40 relative my-2 md:w-36'>
                <img id={arrGambar[random].id} src={arrGambar[random].src} width='150' alt=""/>
                <div onClick={handleLayer} className='absolute layer w-full h-full
                 bg-gray-900  rounded-md top-0 bottom-0'></div>
            </div>
            })
        ) : <h1>Maaf Gambar Tidak Ada</h1>)


    }, [])

    


    return (
        <div className='guessGame text-gray-300 w-full bg-gray-700 rounded-lg p-4'>
            <h1 className='md:text-3xl text-2xl py-2'>Guess Game</h1>
            <hr className='mb-3 border border-t-1 border-gray-600 '/>
            <div className='flex flex-col items-center justify-center'>
            <h2 className='text-xl md:text-2xl capitalize'>Cari Karakter Bernama : {answer.id}</h2>
            <img src={answer.src} width='150' alt=""/>
            </div>
            <hr className='mb-3 border border-t-1 border-gray-600 '/>
            <div className='flex justify-around pb-3'>
                <h2 className='md:text-2xl text-xl text-green-400'>Benar : {score}</h2>
                <h2 className='md:text-2xl text-xl text-red-500'>Salah : {wrong}</h2>
            </div>
            <hr className='mb-3 border border-t-1 border-gray-600 '/>
            <div className='content w-full flex flex-wrap justify-evenly'>
              {card ? card : <h1 className='text-4xl'>Mohon Tunggu Sebentar...</h1>}  
            </div>
            <hr className='my-3 border border-t-1 border-gray-600 '/>
            <button onClick={stopGame} className='bg-red-500 px-3 py-2 rounded-lg'>Stop</button>
            <hr className='my-3 border border-t-1 border-gray-600 '/>
            <p className='capitalize'>Silahkan Tebak kartu yang diminta dari instruksi diatas, bisa saja kartu yang diminta tidak ada ataupun bisa lebih dari satu, jika kamu benar seluruh scorenya akan dikalikan dengan 5 dan dikalkulasikan
                ke point level dinavigasi, dan seluruh score salahnya akan dikalkulasikan dengan pengurangan ke point dinavigasi (ketika kalian sudah membuka satu kartu kalian wajib membuka semua kartu jika ingin point dikalkulasikan)
            </p>
        </div>
    )
}

export default GuessGame
