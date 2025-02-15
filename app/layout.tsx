import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GEEKSFORGEEKS',
  description: 'Created with v0',
  generator: 'v0.dev',
  icons: {
    icon: './favIcon.ico'
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
