import React from 'react'


// COMPONENT
import TableRow from './TableRow'
import ViewAllBtn from './ViewAllBtn';


const Table = ({ holdings, selected, setSelected, showAll, setShowAll }) => {


    const handleSelect = (holding, checked) => {
        if (checked) {
            setSelected(prev => [...prev, holding]);
        } else {
            setSelected(prev => prev.filter(item => item.coin !== holding.coin));
        }
    };


    // Checking how many data to display to the user 
    const visibleData = showAll ? holdings : holdings.slice(0, 5);



    return (

        <>
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

                    {visibleData.map((holding) => (
                        <TableRow holding={holding} selected={selected} setSelected={setSelected} handleSelect={handleSelect} />
                    ))}
                </tbody>
            </table>

            {/* View All Btn Component */}
            <ViewAllBtn showAll={showAll} setShowAll={setShowAll} />

        </>

    )
}

export default Table
