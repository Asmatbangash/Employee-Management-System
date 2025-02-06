import React, { useContext } from "react";
import { userAuth } from "../context/AuthContext";
import employee from "../assets/images/employee.gif";

function EmployeeDashboard() {
  const { user } = useContext(userAuth);
  return (
    <div className="container">
      <h1 className="my-4 ms-3 fs-3">Dashboard overview</h1>
      <div className="container d-flex flex-wrap mb-2">
        <div className="col-md-6 my-2 mx-2">
          <div className="row g-0 border rounded overflow-hidden shadow-sm position-relative">
            <div className="col d-lg-block">
              <img src={employee} alt="" className="w-100 h-100" />
            </div>
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0">Welcome Back</h3>
              <div className="mb-1 text-body-secondary">
                <b>{user.name}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
