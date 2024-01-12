import React, {useState} from "react";

const ImageSearch = ({setSearchTerm}) => {
    const [text , setText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(text)
    }
    return(
        <div className="formDiv">
            <form onSubmit={onSubmit}>
                <input type="text" value={text} placeholder="Search by any key" onChange={(e) => setText(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ImageSearch;