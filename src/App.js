import React, { useState, useEffect} from "react";
import Image from "./components/Image";
import ImageDesc from "./components/ImageDesc";
import Tags from "./components/Tags";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [data, setData] = useState([])
  const [isloading, setIsloading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=13358793-16b4206d81c36d9d821184c7a&q=${term}&image_type=photo&per_page=50`)
    .then((response) => response.json())
    .then((data) => {
      setData(data.hits)
      setIsloading(false)
    })
    .catch((error) => {
      console.log(error)
      setData([])
      setIsloading(true)
    })
  }, [term])

  

  if(isloading){
    return (<
      div className="app">
        <h3>LOADING.......</h3>
      </div>
    )
  }
  return (
    <>
    <ImageSearch setSearchTerm={(text) => setTerm(text)}/>
    <div className="app">
      {data.map((data) => (
          <div className="max-w-sm rouded overflow-hidden shadow-lg" key={data.id}>
            <Image data={data.webformatURL}/>
            <ImageDesc author={data.user} views={data.views} downloads={data.downloads} likes={data.likes}/>
            <Tags tags={data.tags}/>
          </div>
      ))}
    </div>
    </>
  );
}

export default App;