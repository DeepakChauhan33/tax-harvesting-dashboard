import React from 'react'

import { useState, useEffect } from 'react';


// API Function
import { getHolding } from '../Services/HoldingAPI';
import CapitalCard from '../Components/CapitalCard';
import Table from '../Components/Table';
// import { getCapital } from './Services/CapitalAPI';

const Dashboard = () => {

    // Storing API dta in state
    const [holding, setHolding] = useState([]);
    const [capital, setCapital] = useState([]);


    // Getting API data
    useEffect(() => {

        getHolding().then(data => {
            setHolding(data)
        })
    }, [])


    return (

        <main className='bg-gray-800 text-white px-8 py-5'>

            <h1 className='text-3xl font-semibold mb-6'>Tax Optimization</h1>

            {/* Card Section */}
            <section className='flex p-3 gap-x-5'>
                <CapitalCard />
                <CapitalCard />
            </section>


            {/* Holding Data Section */}
            <section className='p-4 border'>
                <Table />
            </section>

        </main>
    )
}

export default Dashboard
