import './App.css';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Offers from './components/Offers';
import Restaurents from './components/Restaurents';
import userInfo from './data/userInfo.json'
import offers from './data/offers.json';
import restaurents from './data/restaurent.json';
import React,{useState} from 'react';

const filters={
  0:"Cost High to Lost",
  1:"Cost Lost to High",
  2:"Ratings",
  3:"Delivery Time",
  4:"Relevance"
}

function App() {
  const [filterBY,setFilterBy]=useState('')
  const [data,setData]=useState(restaurents)
  const updateFilter=(newFilter)=>{
    console.log(newFilter)
    switch(newFilter){
      case "0":{
        setFilterBy(0)
        data.sort((a,b)=>b.costForTwo - a.costForTwo);
        console.log(data.map((d)=>d.costForTwo))
        setData([...data])
        break;
      }
      case "1":{
        setFilterBy(1)
        data.sort((a,b)=>a.costForTwo - b.costForTwo);
        console.log(data.map((d)=>d.costForTwo))
        setData([...data])
        break;
      }
      case "2":{
        setFilterBy(2)
        data.sort((a,b)=>b.ratings - a.ratings);
        console.log(data.map((d)=>d.ratings))
        setData([...data])
        break;
      }
      case "3":{
        setFilterBy(3)
        data.sort((a,b)=>a.deliveryTimings - b.deliveryTimings);
        console.log(data.map((d)=>d.deliveryTimings))
        setData([...data])
        break;
      }
      case "4":{
        setFilterBy(4)
        data.sort((a,b)=>b.deliveryTimings - a.deliveryTimings);
        console.log(data.map((d)=>d.deliveryTimings))
        setData([...data])
        break;
      }
      default:{
        setData(restaurents)
        break;
      }
      
    }
   
  }
  return (
    <div>
      <Navbar {...userInfo.location}/>
      <Offers offers={offers}/>
      <section className='near-you'>
      <Filters filters={filters} currentFilterBy={filterBY} updateFilter={updateFilter}/>
      <Restaurents restaurents={data}/>
      </section>
      
    </div>
  );
}

export default App;
