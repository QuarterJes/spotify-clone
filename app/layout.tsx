import './globals.css'
import { Figtree } from 'next/font/google'

const inter = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Play Music - Spotify',
  description: 'Stream songs by your favourite artists!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
