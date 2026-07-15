const users = [
  {
    id: 1,
    name: "John Doe",
    role: "Admin",
    image: "https://images.unsplash.com/photo-1758599543242-31567fb8766e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Emma Smith",
    role: "Editor",
    image: "https://images.unsplash.com/photo-1633576264580-666f32b193ab?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Alex Roy",
    role: "User",
    image: "https://images.unsplash.com/photo-1659353220482-554773c2f7fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2Zlc3Npb25hbCUyMG1hbiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Sophia Lee",
    role: "User",
    image: "https://images.unsplash.com/photo-1565079527389-eb2640ee27fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Tom Roy",
    role: "User",
    image: "https://images.unsplash.com/photo-1635046778483-c190a4bb49c5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "joy Byers",
    role: "User",
    image: "https://images.unsplash.com/photo-1576769488241-605bfd2ffdaf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
  },
];
function User() {
  return (
    <div>
      <h1>Users</h1>

      <div className="cards">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <img src={user.image} alt={user.name} />
            <h3>{user.name}</h3>
            <p>{user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export{users}
export default User;