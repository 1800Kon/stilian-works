import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import NavigationBar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stilian Works',
  description: 'Fine jewerly, expert craftsmanship, and a passion for beauty.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body className={`${inter.className} bg-orange-50 h-screen`}>
        <Providers>
          <div className=''>
            <NavigationBar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
