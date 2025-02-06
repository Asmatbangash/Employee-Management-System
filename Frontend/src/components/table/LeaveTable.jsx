import React from 'react'
import { Link } from 'react-router-dom'

function LeaveTable() {
  return (
    <>
    <div className="d-flex flex-wrap justify-between my-4">
   <form className="" role="search">
     <input className="form-control me-2 me-sm-0 w-52" type="search" placeholder="Search by department" aria-label="Search" />
   </form> 
   <div className="button">
    <Link to=''><button className="btn btn-primary m-2" type="submit">Pending</button></Link> 
    <Link to=''><button className="btn btn-primary m-2" type="submit">Rejected</button></Link> 
    <Link to=''><button className="btn btn-primary m-2" type="submit">Approved</button></Link>
    </div> 
 </div>
 <div className="table-responsive">
    <table className="table">
    <thead>
      <tr>
        <th scope="col">S.NO</th>
        <th scope="col">EMP ID</th>
        <th scope="col">LeaveType</th>
        <th scope="col">Department</th>
        <th scope="col">Day</th>
        <th scope="col">Statuse</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>Mark</td>
        <td><button className="btn btn-info m-2" type="submit">view</button></td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>Mark</td>
        <td><button className="btn btn-info m-2" type="submit">view</button></td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry the Bird</td>
        <td>Larry the Bird</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>Mark</td>
        <td><button className="btn btn-info m-2" type="submit">view</button></td>
      </tr>
    </tbody>
  </table>
  </div>
   </>
  )
}

export default LeaveTable