import React from "react";

function SettingForm() {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center  align-items-center bg-white m-3 m-md-0 p-4 p-md-0">
        <h1 className="text-center fs-1">Change Password</h1>
        <form className="row g-2 needs-validation" novalidate>
          <div className="mb-3 p-2">
            <label for="validationCustom01" className="form-label">
              Old Password
            </label>
            <input
              type="password"
              className="form-control"
              id="validationCustom01"
              placeholder="enter department"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3 p-2">
            <label for="validationCustom01" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="validationCustom01"
              placeholder="enter department"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3 p-2">
            <label for="validationCustom01" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="validationCustom01"
              placeholder="enter department"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              Change Password
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SettingForm;
