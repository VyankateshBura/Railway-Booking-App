import React,{useState,useEffect} from 'react'
import "./Trains.css"
import axios from 'axios'
import Searchbar from '../Components/Searchbar/Searchbar'
import Traininfo from '../Components/Traininfo/Traininfo'
const Trains = () => {
   const [data, setdata] = useState([]);
   const [search, setsearch] = useState("mumbai")
    console.log(search);
   const updateSearch = (value)=>{
    if(value.length>2){
      setsearch(value);
      console.log(value);
    }
      
   }
  useEffect(() => {
    
    const options = {
      method: 'POST',
      url: 'https://trains.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '238f5056d0mshe5ad349fc027ce8p1d8a96jsna9f574fb189a',
        'X-RapidAPI-Host': 'trains.p.rapidapi.com'
      },
      data: `{"search":"${search}"}`
    };
    
    axios.request(options).then(function (response) {
      
      setdata(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }, [search])
  // console.log(data);
  return (
    <div className='searchbox container p-1'>
        <Searchbar updateSearch={updateSearch}/>
        <br></br>
        <hr ></hr>
        {data==[]?"": data.map((item,key)=>(
                // console.log(item),
              <Traininfo key={key} name={item.name} from={item.train_from} to={item.train_to} number={item.train_num} arriveTime={item.data.arriveTime} departTime={item.data.departTime}/>
        ))}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
  )
}

export default Trains