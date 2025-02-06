
function AddDepartment(){
    return(
        <>
        <div className="container bg-white m-3 p-4">
            <h1 className="text-center fs-1">Add New Department</h1>
        <form className="row g-2 needs-validation" novalidate>
      <div className="mb-3 p-2">
        <label for="validationCustom01" className="form-label">Department Name</label>
        <input type="text" className="form-control" id="validationCustom01" placeholder="enter department"  required />
        <div className="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="mb-3">
    <label for="validationTextarea" class="form-label">Textarea</label>
    <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" cols='10' rows='5'required></textarea>
    <div class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>
      <div className="d-grid gap-2">
      <button className="btn btn-primary" type="submit">Add Department</button>
    </div>
    </form>
        </div>
        </>
    )
}

export default AddDepartment;