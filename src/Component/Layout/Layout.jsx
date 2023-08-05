import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import { MediaContext } from '../../Context/MediaContext'

export default function Layout({userData, setUserData}) {
  let {isLoading} = useContext(MediaContext)
  let navigate = useNavigate();
  function logout() {
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/login');
  }
  return <> 
    <Navbar userData={userData} logout={logout}/>
   
      <>
        {isLoading === true? <div className="d-flex justify-content-center align-items-center">
          <div id='spinner' className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>:
        <div className='container-fluid'>
          <Outlet></Outlet>
        </div>}
      </>
    
  </>
}
