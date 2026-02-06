import React from 'react'
import Image from 'next/image'
import DataTable from '@/components/DataTable'
import Link from 'next/link'
import { cn, formatCurrency } from '@/lib/utils'
import { TrendingDown, TrendingUp } from 'lucide-react'
import { fetcher } from '@/lib/coingecko.actions'

const columns: DataTableColumn<TrendingCoin>[] = [
  {
    header: 'Name',
    cellClassName: 'name-cell',
    cell: (coin) => {
      const item = coin.item;
      return (
        <Link href={`/coin/${item.id}`}>
          <Image src={item.large} alt={item.name} width={36} height={36} />
          <p>{item.name}</p>
        </Link>
      )
    }
  },
  {
    header: '24h Change',
    cellClassName: 'name-cell',
    cell: (coin) => {
      const item = coin.item;
      const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;
      return (
        <div className={cn('price-change', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
          <p>{isTrendingUp ? (<TrendingUp width={16} height={16} />) : (<TrendingDown width={16} height={16} />)}
            {Math.abs(item.data.price_change_percentage_24h.usd).toFixed(2)}%</p>

        </div>
      )

    }
  },
  {
    header: 'Price',
    cellClassName: 'price-cell',
    cell: (coin) =>
      coin.item.data.price
  },
]

// Dummy TrendingCoin data using local assets
const dummyTrendingCoins: TrendingCoin[] = [
  {
    item: {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      market_cap_rank: 1,
      thumb: '/assets/logo.svg',
      large: '/assets/logo.svg',
      data: {
        price: 45678.90,
        price_change_percentage_24h: {
          usd: 2.45
        }
      }
    }
  },
  {
    item: {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      market_cap_rank: 2,
      thumb: '/assets/logo.svg',
      large: '/assets/logo.svg',
      data: {
        price: 2567.34,
        price_change_percentage_24h: {
          usd: -1.23
        }
      }
    }
  },
  {
    item: {
      id: 'cardano',
      name: 'Cardano',
      symbol: 'ADA',
      market_cap_rank: 3,
      thumb: '/assets/logo.svg',
      large: '/assets/logo.svg',
      data: {
        price: 1.23,
        price_change_percentage_24h: {
          usd: 5.67
        }
      }
    }
  },
  {
    item: {
      id: 'solana',
      name: 'Solana',
      symbol: 'SOL',
      market_cap_rank: 4,
      thumb: '/assets/logo.svg',
      large: '/assets/logo.svg',
      data: {
        price: 98.45,
        price_change_percentage_24h: {
          usd: -3.21
        }
      }
    }
  },
  {
    item: {
      id: 'polkadot',
      name: 'Polkadot',
      symbol: 'DOT',
      market_cap_rank: 5,
      thumb: '/assets/logo.svg',
      large: '/assets/logo.svg',
      data: {
        price: 7.89,
        price_change_percentage_24h: {
          usd: 1.89
        }
      }
    }
  },
  {
    item: {
      id: 'ripple',
      name: 'XRP',
      symbol: 'XRP',
      market_cap_rank: 6,
      thumb: '/assets/logo.svg',
      large: '/assets/logo.svg',
      data: {
        price: 0.54,
        price_change_percentage_24h: {
          usd: -0.87
        }
      }
    }
  },
  {
    item: {
      id: 'avalanche',
      name: 'Avalanche',
      symbol: 'AVAX',
      market_cap_rank: 7,
      thumb: '/assets/logo.svg',
      large: '/assets/logo.svg',
      data: {
        price: 34.56,
        price_change_percentage_24h: {
          usd: 4.12
        }
      }
    }
  }
];

const page = async () => {
  const coin = await fetcher<CoinDetailsData>('/coins/bitcoin', { dex_pair_format: 'symbol' });
  const trendingCoins = await fetcher<{coins: TrendingCoin[]}>("/search/trending", undefined,300);
  return (
    <main className='main-container'>
      <section className='home-grid'>
        <div id="coin-overview">
          <div className="header pt-2">
            <Image src={coin.image.large} alt={coin.name} width={56} height={56} />
            <div className="info">
              <p>{coin.name} / {coin.symbol.toUpperCase()}</p>
              <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
            </div>
          </div>
        </div>
        <p>Trending Coins</p>
        <div id='trending-coins'>
          <DataTable columns={columns} data={dummyTrendingCoins} rowKey={(coins) => coins.item.id} tableClassName='trending-coins-table' />
        </div>
      </section>
      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>

    </main>
  )
}

export default page