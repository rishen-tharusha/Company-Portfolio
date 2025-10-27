import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hex Coders | Home',
  description: 'A modern portfolio and service showcase built with Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen">
        {children}
      </body>
    </html>
  )
}
