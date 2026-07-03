function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"> Startup.
        <img src="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhcnR1cCUyMGxvZ28lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />
      </div>

      <ul className="nav-links">
      <li>
          <a href="#hero">Home</a>
        </li>
       <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;