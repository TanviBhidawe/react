import { useEffect, useState } from "react";

function Navbar(){

  const [adminName, setAdminName] = useState(
    localStorage.getItem("adminName") || "Admin"
  );


  useEffect(() => {

    const updateName = () => {

      setAdminName(
        localStorage.getItem("adminName")
      );

    };


    window.addEventListener(
      "profileUpdated",
      updateName
    );


    return () => {

      window.removeEventListener(
        "profileUpdated",
        updateName
      );

    };


  }, []);



  return(
    <nav className="navbar">

      <h2>Admin Dashboard</h2>

      <h3>{adminName}</h3>

    </nav>
  );

}

export default Navbar;