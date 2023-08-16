import React, { useContext } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { DataAppContext } from './DataApp';

function Navbar() {

  const localContext = useContext(DataAppContext);
  const { appState, setAppState } = localContext;
  const { username, loginStatus } = appState;
  const navigate = useNavigate();


  const logoutFn = () => {

    setAppState({
      ...appState,
      loginStatus: false,
      username: ''
    })
    navigate('/');
  }

  return (
    <div className='container'>
      <div className='navbar'>
        <div className='navbar__logo'>
          <Link to='/'>
            <h1>Affordmed</h1>
          </Link>
        </div>
        <div className='navbar__icons'>
          {
            username && <div className='navbar__icon navbar__username'>
                <span>{username}</span>
            </div>
          }

          {
            loginStatus ?
              <div onClick={logoutFn} className='navbar__icon navbar__user'>
                <Link to='/' >
                  <span>Logout</span>
                </Link>
              </div>
              :
              <div className='navbar__icon navbar__user'>
                <Link to='/login' >
                  <span>Login</span>
                </Link>
              </div>
          }


        </div>
      </div>
    </div>
  )
}

export default Navbar