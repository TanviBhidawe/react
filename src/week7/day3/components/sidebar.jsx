import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/">Dashboard</Link>
      <Link to="/users">Users</Link>
      <Link to="/products">Products</Link>
      <Link to="/settings">Settings</Link>
    </aside>
  );
}

export default Sidebar;