import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userAuth } from '../../context/AuthContext'
import Offcanvas from '../sidebar/Offcanvas'

function Navbar() {
  const {user} = useContext(userAuth)
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-between py-2 border-bottom bg-violet-400 text-white font-serif header">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link to="/" className="d-inline-flex text-decoration-none">
          <h2 className='text-white ml-6 fs-6'>Employee Management System</h2>
        </Link>
      </div>

      <div className="nav col-12 col-sm-auto mb-2 justify-content-center mb-md-0">
        <h4>welcome {user.role}</h4>
      </div>

     
      <div className="col-md-3 text-end">
      <Offcanvas user={user}/>
      <Link to="/login"> <button type="button" className="btn btn-primary mx-2">Login</button> </Link> 
      </div>
    </header>
  )
}

export default Navbar