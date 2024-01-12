import React from "react";

const Tags = ({tags}) => {
    const tagsList = tags.split(",")
    return(
        <div className="px-6 py-4 flex">
          {tagsList.map((tag, id) => (
            <span key={id} className="tags inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 mr-2">#{tag}</span>
          ))}
        </div>
    )
}

export default Tags;