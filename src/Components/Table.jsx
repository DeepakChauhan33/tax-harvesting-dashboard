import React from 'react'


// COMPONENT
import TableRow from './TableRow'


const Table = ({ holdings, selected, setSelected }) => {


    const handleSelect = (holding, checked) => {
        if (checked) {
            setSelected(prev => [...prev, holding]);
        } else {
            setSelected(prev => prev.filter(item => item.coin !== holding.coin));
        }
    };





    return (
        <table className='w-full  rounded-md overflow-y-auto scroll-smooth  '>


            <thead className='border-0 rounded-2xl bg-gray-900 overflow-hidden px-4'>
                <tr >
                    <th className='p-3 text-end'>
                        <input type="checkbox" />
                    </th>
                    <th className='p-3 text-start w-100 '>Asset</th>

                    <th className='p-3 text-end'>
                        <p>Holdings</p>
                        <span className='text-sm font-light'>Avg Buy Price</span>
                    </th>

                    <th className='p-3 text-end'>Current Price</th>
                    <th className='p-3 text-end'>Short-Term</th>
                    <th className='p-3 text-end'>Long-Term</th>
                    <th className='p-3 text-end'>Amount to sell</th>
                </tr>
            </thead>

            <tbody>

                {holdings.map((holding) => (
                    <TableRow holding={holding} selected={selected} setSelected={setSelected} handleSelect={handleSelect} />
                ))}
            </tbody>
        </table>
    )
}

export default Table
