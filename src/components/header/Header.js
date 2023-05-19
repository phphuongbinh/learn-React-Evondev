import React, { useEffect, useRef } from 'react';
import './Header.scss'

const Header = () => {
    const headerRef = useRef();
    useEffect(()=> {
        const handleFixedHeader = () => {
            if (window.scrollY > 100)  headerRef.current.classList.add('fixed')
            else headerRef.current.classList.remove('fixed')
        }
        window.addEventListener('scroll', handleFixedHeader)
        return ()=> window.removeEventListener('scroll', handleFixedHeader)
    }, [])
    return (
        <div ref={headerRef} className='header'>
            
        </div>
    );
};

export default Header;