import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kernel Blog',
  description: 'Explore the world of Computer Science through the lens of my blog, where I share insights into my projects and experiences as a student in the field.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className='container'>
            <div className='wrapper'>
            <Navbar />
            {children}
            <Footer />
          </div>
          </div>
          </ThemeProvider>
          </ThemeContextProvider>
      </body>
    </html>

  )
}