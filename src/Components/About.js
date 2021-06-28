import React, { useReducer, useRef } from 'react'

const About = () => {
    const aboutEl = useRef(null)
    const techEl = useRef(null)
    const meEl = useRef(null)
    const rulesEl = useRef(null)
    const aboutWeb = (e) => {
        if (e.target.id === 'aboutWeb') {
            aboutEl.current.classList.toggle('hidden')
        } else if (e.target.id === 'tech') {
            techEl.current.classList.toggle('hidden')
        } else if (e.target.id === 'me') {
            meEl.current.classList.toggle('hidden')
        } else if (e.target.id === 'rules') {
            rulesEl.current.classList.toggle('hidden')    
        }
    }

    return (
        <div className='about p-5 bg-gray-700 capitalize text-left rounded-lg '>
            <h1 className='text-3xl   text-center'>Tentang Website Ini</h1>
            <hr className='my-3 border w-full mx-3 border-t-1 border-gray-600 '/>
            <h2 id='aboutWeb' onClick={aboutWeb} className='cursor-pointer text-2xl'><i className="fab fa-react duration-3000 animate-spin"></i> Games Website</h2>
            <p ref={aboutEl} className='hidden text-lg'>website ini merupakan website permainan sederhana, seperti tapping game, typing game, suit game dan lain - lain,
               dan ini juga merupakan hasil dari implementasi pembelajaran saya dengan React.Js (Javascript library)
            </p>
            <hr className='my-3 border w-full mx-3 border-t-1 border-gray-600 '/>
            <h2 id='rules' onClick={aboutWeb} className='cursor-pointer text-2xl'><i className="fab fa-react duration-3000 animate-spin"></i> Rules Game</h2>
            <p ref={rulesEl} className='hidden text-lg'> peraturannya sederhana, di setiap permainan yang ada memiliki peraturan nya tersendiri dan disetiap permainan
            kita dapat Memperoleh score, setiap score yang kita peroleh akan diakumulasikan kedalam point yang ada di navigasi, semakin banyak point yang kalian miliki
            maka semakin tinggi badge kalian misal untuk badge pertama rokie, kedua elite, ketiga pro, keempat expert, dan kelima legendary... point tersebut diambil dan
            ditambahkan ke localStorage jadi tidak masalah ketika refresh page.
            </p>
            <hr className='my-3 border w-full mx-3 border-t-1 border-gray-600 '/>
            <h2 id='tech' onClick={aboutWeb} className='cursor-pointer text-2xl'><i className="fab fa-react duration-3000 animate-spin"></i> Technologi</h2>
            <p ref={techEl} className="hidden text-lg">dalam pembuatan website ini saya menggunakan beberapa teknologi yang berbeda,
            untuk kerangka websitenya pasti saya menggunakan HTML <strong>(Hypertext Markup Language)</strong>. untuk stylingnya saya menggunakan
            CSS3 <strong>(Cascanding Style Sheet)</strong> dan framework CSS seperti <strong>tailwindCSS</strong>, lalu untuk membangun logika dalam websitenya
            saya menggunakan javascript vanilla dan library javascript <strong>React Js</strong> lalu untuk utility lainnya saya menggunakan
            icon dari <strong>font awesome</strong> dan <strong>sweatalert</strong></p>
            <hr className='my-3 border w-full mx-3 border-t-1 border-gray-600 '/>
            <h2 id='me' onClick={aboutWeb} className='cursor-pointer text-2xl'><i className="fab fa-react duration-3000 animate-spin"></i> About Me</h2>
            <p  ref={meEl} className="hidden text-lg">halo perkenalkan saya <strong>Tegar Deyustian</strong> seorang pelajar SMA yang sedang belajar menjadi seorang <strong>Front-End Developer </strong>
             dan dalam website ini saya sedang mengimplementasikan hasil belajar saya menggunkan library javascript yakni React.Js</p>

        </div>
    )
}

export default About
