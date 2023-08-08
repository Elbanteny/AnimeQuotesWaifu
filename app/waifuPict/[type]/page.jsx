// app/waifuPict/page.jsx

import { useRouter } from 'next/router';
import WaifuCategoryPage from './[type]/[category]';

const Page = () => {
    const router = useRouter();
    const { type, category } = router.query;

    return (
        <main className="overflow-hidden">
            <div className="flex flex-col mt-20 ml-20 container justify-start">
                {/* Other content here */}
                <h2 className="text-4xl text-white p-10 font-bold">Selamat datang di AnimeQuoteWaifu!</h2>
                {/* ... */}

                {/* Render WaifuCategoryPage */}
                {type && category && <WaifuCategoryPage type={type} category={category} />}
            </div>
        </main>
    );
};

export default Page;
