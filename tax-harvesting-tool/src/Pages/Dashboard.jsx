import React from 'react'

import { useState, useEffect } from 'react';

// LOGO IMAGE
import koinX from '../assets/koinX.svg';

// COMPONENTS
import CapitalCard from '../Components/CapitalCard';
import Table from '../Components/Table';


// API Function
import { getHolding } from '../Services/HoldingAPI';
import { getCapital } from '../Services/CapitalAPI';

const Dashboard = () => {

    // Storing API dta in state
    const [holdings, setHolding] = useState([]);
    const [capital, setCapital] = useState(null);


    // Getting API data
    useEffect(() => {

        getHolding().then(data => {
            setHolding(data)
        })

        getCapital().then(data => {
            setCapital(data[0]);
        })
    }, [])


    return (
        <>

            {/* HEADER LOGO */}
            <header className='bg-gray-700 p-4'>
                <div className='h-10'>
                    <img src={koinX} alt="KoinX" className='h-full object-cover' />
                </div>
            </header>


            <main className='bg-gray-800 min-h-screen text-white px-8 py-6'>




                <h1 className='text-3xl font-semibold mb-6'>Tax Harvesting <span className='text-[16px] underline cursor-pointer text-blue-700 font-light'>How it works</span></h1>



                {/* Card Section */}
                <section className='flex flex-col md:flex-row gap-5 mb-8'>
                    <CapitalCard capital={capital} title="Pre Harvesting" />
                    <CapitalCard capital={capital} title="After Harvesting" />
                </section>


                {/* Holding Data Section */}
                <section className='p-4 rounded-sm overflow-y-auto scroll-smooth bg-gray-700'>
                    <Table holdings={holdings} />
                </section>

            </main>
        </>
    )
}

export default Dashboard
