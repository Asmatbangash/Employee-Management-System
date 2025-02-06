import React from 'react'

function AddEmployee() {
  return (
    <div className="container bg-white m-3 p-4">
       <h1 className="text-center fs-1 mb-5">Add New Employee</h1>
    <form className="row g-2 needs-validation" novalidate>
  <div className="col-md-6 p-2">
    <label for="validationCustom01" className="form-label">Name</label>
    <input type="text" className="form-control" id="validationCustom01"  required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6 p-2">
    <label for="validationCustom02" className="form-label">Email</label>
    <input type="text" className="form-control" id="validationCustom02"  required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6 p-2">
    <label for="validationCustom03" className="form-label">EmployeeID</label>
    <input type="text" className="form-control" id="validationCustom03" required />
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-6 p-2">
    <label for="validationCustom03" className="form-label">Date Of Birth</label>
    <input type="date" className="form-control" id="validationCustom03" required />
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-6 p-2">
    <label for="validationCustom04" className="form-label">Gender</label>
    <select className="form-select" id="validationCustom04" required >
      <option selected disabled value="">Choose...</option>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>
    <div className="invalid-feedback">
      Please select a Gender.
    </div>
  </div>
  <div className="col-md-6 p-2">
    <label for="validationCustom04" className="form-label">Merital statuse</label>
    <select className="form-select" id="validationCustom04" required >
      <option selected disabled value="">Choose...</option>
      <option>Married</option>
      <option>Un-Married</option>
    </select>
    <div className="invalid-feedback">
      Please select a Gender.
    </div>
  </div>
  <div className="col-md-6 p-2">
    <label for="validationCustom03" className="form-label">Designation</label>
    <input type="text" className="form-control" id="validationCustom03" required />
    <div className="invalid-feedback">
      Please provide designation.
    </div>
  </div>
  <div className="col-md-6 p-2">
    <label for="validationCustom04" className="form-label">Department</label>
    <select className="form-select" id="validationCustom04" required >
      <option selected disabled value="">Choose...</option>
      <option>IT</option>
      <option>CS</option>
      <option>AI</option>
    </select>
    <div className="invalid-feedback">
      Please select a Gender.
    </div>
  </div>
  <div className="col-md-6 p-2">
    <label for="validationCustom05" className="form-label">Salery</label>
    <input type="number" className="form-control" id="validationCustom05" required />
    <div className="invalid-feedback">
      Please provide amout of salery
    </div>
  </div>
  <div className="col-md-6 p-2">
    <label for="validationCustom05" className="form-label">password</label>
    <input type="password" className="form-control" id="validationCustom05" required />
    <div className="invalid-feedback">
      Please enter correct password
    </div>
  </div>
  <div className="col-md-6 p-2">
    <label for="validationCustom04" className="form-label">Role</label>
    <select className="form-select" id="validationCustom04" required >
      <option selected disabled value="">Choose...</option>
      <option>Admin</option>
      <option>Employee</option>
    </select>
    <div className="invalid-feedback">
      Please select a Gender.
    </div>
  </div>
  <div className="col-md-6 p-2">
  <label for="validationCustom04" className="form-label">Upload Image</label>
    <input type="file" className="form-control" aria-label="file example" required />
    <div className="invalid-feedback">Example invalid form file feedback</div>
  </div>
  <div className="d-grid gap-2">
  <button className="btn btn-primary" type="submit">Add Employee</button>
</div>
</form>
    </div>
  )
}

export default AddEmployee