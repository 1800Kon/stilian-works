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
      <body className={`${inter.className} min-h-screen bg-red-300`}>
        <Providers>
          <NavigationBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
