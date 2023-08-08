import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden container h-[100vh]">

      <div className="grid grid-cols-1 mx-auto sm:grid-cols-2">

        <div className="flex flex-col mt-[25%] mx-auto sm:mx-[40%] container justify-start">
          <h2 className="text-3xl sm:text-4xl text-white px-10 pt-10 mb-2 sm:mb-4 font-bold">Selamat datang di AnimeQuoteWaifu!</h2>
          <h5 className="text-lg p-10 pb-0 font-semibold text-white bg-[rgba(0,0,0,0.22)] xl:bg-transparent">
            Temukan Kutipan dan Gambar Waifu Anime Terbaik di AnimeQuoteWaifu - Sumber Inspirasi dan Kenangan Manis dari Dunia Anime. Jelajahi koleksi kutipan karakter dari seri anime favorit Anda dan nikmati gambar waifu yang indah. Bergabunglah dengan komunitas penggemar anime dan bagikan kesenangan anime bersama-sama.
          </h5>
        </div>

        <div className="items-center justify-center flex -z-10">
          <div className="w-[80%] h-[100px] sm:w-auto sm:h-[150px] absolute grid grid-rows-2 gap-10 mx-auto sm:right-1/4 ">
            <Image
              alt={'hero-image'}
              className={'object-cover translate-x-10 origin-bottom -rotate-12 rounded-xl'}
              src={'/assets/akame.jpg'}
              width={200}
              height={200}
              objectFit="cover"
            />
            <Image
              alt={'hero-image'}
              className={'object-cover translate-x-20 -translate-y-10 origin-bottom rotate-12 rounded-xl'}
              src={'/assets/mikasa.jpg'}
              width={200}
              height={200}
              objectFit="cover"
            />
            <Image
              alt={'hero-image'}
              className={'object-cover translate-x-10 translate-y-20 origin-bottom -rotate-12 rounded-xl'}
              src={'/assets/rem.jpg'}
              width={200}
              height={200}
              objectFit="cover"
            />
            <Image
              alt={'hero-image'}
              className={'object-cover translate-x-16 -translate-y-52 origin-bottom rotate-12 rounded-xl'}
              src={'/assets/asuna.jpg'}
              width={200}
              height={200}
              objectFit="cover"
            />
          </div>
        </div>
      </div>

    </main>
  )
}
