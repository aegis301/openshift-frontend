import type { Metadata } from 'next'
import './ui/global.css'
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'OpenShift',
  description: 'Open source shift scheduling plattform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      </body>
      
    </html>
  )
}
