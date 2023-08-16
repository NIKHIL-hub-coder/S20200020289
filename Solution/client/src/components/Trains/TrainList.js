import React, { useEffect, useState } from 'react'
import "./TrainList.css"
import TCard from './TCard'
import "../Home.css"
import THome from './THome'
// import traindata from "./traindata.json"


function TrainList() {

  const [from, setfrom] = useState("");
  const [to, setTo] = useState("");
  const [depart, setDepart] = useState("");

  const [trains, setTrains] = useState([]);
  const [filteredTrains, setFilteredTrains] = useState([]);
  
  const getData =async() => {
    // console.log(traindata);
    const response = await fetch("http://localhost:3001/train/trains");
    const traindata = await response.json();
    console.log(traindata);
    
      
    
      setFilteredTrains(traindata);
      setTrains(traindata);
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
    <THome
     from={from}
        setfrom={setfrom}
        to={to}
        setTo={setTo}
        depart={depart}
        setDepart={setDepart}
        TrainProps={trains}
        setFilteredTrains={setFilteredTrains}

    />
    <div className='flight__container'>
      <div className='flight'>
        <h3>Available Tickets</h3>
        <div className='flight__cards'>
          <TCard
            from={from}
            to={to}
            depart={depart}
            trains={trains}
            setTrains={setTrains}
            filteredTrains={filteredTrains}
            setFilteredTrains={setFilteredTrains}
          />
        </div>
      </div>

    </div>
    </>
  )
}

export default TrainList