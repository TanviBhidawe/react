import {users} from "./user";
import {products} from "./product";
function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h3>Total Users</h3>
          <p>{users.length}</p>
        </div>

        <div className="card">
          <h3>Products</h3>
          <p>{products.length}</p>
        </div>

        <div className="card">
          <h3>Orders</h3>
          <p>80</p>
        </div>

        <div className="card">
          <h3>Revenue</h3>
          <p>₹50,000</p>
        </div>
    
      </div>
    </div>
  );
}

export default Dashboard;