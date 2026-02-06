'use client'

import { useState, useRef, useTransition } from "react"
import { PERIOD_BUTTONS, PERIOD_CONFIG } from "@/constants"
import { IChartApi, ISeriesApi } from "lightweight-charts"
import { fetcher } from "@/lib/coingecko.actions"


const CandlestickChart = ({children,data,coinId,height=360, initialPeriod='daily'}: CandlestickChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null)
  const chartRef = useRef<IChartApi | null>(null)
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null)
  const [loading, setLoading] = useState(false)
  const [period, setPeriod] = useState(initialPeriod)
  const [ohlcData,setOhlcData] = useState<OHLCData[]>(data?? [])
  const [isPending,startTransition]=useTransition()
  const fetchOHLCData = async (selectedPeriod: Period) => {
    try{
      const {days,interval}=PERIOD_CONFIG[selectedPeriod]
      const newData=await fetcher<OHLCData[]>(`/coins/${coinId}/ohlc`, {
        vs_currency: 'usd',
        days,
        interval,
        precision: 'full',
      })
      setOhlcData(newData ?? [])
    }catch(error){
      console.error('Failed to fetch OHLC data:', error)
    }
  }
  const handlePeriodChange = (newPeriod: Period) => {
    if (newPeriod === initialPeriod) return
    startTransition( async () => {
      setPeriod(newPeriod)
      await fetchOHLCData(newPeriod)
    })
    
  }
  return (
    <div id='candlestick-chart'>
      <div className='chart-header'>
        <div className="flex-1">{children}</div>
        <div className='button-group'>
          <span className='text-sm ms-2 font-medium text-purple-100/50'>Period:</span>
          {PERIOD_BUTTONS.map(({value,label}) => (
            <button key={value} className={period===value ? 'config-button-active' : 'config-button'} onClick={() => handlePeriodChange(value)} disabled={loading}>{label}</button>
          ))}
        </div>
      </div>
      <div ref={chartContainerRef} className="chart" style={{height}}/>
    </div>
  )
}

export default CandlestickChart
