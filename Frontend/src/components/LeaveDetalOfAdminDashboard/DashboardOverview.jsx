import React from "react";
import employee from "../../assets/images/employee.gif";
import department from "../../assets/images/Department.gif";
import money from "../../assets/images/money.gif";

function DashboardOverview() {
  return (
    <div className="container">
      <h1 className="my-4 ms-3 fs-3">Dashboard overview</h1>
      <div class="container d-flex flex-wrap mb-2">
        <div class="col-md-3 my-2 mx-2">
          <div class="row g-0 border rounded overflow-hidden shadow-sm position-relative">
            <div class="col d-lg-block">
              <img src={employee} alt="" className="w-100 h-100" />
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <h3 class="mb-0">Total Employee</h3>
              <div class="mb-1 text-body-secondary">
                <b>4</b>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 my-2 mx-2">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm  position-relative">
            <div class="col d-lg-block">
              <img src={department} alt="" className="w-100 h-100" />
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <h3 class="mb-0">Total Department</h3>
              <div class="mb-1 text-body-secondary">
                <b>4</b>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 my-2 mx-2">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm  position-relative">
            <div class="col d-lg-block">
              <img src={money} alt="" className="w-100 h-100" />
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <h3 class="mb-0">
                Monthly <br /> Pay
              </h3>
              <div class="mb-1 text-body-secondary">
                <b>4</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;
