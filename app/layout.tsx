import Header from './components/header'
import Footer from './components/footer'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Farm Equipment Repair | frmrr',
  description: 'Fix your farm equipment with detailed repair guides and access to genuine parts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-965148388-612x612.jpg-cT6ZUlxae8qmdp0SAqbBUDcvyhkaVK.jpeg')] bg-cover bg-fixed">
          <div className="bg-black bg-opacity-50 min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}

