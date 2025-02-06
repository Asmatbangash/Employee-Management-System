import { GiHamburgerMenu } from "react-icons/gi";
import React, { useContext, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FcDepartment } from "react-icons/fc";
import { FcLeave } from "react-icons/fc";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdSettingsSuggest } from "react-icons/md";
import { Link } from "react-router-dom";
import { userAuth } from "../../context/AuthContext";

function Offcanvas() {
  const { user } = useContext(userAuth);
  let userRole = user.role;
  const [selectedTab, setSelectedTab] = useState(userRole);
  if (userRole === "admin") {
    return (
      <>
        <button
          className="btn btn-primary d-sm-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#staticBackdrop"
          aria-controls="staticBackdrop"
        >
          <GiHamburgerMenu />
        </button>
        <div
          className="offcanvas offcanvas-start"
          data-bs-backdrop="static"
          tabIndex="-1"
          id="staticBackdrop"
          aria-labelledby="staticBackdropLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="staticBackdropLabel">
              Complaint Management System
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div>
              <div className="d-flex flex-column p-2 text-bg-dark overflow-hidden">
                <ul className="nav nav-pills flex-column mb-auto">
                  <li
                    className="nav-item"
                    onClick={() => setSelectedTab(userRole)}
                  >
                    <Link
                      to={`/${userRole}`}
                      className={`nav-link text-white flex items-center ${
                        selectedTab === userRole && "active"
                      }`}
                    >
                      <MdDashboard className="mr-3 fs-4" />
                      <span className="">Dashboard</span>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setSelectedTab("employees")}
                  >
                    <Link
                      to="/employees"
                      className={`nav-link text-white flex items-center ${
                        selectedTab === "employees" && "active"
                      }`}
                    >
                      <IoIosPeople className="mr-3 fs-4" />
                      <span>Employee </span>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setSelectedTab("department")}
                  >
                    <Link
                      to="/department"
                      className={`nav-link text-white flex items-center ${
                        selectedTab === "department" && "active"
                      }`}
                    >
                      <FcDepartment className="mr-3 fs-4" />
                      <span> Department </span>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setSelectedTab("leave")}
                  >
                    <Link
                      to="/leave"
                      className={`nav-link text-white flex items-center ${
                        selectedTab === "leave" && "active"
                      }`}
                    >
                      <FcLeave className="mr-3 fs-4" />
                      <span> Leave</span>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setSelectedTab("salery")}
                  >
                    <Link
                      to="/salery"
                      className={`nav-link text-white flex items-center ${
                        selectedTab === "salery" && "active"
                      }`}
                    >
                      <GiTakeMyMoney className="mr-3 fs-4" />
                      <span> salery </span>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setSelectedTab("setting")}
                  >
                    <Link
                      to="/setting"
                      className={`nav-link text-white flex items-center ${
                        selectedTab === "setting" && "active"
                      }`}
                    >
                      <MdSettingsSuggest className="mr-3 fs-4" />
                      <span> setting </span>
                    </Link>
                  </li>
                </ul>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <button
          className="btn btn-primary d-sm-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#staticBackdrop"
          aria-controls="staticBackdrop"
        >
          <GiHamburgerMenu />
        </button>
        <div
          className="offcanvas offcanvas-start"
          data-bs-backdrop="static"
          tabIndex="-1"
          id="staticBackdrop"
          aria-labelledby="staticBackdropLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="staticBackdropLabel">
              Complaint Management System
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div>
              <div className="d-flex flex-column p-2 text-bg-dark overflow-hidden">
                <ul className="nav nav-pills flex-column mb-auto">
                  <li
                    className="nav-item"
                    onClick={() => setSelectedTab(userRole)}
                  >
                    <Link
                      to={`/${userRole}`}
                      className={`nav-link text-white flex items-center ${
                        selectedTab === userRole && "active"
                      }`}
                    >
                      <MdDashboard className="mr-3 fs-4" />
                      <span className="">Dashboard</span>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setSelectedTab("MyProfile")}
                  >
                    <Link
                      to="/MyProfile"
                      className={`nav-link text-white flex items-center ${
                        selectedTab === "MyProfile" && "active"
                      }`}
                    >
                      <IoIosPeople className="mr-3 fs-4" />
                      <span>MyProfile </span>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setSelectedTab("leave")}
                  >
                    <Link
                      to="/leave"
                      className={`nav-link text-white flex items-center ${
                        selectedTab === "leave" && "active"
                      }`}
                    >
                      <FcLeave className="mr-3 fs-4" />
                      <span> Leave</span>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setSelectedTab("salery")}
                  >
                    <Link
                      to="/salery"
                      className={`nav-link text-white flex items-center ${
                        selectedTab === "salery" && "active"
                      }`}
                    >
                      <GiTakeMyMoney className="mr-3 fs-4" />
                      <span> salery </span>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setSelectedTab("setting")}
                  >
                    <Link
                      to="/setting"
                      className={`nav-link text-white flex items-center ${
                        selectedTab === "setting" && "active"
                      }`}
                    >
                      <MdSettingsSuggest className="mr-3 fs-4" />
                      <span> setting </span>
                    </Link>
                  </li>
                </ul>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Offcanvas;
