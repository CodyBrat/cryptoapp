
import { fetcher } from '@/lib/coingecko.actions'
import React from 'react'
import DataTable from '@/components/DataTable'
import Image from 'next/image'


const Categories = async () => {
    const categories = await fetcher<Category[]>(`/coins/categories`)
    const columns:DataTableColumn<Category>[]=[
        {header:'Category',cellClassName:'category-cell',cell:(category)=>category.name},
        {header:'Top Gainers',cellClassName:'top-gainers-cell',cell:(category)=>category.top_3_coins.map((coin)=>(<Image src={coin} alt={coin} key={coin} width={28} height={28}/>))}
    ]
  return (
    <div id='categories' className='custom-scrollbar'>
        <h4>Top Categories</h4>
        <DataTable columns={columns} 
        data={categories?.slice(0,10)} 
        rowKey={(_,index)=>index}/>
    </div>
  )
}

export default Categories