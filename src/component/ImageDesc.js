import React from "react";

const ImageDesc = ({author, views, downloads, likes}) => {
    return(
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-md mb-2">
            Photo By : {author}
          </div>
          <ul>
            <li className="text-sm">
              <strong>Views: </strong>
              {views}
            </li>
            <li className="text-sm">
              <strong>Downloads: </strong>
              {downloads}
            </li>
            <li className="text-sm">
              <strong>Likes: </strong>
              {likes}
            </li>
          </ul>
        </div>
    )
}

export default ImageDesc;