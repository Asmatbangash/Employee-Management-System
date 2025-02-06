import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"

function App() {

  return (
      <>
            <Navbar />
            <div className="d-flex">
            <Sidebar/>
             <Outlet />
            </div>
      </>
  )
}

export default App
