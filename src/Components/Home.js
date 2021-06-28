import React from 'react'
import reactImg from '../image/logo192.png'

const Home = () => {
    return (
        <div className='flex w-full hometitle p-3 bg-gray-700 rounded-lg h-full flex-col items-center justify-center'>
            <h1 className='text-3xl  capitalize'>selamat datang diwebsite react saya </h1>
            <hr className='my-3 border w-full mx-3 border-t-1 border-gray-600 '/>
            <img src={reactImg} className='animate-spin logoReact py-2' width='190' alt=""/>
            <p className='text-xl capitalize'>terimakasih sudah mengunjungi website ini, website ini merupakan website hasil belajar saya
               menggunakan library javascript yaitu React.Js, untuk detail mengenai contentnya bisa
               dicek di about
            </p>
        </div>
    )
}

export default Home
