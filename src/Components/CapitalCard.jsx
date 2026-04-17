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
        <div className={` p-5 rounded-md w-full md:w-1/2  ${bgColor} overflow-y-auto scroll-smooth `}>

            {/* CARD TITLE */}
            <h2 className="text-2xl font-medium mb-4">{title}</h2>

            <table className="table-auto border-collapse  w-full text-left">
                <thead className="">
                    <tr>
                        <th className=" px-4 py-2"></th>
                        <th className=" px-4 py-2">Short-term</th>
                        <th className=" px-4 py-2">Long-term</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className=" px-4 py-2 text-lg">Profits</td>
                        <td className=" px-4 py-2 text-lg">$ {Math.floor(stcgProfit)}</td>
                        <td className=" px-4 py-2 text-lg">$ {Math.floor(ltcgProfit)}</td>
                    </tr>
                    <tr>
                        <td className=" px-4 py-2 text-lg">Losses</td>
                        <td className=" px-4 py-2 text-lg">- $ {Math.floor(stcgLosses)}</td>
                        <td className=" px-4 py-2 text-lg">- $ {Math.floor(ltcgLosses)}</td>
                    </tr>
                    <tr>
                        <td className=" px-4 py-2">Net Capital Gains</td>
                        <td className=" px-4 py-2 text-lg"><span className={stcgNet < 0 ? "block" : "hidden"}>-</span>$ {stcgNet}</td>
                        <td className=" px-4 py-2 text-lg"><span className={stcgNet < 0 ? "block" : "hidden"}>-</span>$ {ltcgNet}</td>
                    </tr>
                </tbody>
            </table>

            <p className="mt-8 text-xl font-medium">{title === "Pre Harvesting" ? "Realised" : "Effective"} Capital Gains:
            <span className={`text-2xl ${realised < 0 ? "text-red-600" : "text-green-400"}`}>
            {realised < 0 ? "-" : ""} ${Math.abs(realised).toFixed(2)}
           </span>
           </p>

            <p>

            </p>

        </div>

    )
}

export default CapitalCard
