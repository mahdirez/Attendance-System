import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "../pages/LoginForm";
import AdminDashboard from "../pages/AdminDashboard";

function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/Dashboard" element={<AdminDashboard/>}/>
        </Routes>
    </Router>
  )
}

export default AppRoutes