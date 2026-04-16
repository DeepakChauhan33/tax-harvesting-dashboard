import React from 'react'

const CapitalCard = () => {
    return (

        // Capital Card  
        <div className=" p-5 rounded-md w-1/2 bg-gray-700">
            <h2 className="text-lg font-semibold mb-4">Pre Harvesting</h2>

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
                        <td className=" px-4 py-2">Profits</td>
                        <td className=" px-4 py-2">$4,049.48</td>
                        <td className=" px-4 py-2">$0.00</td>
                    </tr>
                    <tr>
                        <td className=" px-4 py-2">Losses</td>
                        <td className=" px-4 py-2">$32,127.03</td>
                        <td className=" px-4 py-2">$0.00</td>
                    </tr>
                    <tr>
                        <td className=" px-4 py-2">Net Capital Gains</td>
                        <td className=" px-4 py-2">- $28,077.55</td>
                        <td className=" px-4 py-2">$0.00</td>
                    </tr>
                </tbody>
            </table>

            <p className="mt-4 font-medium">
                Realised Capital Gains: <span className="text-red-600">- $28,077.55</span>
            </p>
        </div>

    )
}

export default CapitalCard
