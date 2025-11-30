import './globals.css'
import { Inter, Oswald } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-oswald',
})

export const metadata = {
  title: 'ULAAN - Mongolian Streetwear',
  description: 'Modern heritage meets global streetwear. Authentic Mongolian designs for the contemporary world.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}