import React from 'react'
import DepartmentTable from '../components/table/DepartmentTable.jsx'

function Department() {
  return (
    <div className='container'>
      <h2 className='text-center fs-1 font-serif mt-3'>Department Management</h2>
      <DepartmentTable />
    </div>
  )
}

export default Department