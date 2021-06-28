import React from 'react'

const FooterComp = () => {
    return (
        <footer className='waveFooter text-gray-300 flex flex-col text-center justify-center items-center w-full bg-gray-700 p-10 md:p-10'>
            <h1 className='text-lg'>Made By Tegar Deyustian &copy; 2021</h1>
            <hr className='my-3 border border-t-1 border-gray-600 w-full'/>
            <div className='flex md:flex-row flex-col items-center  justify-evenly w-full'>
                <a target='_blank' href="https://github.com/lynxeevnxx"><h2 className='text-lg md:py-0 py-3'><i className="fab fa-github"></i> Github</h2></a>
                <a target='_blank' href="https://www.facebook.com/tegardm/"><h2 className='text-lg md:py-0 py-3'><i className="fab fa-facebook"></i> Facebook</h2></a>
                <a target='_blank' href="https://www.instagram.com/tegar_deyustian/"><h2 className='text-lg md:py-0 py-3'><i className="fab fa-instagram"></i> Instagram</h2></a>
                <a target='_blank' href="https://discord.gg/QMsuB5aWJe"><h2 className='text-lg md:py-0 py-3'><i className="fab fa-discord"></i> Discord</h2></a>
                <h2 className='text-lg md:py-0 py-3'><i className="far fa-envelope"></i> tegardm@gmail.com</h2>
            </div>
            <hr className='my-3 border border-t-1 border-gray-600 w-full'/>
            <p className='text-lg'>Terimakasih Sudah Mengunjungi Website Ini, Jika Ada Kritik Dan Saran Silahkan Hubungi Saya Melalui Salah Satu Platform Diatas</p>
        </footer>
    )
}

export default FooterComp
