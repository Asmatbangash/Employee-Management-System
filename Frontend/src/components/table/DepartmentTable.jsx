import React from "react";
import { Link } from "react-router-dom";

function Table() {
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
        <Link to="/add-new-department">
          <button className="btn btn-primary mt-sm-2" type="submit">
            Add New Department
          </button>
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.NO</th>
              <th scope="col">Department</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>
                <button className="btn btn-success ms-2" type="submit">
                  Edit
                </button>{" "}
                <button className="btn btn-danger" type="submit">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>
                <button className="btn btn-success ms-2" type="submit">
                  Edit
                </button>{" "}
                <button className="btn btn-danger" type="submit">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>
                <button className="btn btn-success ms-2" type="submit">
                  Edit
                </button>{" "}
                <button className="btn btn-danger" type="submit">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
