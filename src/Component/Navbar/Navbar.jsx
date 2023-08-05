import React from 'react'
import { Link } from 'react-router-dom'
import noxe from '../../images/logo-dark.webp'

export default function Navbar({userData, logout}) {
  
  return (
    <nav className='p-3 d-flex flex-column flex-md-row justify-content-between'>
      <div className="left-nav d-flex flex-column flex-md-row align-items-center">
        <h1 className='m-0 px-2 pe-3'><img src={noxe} alt="" /></h1>
        {userData ? <ul className='list-unstyled m-0 d-flex flex-column flex-md-row align-items-center pt-3'>
          <li className='px-2'><Link to='/'>Home</Link></li>
          <li className='px-2'><Link to='movies'>Movies</Link></li>
          <li className='px-2'><Link to='tv'>Tv</Link></li>
          <li className='px-2'><Link to='people'>People</Link></li>          
        </ul> : ''}
      </div>
      
      <div className="right-nav d-flex flex-column flex-md-row align-items-center ">
        <div className='social-media mx-3 pt-3'>
          <i className='fab fa-facebook mx-1'></i>
          <i className='fab fa-twitter mx-1'></i>
          <i className='fab fa-instagram mx-1'></i>
          <i className='fab fa-spotify mx-1'></i>
          <i className='fab fa-youtube mx-1'></i>
        </div>
        <ul className='list-unstyled m-0 d-flex flex-column flex-md-row align-items-center pt-3'>
          {userData? <>
            <li className='px-2'><Link to='/profile'>Profile</Link></li> 
            <li className='px-2 cursor logout' onClick={logout}><span>Logout</span></li> 
          </>:
          <>
            <li className='px-2'><Link to='login'>Login</Link></li>
            <li className='px-2'><Link to='/register'>Register</Link></li> 
          </>}
        </ul>
      </div>
    </nav>
  )
}
