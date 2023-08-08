import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AnimeQuoteWaifu',
  description: 'Selamat datang di AnimeQuoteWaifu - Portal kutipan anime dan galeri waifu terbaik untuk pecinta anime sejati. Temukan kutipan inspiratif dan mengharukan dari karakter-karakter anime favorit Anda, sambil menikmati kumpulan gambar waifu yang memikat hati. Dapatkan dosis kebijaksanaan dari seri anime terpopuler dan temukan keindahan waifu yang tak terlupakan. Kunjungi AnimeQuoteWaifu hari ini dan tingkatkan kecintaan Anda pada anime!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
