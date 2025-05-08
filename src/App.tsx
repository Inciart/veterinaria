import { Route, Routes, Navigate } from "react-router-dom";
import { Register, Login, Dasboard } from "./pages";
import { Layout } from "./components";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dasboard" element={<Dasboard/>} />
      </Routes>
    </Layout>
  );
};

export default App;

