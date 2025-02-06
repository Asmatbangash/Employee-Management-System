import React from 'react'
import EmployeeTable from '../components/table/EmployeeTable.jsx'

function Employee() {
  return (
    <div className='container'>
      <h2 className='text-center fs-1 font-serif mt-3'>Employee Management</h2>
   <EmployeeTable />
</div>
  )
}

export default Employee