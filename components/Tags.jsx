'use client'
import { useState } from 'react';

const Tags = () => {
    const [isSfwExpanded, setIsSfwExpanded] = useState(false);
    const [isNsfwExpanded, setIsNsfwExpanded] = useState(false);
    const [isAgeVerified, setIsAgeVerified] = useState(false);

    const sfwTags = [
        'waifu', 'neko', 'shinobu', 'megumin', 'bully', 'cuddle', 'cry', 'hug', 'awoo', 'kiss',
        // Add more sfw tags here...
    ];

    const nsfwTags = [
        'waifu', 'neko', 'trap', 'blowjob',
        // Add more nsfw tags here...
    ];

    const handleNsfwClick = () => {
        if (isAgeVerified) {
            setIsNsfwExpanded(!isNsfwExpanded);
        } else {
            const isConfirmed = window.confirm('Anda yakin umur Anda sudah mencukupi untuk mengakses konten NSFW?');
            if (isConfirmed) {
                setIsAgeVerified(true);
                setIsNsfwExpanded(true);
            }
        }
    };

    return (
        <div className="flex justify-center">
            <div className="mx-auto bg-gray-800 p-4 rounded-lg max-w-auto flex flex-col justify-center items-center  w-full">
                <div className="text-white text-2xl font-bold mb-3">Pages</div>
                <div className="text-white mb-3">Jelajahi Galeri Waifu Kami.</div>

                <div className="tags">
                    <button onClick={() => setIsSfwExpanded(!isSfwExpanded)} className="text-white flex text-center items-center py-2">
                        <span className='border_custom flex items-center gap-2'>SFW
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-4 h-4  ${isSfwExpanded ? 'transform rotate-180' : ''} text-white transition duration-300`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                    {isSfwExpanded && (
                        <div className="tags_content transition duration-1000">
                            {sfwTags.map((tag, index) => (
                                <a key={index} href={`/waifuPict/sfw/${tag}`} className="text-white block py-1 hover:text-purple-800 hover:bg-white hover:bg-opacity-20 rounded border_custom">
                                    {tag}
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                <div className="tags mt-4">
                    <button onClick={handleNsfwClick} className="text-white flex justify-between items-center py-2">
                        <span className='border_custom flex items-center gap-2'>NSFW
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-4 h-4  ${isNsfwExpanded ? 'transform rotate-180' : ''} text-white transition duration-300`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                    {isNsfwExpanded && (
                        <div className="tags_content transition duration-1000">
                            {nsfwTags.map((tag, index) => (
                                <a key={index} href={`/waifuPict/nsfw/${tag}`} className="text-white block py-1 hover:text-purple-800 hover:bg-white hover:bg-opacity-20 rounded border_custom" >
                                    {tag}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tags;
