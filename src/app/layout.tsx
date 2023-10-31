import './globals.css'
import type { Metadata } from 'next'
import AuthProvider from 'context/AuthProvider'
import { poppins } from './fonts'

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
      <body className={`${poppins.className} relative box-border`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
