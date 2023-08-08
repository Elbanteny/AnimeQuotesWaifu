'use client'
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [toggleDropdown, setToggleDropdown] = useState(true);
    const dropdownRef = useRef(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleButtonClick = () => {
        setIsMobileMenuOpen(false);
    };

    const handleOutsideClick = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isMobileMenuOpen]);

    return (
        <header className='w-full z-50 bg-[#FDF6F6] fixed'>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center px-6 py-6 sm:px-16'>
                <Link href={"/"} className={"flex justify-center items-center text__logo"}>
                    AnimeQuote<span className='text-[#FFC0CB]'>Waifu</span>
                </Link>

                {/* Hamburger Icon */}
                <button
                    onClick={toggleMobileMenu}
                    className="text-gray-800 font-semibold relative sm:hidden"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    {/* Mobile */}
                    <div className={`sm:hidden absolute right-0 ${isMobileMenuOpen ? 'flex' : 'hidden'} `} ref={dropdownRef}>
                        {toggleDropdown && (
                            <div className='dropdown'>
                                <Link href={'/quotes'} className='text-gray-800 font-semibold hover:text-purple-800 hover:duration-500 transition sm:flex'
                                    onClick={handleButtonClick}>
                                    Cari Quotes
                                </Link>
                                <Link href={'/waifuPict'} className='text-gray-800 font-semibold hover:text-purple-800 hover:duration-500 transition'
                                    onClick={handleButtonClick}>
                                    Daftar Gambar Waifu
                                </Link>
                            </div>
                        )}

                    </div>
                </button>

                {/* Desktop */}
                <div className={`hidden gap-10 sm:flex`}>
                    <Link href={'/quotes'} className='text-gray-800 font-semibold hover:text-purple-800 hover:duration-500 transition sm:flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        Cari Quotes
                    </Link>
                    <Link href={'/waifuPict'} className='text-gray-800 font-semibold hover:text-purple-800 hover:duration-500 transition'>
                        Daftar Gambar Waifu
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
