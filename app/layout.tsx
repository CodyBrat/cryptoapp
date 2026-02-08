import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { fetcher } from '@/lib/coingecko.actions'

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Crypteq',
  description: 'Track crypto prices, market cap, volume, and more.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  let trendingCoins: TrendingCoin[] = []
  try {
    const data = await fetcher<{ coins: TrendingCoin[] }>(
      '/search/trending',
      undefined,
      300
    )
    trendingCoins = data.coins
  } catch (error) {
    console.error('Failed to fetch trending coins:', error)
  }

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${figtree.variable} antialiased`}
      >
        <Header trendingCoins={trendingCoins} />
        {children}
      </body>
    </html>
  )
}
