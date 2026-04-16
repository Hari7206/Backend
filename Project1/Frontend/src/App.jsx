import React from 'react'
import { useState , useEffect } from 'react'
import axios from "axios";
function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/note")
    .then((res) =>{
      setData(res.data.note)
    })
  }, [])
  
  return (
    <div className='note'>
{
  data.map((item) => {
  return (
    <div className="notes" key={item._id}>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
})
}
    </div>
  )
}

export default App