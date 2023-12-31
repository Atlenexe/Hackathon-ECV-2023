import type { Metadata } from 'next'
import './globals.css'
import Header from './components/header/header'

export const metadata: Metadata = {
  title: 'Neo Bloom',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
