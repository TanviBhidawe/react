import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./files/dashboardlayout";
import Dashboard from "./files/dashboard";
import User from "./files/user";
import Product from "./files/product";
import Setting from "./files/setting";

import "./app.css";

function App() {
  return (
    
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<User />} />
          <Route path="/products" element={<Product />} />
          <Route path="/settings" element={<Setting />} />
        </Route>
      </Routes>
    
  );
}

export default App;