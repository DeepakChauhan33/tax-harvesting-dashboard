import React from 'react'

// COMPONENTS
import Checkbox from './Checkbox'


const TableRow = ({ holding }) => {
  return (
    <tr id={holding.coin} className='border-b border-gray-600 hover:bg-gray-600/50'>

      {/* CHECKBOX */}

      <td className='p-3 text-center'>
        <Checkbox />
      </td>



      {/* LOGO & COIN NAME */}

      <td className='flex gap-4 p-3 text-start'>
        {/* Logo Image Div */}
        <div className='h-7 w-7 md:h-10 md:w-10 flex items-center justify-center'>
          <img src={holding.logo} alt={holding.coinName} className='h-full w-full' />
        </div>

        {/* Coin Name Div */}
        <div>
          <p className='text-lg font-medium'>{holding.coin}</p>
          <span className='text-md line-clamp-1' title={holding.coinName}>{holding.coinName}</span>
        </div>
      </td>




      {/* HOLDING PRICE */}

      <td className='p-3 text-end'>
        <p className='text-lg font-semibold'>{holding.totalHolding.toFixed(6)}{holding.coin}</p>
        <span>${holding.averageBuyPrice.toFixed(5)} {holding.coin}</span>
      </td>





      {/* CURRENT PRICE */}

      <td className='p-3 text-end text-lg'>
        ${holding.currentPrice}
      </td>





      {/* SHORT TERM GAIN PRICE */}

      <td className='p-3 text-end space-y-0.5'>
        <p className='text-lg font-semibold text-red-400'>${holding.stcg.gain.toFixed(2)}M</p>
        <sapn className=" text-sm">{holding.stcg.balance.toFixed(5)}{holding.coin}</sapn>
      </td>



      {/* LONG TERM GAIN PRICE */}
      <td className='p-3 text-end space-y-0.5'>
        <p className='text-lg font-semibold'>${holding.ltcg.gain.toFixed(2)}M</p>
        <sapn className=" text-sm">{holding.ltcg.balance.toFixed(1)}{holding.coin}</sapn>
      </td>


      {/* AMOUNT TO SELL */}
      <td className='p-3 text-end space-y-0.5'>
        -
      </td>

    </tr>
  )
}

export default TableRow
