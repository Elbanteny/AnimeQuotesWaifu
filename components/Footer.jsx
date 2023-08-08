'use client'
import Link from 'next/link'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col w-full bg-gray-800 text-white mt-10">
            <div className="container mx-auto py-7 px-2 flex justify-between items-center">
                <Link href={"/"} className={"flex justify-center items-center text__logo"}>
                    AnimeQuote<span className='text-[#FFC0CB]'>Waifu</span>
                </Link>
                <div>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="hover:text-gray-400">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-gray-400">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-gray-900 py-4 text-center">
                <p className="text-sm text-gray-400">
                    &copy; {currentYear} AnimeQuoteWaifu. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer