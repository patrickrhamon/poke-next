import Navibar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import styles from '../styles/components/Layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Poke-Next',
  description: 'A Poke-dex powered by next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        <Navibar /><br /><br />
        <div className={styles.container}>
          {children}
        </div><br /><br />
        <Footer />
      </body>
    </html>
  )
}
