import type { Metadata } from 'next'
import { Volkhov } from 'next/font/google'
import './globals.css'
import { AOSInit } from './components/AOS'

const raleway = Volkhov({
  subsets: ['latin'],
  weight: '700'
})

export const metadata: Metadata = {
  title: 'CoinSage',
  description: 'Cryptocurrency Portfolio Tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
