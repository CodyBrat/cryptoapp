'use client'

const CandlestickChart = ({children,data,coinId,height=360, initialPeriod='daily'}: CandlestickChartProps) => {
  return (
    <div id='candlestick-chart'>
      <div className='chart-header'>
        <div className="flex-1">{children}</div>
        <div className='button-group'>
          <span className='text-sm ms-2 font-medium text-purple-100/50'>Period:</span>
        </div>
      </div>

    </div>
  )
}

export default CandlestickChart
