'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Audio, MagnifyingGlass } from 'react-loader-spinner';

const Page = () => {
    const pathName = usePathname();
    const [isLoading, setIsLoading] = useState(true);
    const [images, setImages] = useState([]);
    const [category, setCategory] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        // Remove the '/waifuPict' part from the pathName
        const cleanCategory = pathName.replace('/waifuPict/', '');
        setCategory(cleanCategory);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (!category) {
                setIsLoading(false);
                return;
            }

            try {
                const apiUrl = `https://api.waifu.pics/many/${category}`;
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'default',
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify({})
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (data.files && Array.isArray(data.files)) {
                    setImages(data.files);
                    setIsLoading(false);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        fetchData()
    }, [category]);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };


    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                {/* Use Loader component */}
                <MagnifyingGlass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="MagnifyingGlass-loading"
                    wrapperStyle={{}}
                    wrapperClass="MagnifyingGlass-wrapper"
                    glassColor='#c0efff'
                    color='#a855f7' />
            </div>
        )
    }
    if (!images) {
        return <div>No images found.</div>;
    }


    return (
        <main className="overflow-hidden">
            <div className="flex flex-col my-20 mx-auto justify-start items-center h-auto">
                <h2 className="text-4xl text-white p-10 font-bold">Selamat datang di Waifu Galeri !</h2>
                {/* Render WaifuCategoryPage */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full px-6">
                    {images.map((image, index) => (
                        <div key={index} className="relative group">
                            <div
                                className="w-full h-auto pb-[100%] relative cursor-pointer"
                                onClick={() => openModal(image)}
                            >
                                <div className="absolute inset-0 flex items-center transition-transform duration-300 transform group-hover:scale-90">
                                    <Image
                                        alt={`waifus-image ${index}`}
                                        className="object-cover"
                                        src={image}
                                        layout="fill"
                                        sizes='auto'
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedImage && (
                    <div
                        className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-90 z-50"
                        onClick={closeModal}
                    >
                        <div className="relative w-screen h-screen md:w-[98vw] md:h-screen xl:w-screen xl:h-[95vh]">
                            <Image
                                alt="Full Image"
                                src={selectedImage}
                                layout="fill"
                                objectFit="contain"
                            />
                            <button
                                className="absolute xl:-top-5 top-0 right-0 m-2 sm:m-4 p-2 text-white bg-red-600 rounded-full hover:bg-red-400"
                                onClick={closeModal}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="w-full flex justify-center my-4">
                <Link
                    href="/waifuPict"
                    className="button_custom"
                >
                    Kembali
                </Link>
            </div>
        </main>
    );
};

export default Page;
