import React from 'react'

const CapitalCard = ({ capital, title }) => {


    const bgColor = title === "Pre Harvesting" ? "bg-gray-700" : "bg-linear-to-r from-blue-400 to-blue-500";


    if (!capital) {
        return "Loading...."
    }

    const ltcgProfit = capital.capitalGains.ltcg.profits;
    const ltcgLosses = capital.capitalGains.ltcg.losses;

    const stcgProfit = capital.capitalGains.stcg.profits;
    const stcgLosses = capital.capitalGains.stcg.losses;


    const stcgNet = stcgProfit - stcgLosses;
    const ltcgNet = ltcgProfit - ltcgLosses;

    const realised = stcgNet + ltcgNet;


    // const []

    return (



        // Capital Card  
        <div className={`p-2 md:p=3.5 lg:p-5 rounded-md w-full md:w-1/2  ${bgColor} overflow-y-auto scroll-smooth `}>

            {/* CARD TITLE */}
            <h2 className="text-xl md:text-2xl font-medium mb-4">{title}</h2>

            <table className="table-auto border-collapse  w-full text-left">
                <thead className="">
                    <tr>
                        <th className="px-2  lg:px-4 py-2"></th>
                        <th className="px-2  lg:px-4 py-2 text-sm lg:text-lg text-end">Short-term</th>
                        <th className="px-2  lg:px-4 py-2 text-sm lg:text-lg text-end">Long-term</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className='text-end'>
                        <td className="px-2  lg:px-4 py-2 text-sm lg:text-lg text-start">Profits</td>
                        <td className="px-2  lg:px-4 py-2 text-sm lg:text-lg">$ {Math.abs(stcgProfit)}</td>
                        <td className="px-2  lg:px-4 py-2 text-sm lg:text-lg">$ {Math.abs(ltcgProfit)}</td>
                    </tr>
                    <tr className='text-end'>
                        <td className="px-2  lg:px-4 py-2 text-sm lg:text-lg text-start">Losses</td>
                        <td className="px-2  lg:px-4 py-2 text-sm lg:text-lg">- $ {Math.abs(stcgLosses)}</td>
                        <td className="px-2  lg:px-4 py-2 text-sm lg:text-lg">- $ {Math.abs(ltcgLosses)}</td>
                    </tr>
                    <tr className='text-end'>
                        <td className="px-2  lg:px-4 py-2 text-start text-sm lg:text-lg">Net Capital Gains</td>
                        <td className="px-2  lg:px-4 py-2 text-sm lg:text-lg"><span className={stcgNet < 0 ? "block" : "hidden"}>-</span>$ {stcgNet}</td>
                        <td className="px-2  lg:px-4 py-2 text-sm lg:text-lg"><span className={stcgNet < 0 ? "block" : "hidden"}>-</span>$ {ltcgNet}</td>
                    </tr>
                </tbody>
            </table>

            <p className="mt-8 text-md lg:text-xl font-medium">{title === "Pre Harvesting" ? "Realised" : "Effective"} Capital Gains:
                <span className={`text-md lg:text-2xl ${realised < 0 ? "text-red-600" : "text-green-400"}`}>
                    {realised < 0 ? "-" : ""} ${Math.abs(realised).toFixed(2)}
                </span>
            </p>

            <p>

            </p>

        </div>

    )
}

export default CapitalCard
