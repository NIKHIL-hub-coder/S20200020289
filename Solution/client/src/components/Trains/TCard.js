import React from 'react'
import "./TCard.css"
import { Link } from 'react-router-dom';

function TCard({ from,
  to,
  depart,
  trains,
  setTrains,
  filteredTrains,
  setFilteredTrains,

}) {
  let newDate=new Date();
  let months=newDate.getMonth();
  let day=newDate.getDay();
  // const [d,setD]=React.useState(false);

  // function checkdate(dat){
  //   console.log(String(newDate.getDate()))
  //   console.log(typeof(dat))
  //   if(dat===newDate.getDate()){
  //     setD(true)
  //   }
  // }

  return (
    <div className='card__container'>
      {filteredTrains &&
        filteredTrains.map((train, index) => (
          <div className='card'>
            <div className='card__info'>
            <div className='row1'>
            <p>Train No: <span>{train ? train.train_number : ""}</span></p>
            </div>
              <div className='row1'>
                <p>from:  <span>{train ? train.from : ""}</span></p>
                <p>Duration:  <span>{train ? train.duration : ""}</span></p>
                <p>to: <span>{train ? train.to : ""}</span></p>
              </div>
              <div className='row2'>
              
                <p>Date: <span>{train ? train.departure.departureDate : ""}</span></p>
                <p>departure: <span>{train ? train.departure.departureTime : ""}</span></p>
                
              </div>
              <div className='row3'>
               
                <p>KM:  <span>{train ? train.kilometers : ""}</span></p>
                <p>Price: <span>{train ? train.price : ""}</span></p>
               
              </div>
            </div>
            console.sol
           {train.departure.departureDate===String(newDate.getDate())?
              <button disabled={true} className='card__btn'><Link to="/book">Book</Link></button>
            :
                 <button className='card__btn'><Link to="/book">Book</Link></button>
            }

            {/* <button disable={d} className='card__btn'><Link to="/book">Book</Link></button> */}
          </div>
          ))}
    </div>
  )
}

export default TCard