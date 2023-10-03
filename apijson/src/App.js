
import { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [data,setData] = useState([])


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
      res.json().
      then((json)=>{
        setData(json)
      })
    })
  
  })
  
    return (
    <div className="App">
      <div>
        {data.map(item=>{
          return(
            <div>
             <p>{item.id}-{item.title}</p> 
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
