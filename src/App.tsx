import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import { AppProvider } from "./context/loginContext";
import History from "./pages/history";

const App = () => {
  
  return (
    
    <div>
      <AppProvider>
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<History/>} path="/history" />
        </Routes>
      </AppProvider>
    </div>
   
  );
};

export default App;
