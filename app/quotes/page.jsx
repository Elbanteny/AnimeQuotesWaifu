'use client'
import { useState } from 'react';

const Index = () => {
    const [quotes, setQuotes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const fetchQuotes = async (name) => {
        try {
            const response = await fetch(`https://animechan.xyz/api/random/character?name=${name}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchTerm.trim() === '') {
            setQuotes([]);
            return;
        }

        try {
            const result = await fetchQuotes(searchTerm);
            setQuotes([result]);
        } catch (error) {
            console.error(error);
            setQuotes([]);
        }
    };


    return (
        <div className={'flex flex-col items-start w-full h-[100vh]'}>
            <div className='mt-[13rem] mx-auto text-center px-3 flex flex-col justify-center'>

                <h1 className={'title'}>Cari Quotes</h1>
                <h6 className={'title_description'}>Cari quotes dari karakter yang kamu sukai.</h6>

                {/* Search bar */}
                <div className="flex items-center justify-center">
                    <div className="w-full max-w-lg p-4 pl-0">
                        <div className="relative">
                            <form onSubmit={handleSearch}>
                                <input
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    type="search"
                                    placeholder="Cari quotes..."
                                    className="w-full px-4 py-2 text-gray-800 bg-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <button
                                    type='submit'
                                    className="absolute top-0 right-0 h-full px-4 text-white bg-purple-500 rounded-r-lg hover:opacity-80 transition duration-500 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                        <p className='italic font-light text-white mt-1'>
                            <span className="w-9 inline-block">Note: </span> - Hanya tersedia bhs Inggris <br />
                            <span className="w-9 inline-block"></span> - Cari berdasarkan nama Karakternya <br />
                            <span className="w-9 inline-block"></span> - Jika hasil tidak muncul kemungkinan sudah limit <br />
                            <span className="w-9 inline-block"></span> (100req/jam)
                        </p>
                    </div>
                </div>
            </div>
            {/* show quotes card */}
            <div className='w-full flex justify-center mb-5'>
                <div className='w-3/4 sm:w-1/2 mt-8'>
                    {quotes.map((quote, index) => (
                        <div key={index} className='bg-purple-800 p-6 rounded-lg shadow-md'>
                            <h3 className='text-white text-lg font-semibold'>{quote.character}</h3>
                            <p className='text-gray-300 mt-2'>" {quote.quote} "</p>
                            <p className='text-gray-300 mt-2 font-semibold'>- {quote.anime}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Index