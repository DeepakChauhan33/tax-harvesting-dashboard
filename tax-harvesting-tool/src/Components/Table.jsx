import React from 'react'


// COMPONENT
import TableRow from './TableRow'


const Table = ({ holdings }) => {
    return (
        <table className='w-full bg-gray-700 rounded-md overflow-y-auto scroll-smooth '>


            <thead className='border-0 rounded-2xl bg-gray-900 overflow-hidden px-4'>
                <tr >
                    <th className='p-3 text-center'>
                        <input type="checkbox" />
                    </th>
                    <th className='p-3 text-start'>Asset</th>

                    <th className='p-3 text-center'>
                        <p>Holdings</p>
                        <span>Avg Buy Price</span>
                    </th>

                    <th className='p-3 text-center'>Current Price</th>
                    <th className='p-3 text-center'>Short-Term</th>
                    <th className='p-3 text-center'>Long-Term</th>
                    <th className='p-3 text-center'>Amount to sell</th>
                </tr>
            </thead>

            <tbody>

                {holdings.map((holding) => (
                    <TableRow holding={holding} />
                ))}
            </tbody>
        </table>
    )
}

export default Table
