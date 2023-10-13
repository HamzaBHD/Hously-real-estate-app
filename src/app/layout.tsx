import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import AuthProvider from 'context/AuthProvider'
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Hously-Project',
  description: 'Hously | Everyone deserves a nicer house',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} relative box-border`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
