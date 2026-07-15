import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

function DashboardLayout() {
  return (
    <>
      <Navbar />
     <div className="layout">
        <Sidebar />
         <main className="content">
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default DashboardLayout;