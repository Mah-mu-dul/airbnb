import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/home";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard.jsx";
import SearchResults from "./pages/search-results.jsx";
import Error from "./pages/Error.jsx";
import Navbar from "./components/Navbar.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import AddNewProperty from "./components/dashboard/host/AddNewProperty.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GuestDashboard from "./components/dashboard/GuestDashboard.jsx";
import HostDashboard from "./components/dashboard/HostDashboard.jsx";
import ForgetPassword from "./pages/ForgetPassword.jsx";
import AdminDashboard from "./components/dashboard/AdminDashboard.jsx";
import ChatPopUp from "./components/chat/chatPopUp.jsx";
import ChatPage from "./components/chat/ChatPage.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* <ChatPopUp /> */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chat" element={<ChatPage />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route
            path="/become-a-host"
            element={
              <ProtectedRoute>
                <AddNewProperty />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/guest"
            element={
              <ProtectedRoute>
                <GuestDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/host"
            element={
              <ProtectedRoute>
                <HostDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;
