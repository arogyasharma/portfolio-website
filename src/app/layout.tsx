import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arogya Sharma - Full Stack Developer',
  description: 'Passionate Full Stack Developer specializing in modern web technologies. Experienced in React, Node.js, Python, and cloud technologies.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'Python', 'Software Engineer', 'Web Development'],
  authors: [{ name: 'Arogya Sharma', url: 'https://github.com/arogyasharma' }],
  creator: 'Arogya Sharma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arogyasharma.dev',
    title: 'Arogya Sharma - Full Stack Developer',
    description: 'Passionate Full Stack Developer specializing in modern web technologies.',
    siteName: 'Arogya Sharma Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arogya Sharma - Full Stack Developer',
    description: 'Passionate Full Stack Developer specializing in modern web technologies.',
    creator: '@arogyasharma',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}