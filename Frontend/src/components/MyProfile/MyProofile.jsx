import React from "react";
import employee from "../../assets/images/employe.jpeg";

function MyProofile() {
  return (
    <div className="container m-5">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-500 position-relative">
        <div className="col-auto d-lg-block">
          <img src={employee} alt="" className="w-100 h-100" />
        </div>
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">
            Name :
            <br />
            Employee Id :
            <br />
            Date Of Birth :
            <br />
            Geneder :
            <br />
            Department :
            <br />
            Merital Status :
          </strong>
        </div>
      </div>
    </div>
  );
}

export default MyProofile;
