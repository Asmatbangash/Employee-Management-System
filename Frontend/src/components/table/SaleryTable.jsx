import React from 'react'

function SaleryTable() {
  return (
    <>
     <div className="d-flex flex-wrap justify-content-end my-4">
    <form className="" role="search">
      <input className="form-control me-2 me-sm-0 w-52" type="search" placeholder="Search by department" aria-label="Search" />
    </form> 
  </div>
  <div className="table-responsive">
    <table className="table">
    <thead>
      <tr>
        <th scope="col">S.NO</th>
        <th scope="col">EMP ID</th>
        <th scope="col">Salery</th>
        <th scope="col">Allowance</th>
        <th scope="col">Deduction</th>
        <th scope="col">Total</th>
        <th scope="col">Pay Date</th>
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
        <td>Otto</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>Mark</td>
        <td>Otto</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry the Bird</td>
        <td>Larry the Bird</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>Mark</td>
        <td>Otto</td>
      </tr>
    </tbody>
  </table>
  </div>
    </>
  )
}

export default SaleryTable