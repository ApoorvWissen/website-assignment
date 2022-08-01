import React, { useState } from "react";

const Pagination = ({page, goAhead , goBack})=>{

    return(
        <div className="w-full flex justify-center mb-8">
                <button className="p-2 border-2 border-gray-500 text-white border-r-0" onClick={goBack}>Previous</button>
                <button className="p-2 border-2 border-gray-500 text-white">{page}</button>
                <button className="p-2 border-2 border-gray-500 text-white border-l-0"  onClick={goAhead}>Next</button>
        </div>
    )
}

export default Pagination;