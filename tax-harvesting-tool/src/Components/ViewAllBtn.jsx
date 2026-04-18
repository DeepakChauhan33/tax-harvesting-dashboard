import React from 'react'

const ViewAllBtn = ({ setShowAll, showAll }) => {
    return (
        <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600"
        >
            {showAll ? "Show Less" : "View All"}
        </button>
    )
}

export default ViewAllBtn
