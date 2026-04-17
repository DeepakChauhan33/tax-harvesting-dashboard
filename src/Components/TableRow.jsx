import React from 'react'

// COMPONENTS
import Checkbox from './Checkbox'


const TableRow = ({ holding }) => {
  return (
    <tr id={holding.coin} className='border-b border-gray-600'>

      {/* CHECKBOX */}

      <td className='p-3 text-center'>
        <Checkbox />
      </td>



      {/* LOGO & COIN NAME */}

      <td className='flex gap-4 p-3 text-start'>
        {/* Logo Image Div */}
        <div className='h-10 w-10 flex items-center justify-center'>
          <img src={holding.logo} alt={holding.coinName} className='h-full w-full' />
        </div>

        {/* Coin Name Div */}
        <div>
          <p className='text-lg font-medium'>{holding.coin}</p>
          <span className='text-md line-clamp-1'>{holding.coinName}</span>
        </div>
      </td>




      {/* HOLDING PRICE */}

      <td className='p-3 text-center'>
        <p>{holding.totalHolding}{holding.coin}</p>
        <span>${holding.averageBuyPrice}</span>
      </td>





      {/* CURRENT PRICE */}

      <td className='p-3 text-center'>
        ${holding.currentPrice}
      </td>





      {/* SHORT TERM GAIN PRICE */}

      <td className='p-3 text-center'>
        {holding.stcg.gain.toFixed(2)}
      </td>



      {/* LONG TERM GAIN PRICE */}
      <td className='p-3 text-center'>
        {holding.ltcg.gain}
      </td>

    </tr>
  )
}

export default TableRow
