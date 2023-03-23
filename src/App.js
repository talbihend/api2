import './App.css';
import { useEffect, useState } from 'react';
import UserList from './Component/UserList';
import axios from 'axios';
import {TbApi} from "react-icons/tb"


function App() {

  const [list, setList] = useState("")

   
    // console.log(list)
    const getData=async()=>{
        try {
            const result= await  axios.get("https://jsonplaceholder.typicode.com/users")
            setList(result.data)
        } catch (error) {
            //console.log(error)
        }
    }
   useEffect(() => {
  getData()
   }, [])
  return (
    <div className="App">
      <div className='div-title'><img src="https://www.onda-dias.eu/cms/wp-content/uploads/2018/05/api.png" alt="logo" />
      <h1 className="title">Enjoy API</h1>
      </div>
      <UserList data={list}/>
    </div>
  );
}

export default App;
