import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./components/Header";
import Bottom from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddForm from "./components/AddForm";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} />

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<AddForm />} />
      </Routes>

      <Bottom />
    </BrowserRouter>
  )
}

export default App
