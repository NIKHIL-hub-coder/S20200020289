import "./Book.css";
import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {DataAppContext} from '../DataApp';


function Book() {

  const navigate = useNavigate();
    const localContext = useContext(DataAppContext);
    const {appState, setAppState}=localContext;
    const {loginStatus, username}= appState;

  
    useEffect(() => {
      if(!loginStatus) {
        console.log('not logged in')
        navigate('/login');
      }
      else {
        console.log('logged in')
      }
    })

 

  return (
    <div className='booking-container'>
      <div className='main'>
        <div className='right-passenger-info'>
          <div className='passengers-method'>
            <h2>Booking options</h2>
            <div className='radio-container'>
              Coach Type<br/><br/>
              <input
                id='card'
                // name='payment-type'
                type='radio'
                defaultChecked
                required
              />
              <label htmlFor='card'>Sleeper</label>
              <input id='AC' name='payment-type' type='radio' required />
              <label htmlFor='paypal'>AC</label>
            </div>
          </div>
          <form id='payment-form'>
            <div className='passenger-info-container'>
              <div className='passenger-info'>
                {/* <label>
                  Card Number
                  <input
                    className='full-width'
                    id='card-num'
                    type='text'
                    placeholder='1234 5678 9012 3456'
                    required
                  />
                </label> */}
                <label>
                  Full Name
                  <input
                    className='full-width'
                    id='name'
                    type='text'
                    placeholder='Name'
                    required
                  />
                </label>
                {/* <div className='expire-ccv'>
                  <label>
                    Expires
                    <span className='expire-date'>
                      <input
                        id='month'
                        type='text'
                        size={2}
                        maxLength={2}
                        placeholder='MM'
                        required
                      />
                      <span>/</span>
                      <input
                        id='year'
                        type='text'
                        size={2}
                        maxLength={2}
                        placeholder='YY'
                        required
                      />
                    </span>
                  </label>
                  <label>
                    CCV
                    <input
                      id='ccv'
                      type='text'
                      size={3}
                      maxLength={3}
                      placeholder={123}
                      required
                    />
                  </label>
                </div> */}
              </div>
            </div>
            {/* <label className='save-card-info'>
              <input type='checkbox' required />
              Save card for faster checkout
            </label> */}
          </form>
          <button type="submit" className='button' onClick={() => alert("Ticket Booked")}>
            BOOK YOUR TICKET
          </button>
        </div>
      </div>
    </div>
  )
}

export default Book