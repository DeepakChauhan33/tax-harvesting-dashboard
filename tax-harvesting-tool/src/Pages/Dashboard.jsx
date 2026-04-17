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

    // State for holding 
    const [selectedHoldings, setSelectedHoldings] = useState([]);


    // Getting API data
    useEffect(() => {

        getHolding().then(data => {
            setHolding(data)
        })

        getCapital().then(data => {
            setCapital(data[0]);
        })
    }, [])



    const getUpdatedCapital = () => {

        if (!capital) return null;

        let updated = JSON.parse(JSON.stringify(capital));

        selectedHoldings.forEach(item => {

            const stcgGain = item.stcg.gain;
            const ltcgGain = item.ltcg.gain;

            // STCG
            if (stcgGain > 0) {
                updated.capitalGains.stcg.profits += stcgGain;
            } else {
                updated.capitalGains.stcg.losses += Math.abs(stcgGain);
            }

            // LTCG
            if (ltcgGain > 0) {
                updated.capitalGains.ltcg.profits += ltcgGain;
            } else {
                updated.capitalGains.ltcg.losses += Math.abs(ltcgGain);
            }

        });

        return updated;
    };



    const updatedCapital = getUpdatedCapital();


    return (
        <>

            {/* HEADER LOGO */}
            <header className='bg-gray-700 p-4'>
                <div className='h-6 md:h-10'>
                    <img src={koinX} alt="KoinX" className='h-full object-cover' />
                </div>
            </header>


            <main className='bg-gray-800 min-h-screen text-white px-4 py-3 sm:px-6 sm:py-5 lg:px-8 lg:py-6'>




                <h1 className='text-xl sm:text-2xl lg:text-3xl font-semibold mb-6'>Tax Harvesting <span className='text-[16px] underline cursor-pointer text-blue-700 font-light'>How it works ?</span></h1>



                {/* CARD SECTION */}
                <section className='flex flex-col md:flex-row gap-5 mb-8 overflow-y-auto scroll-smooth'>
                    <CapitalCard capital={capital} title="Pre Harvesting" />
                    <CapitalCard capital={updatedCapital} title="After Harvesting" />
                </section>


                {/* HOLDING DATA SECTION */}
                <section className='p-4 rounded-sm overflow-y-auto scroll-smooth bg-gray-700'>
                    {/* Table */}
                    <Table holdings={holdings} selected={selectedHoldings} setSelected={setSelectedHoldings} />
                </section>

            </main>
        </>
    )
}

export default Dashboard
