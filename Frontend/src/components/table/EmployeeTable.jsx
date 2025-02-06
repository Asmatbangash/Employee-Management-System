import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userAuth } from "../../context/AuthContext";

function EmployeeTable() {
  const { user } = useContext(userAuth);

  const empArr = [
    {
      S_NO: "",
      Image: "",
      Name: "",
      DOB: "",
      Department: "",
      Action: "",
      Status: "",
    },
  ];
  return (
    <>
      <div className="d-flex flex-wrap justify-between my-4">
        <form className="" role="search">
          <input
            className="form-control me-2 me-sm-0 w-52"
            type="search"
            placeholder="Search by department"
            aria-label="Search"
          />
        </form>
        <Link to="/add-new-employee">
          <button className="btn btn-primary mt-sm-2">Add New Employee</button>
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.NO</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Department</th>
              {user === "admin" ? (
                <th scope="col">Action</th>
              ) : (
                <th scope="col">Status</th>
              )}
            </tr>
          </thead>
          <tbody>
            {empArr.map((emp) => (
              <tr>
                <th scope="row">{emp.S_NO}</th>
                <td>{emp.Image}</td>
                <td>{emp.Name}</td>
                <td>{emp.DOB}</td>
                <td>{emp.Department}</td>
                {user === "admin" ? (
                  <td>
                    <button className="btn btn-info m-1">view</button>{" "}
                    <button className="btn btn-success m-1">Edit</button>
                    <button className="btn btn-warning m-1">salery</button>{" "}
                    <button className="btn btn-danger m-1">Delete</button>
                  </td>
                ) : (
                  <td>Pending</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EmployeeTable;
