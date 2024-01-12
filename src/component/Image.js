import React from "react";

const Image = ({data}) => {
    return(
        <div>
            <img className="w-full" src={data} alt="random" />
        </div>
    )
}

export default Image;