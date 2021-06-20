import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';
function App() {
  const[data,setData]=useState([]);
  const covidData = async () => {
    const res = await fetch('https://api.covid19india.org/data.json');
    const actualData = await res.json();
    setData(actualData.statewise);
  }
useEffect (()=>{
  covidData();
},[]);
  return (
    <>
<h1>INDIA COVID-19 Dashboard</h1>
<div className="container-fluid mt-5">
<div className="main-heading">    
   </div>
<div className="table-responsive">
<table className="table table-hover">
<thead className="thead-dark">
<tr className="upr">
<th>State</th>
<th>Confirmed</th>
<th>Recovered</th>
<th>Deaths</th>
<th>Active</th>
<th>Updated</th>
</tr>
</thead>
<tbody className="tbo">
{
  data.map((curElem, ind)=>{
    return(
<tr className=" blow" key={ind}>
<td>{curElem.state}</td>
<td>{curElem.confirmed}</td>
<td>{curElem.recovered}</td>
<td>{curElem.deaths}</td>
<td>{curElem.active}</td>
<td>{curElem.lastupdatedtime}</td>
</tr>
      )
  })
}</tbody>
</table>
</div>
   </div>
    </>
  );
}

export default App;
