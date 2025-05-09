import { Route, Routes, Navigate } from "react-router-dom";
import { Register, Login } from "./pages";
import { Layout } from "./components";
import Dashboard from "./pages/dashboardUser";
import { DashboardUser } from "./pages/dashboard";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dasboard" element={<DashboardUser />} />
        <Route path="dashboardUser" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
};

export default App;