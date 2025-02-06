import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

function Login() {
  const { login } = useContext(userAuth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handlSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });
      alert("successfuly login");
      if (response.data.success) {
        login(response.data.user);
        localStorage.setItem("token", response.data.token);
        if (response.data.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/employee");
        }
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        setErr(error.response.data.error);
      } else {
        setErr("server error");
      }
    }
  };

  return (
    <>
      <div className="container h-screen flex flex-col items-center justify-center bg-gradient-to-b from-teal-500 from-50% to-gray-100 to-50% font-serif">
        <h2 className="mb-10 fs-3 md:mb-5 sm:mb-1 text-white">
          Employee Management System
        </h2>
        <form
          className="bg-white shadow-lg p-3 mb-5 bg-body-tertiary rounded"
          ref={formRef}
          onSubmit={handlSubmit}
        >
          <h1 className="mb-5 font-bold fs-4">Login</h1>
          <p className="text-danger fs-6 my-3">{err}</p>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="@email.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="invalid-feedback">email should be required!</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="*******"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 float-end"></div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember Me!
            </label>
            <a href="" className="ml-32 text-green-600">
              Register Now?
            </a>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
