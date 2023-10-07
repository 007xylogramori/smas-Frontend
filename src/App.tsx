import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Dashboard />} path="/" />
        <Route element={<LoginPage />} path="/login" />
      </Routes>
    </div>
  );
};

export default App;
