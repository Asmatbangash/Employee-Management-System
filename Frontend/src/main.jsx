import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Employee from "./pages/Employee.jsx";
import Department from "./pages/Department.jsx";
import Leave from "./pages/Leave.jsx";
import Salery from "./pages/Salery.jsx";
import Setting from "./pages/Setting.jsx";
import EmployeeDashboard from "./pages/EmployeeDashboard.jsx";
import AuthContext, { userAuth } from "./context/AuthContext.jsx";
import AddEmployee from "./components/Form/AddEmployee.jsx";
import AddDepartment from "./components/Form/AddDepartment.jsx";
import MyProfilePage from "./pages/MyProfilePage/MyProfilePage.jsx";

const ProtectedRoute = ({ element, roles }) => {
  let { user } = useContext(userAuth);
  if (!user || !roles.includes(user.role)) {
    return Navigate("/login");
  }
  return element;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/admin",
        element: (
          <ProtectedRoute element={<AdminDashboard />} roles={["admin"]} />
        ),
      },
      {
        path: "/employee",
        element: (
          <ProtectedRoute
            element={<EmployeeDashboard />}
            roles={["employee"]}
          />
        ),
      },
      {
        path: "/employees",
        element: <ProtectedRoute element={<Employee />} roles={["admin"]} />,
      },
      {
        path: "/add-new-employee",
        element: <ProtectedRoute element={<AddEmployee />} roles={["admin"]} />,
      },
      {
        path: "/department",
        element: <ProtectedRoute element={<Department />} roles={["admin"]} />,
      },
      {
        path: "/add-new-department",
        element: <ProtectedRoute element={<AddEmployee />} roles={["admin"]} />,
      },
      {
        path: "/leave",
        element: (
          <ProtectedRoute element={<Leave />} roles={["admin", "employee"]} />
        ),
      },
      {
        path: "/salery",
        element: (
          <ProtectedRoute element={<Salery />} roles={["admin", "employee"]} />
        ),
      },
      {
        path: "/setting",
        element: (
          <ProtectedRoute element={<Setting />} roles={["admin", "employee"]} />
        ),
      },
      {
        path: "/MyProfile",
        element: (
          <ProtectedRoute element={<MyProfilePage />} roles={["employee"]} />
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
]);

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <RouterProvider router={router}></RouterProvider>
  </AuthContext>
);
