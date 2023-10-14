import React from 'react';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='bg-white px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div  className='relative flex items-center justify-between'>
                <img src={logo} alt="" />
                <ul className=' text-4xl font-semibold'>
                    <a  href="home">Home</a>
                    <a className='ms-8' href="movies">Movies</a>
                    <a className='ms-8' href="contact us">Contact us</a>
                </ul>

            </div>
            
        </div>
    );
};

export default Header;