import { Route, Routes, Navigate } from "react-router-dom";
import { Register, Login, RegisterPet } from "./pages";
import { Layout } from "./components";
import Dashboard from "./pages/dashboardUser";
import { DashboardUser } from "./pages/dashboard";
import { NotFound } from "./pages/404";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardUser />} />
        <Route path="dashboardUser" element={<Dashboard />} />
        <Route path="/registerpet" element={<RegisterPet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;