import { useState } from "react";

function Setting() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


 const saveChanges = () => {

  localStorage.setItem("adminName", name);
  localStorage.setItem("adminEmail", email);

  window.dispatchEvent(new Event("profileUpdated"));

  alert("Changes Saved");

};


  return (
    <div className="settings">

      <h1>Settings</h1>

      <div className="setting-card">

        <label>Name</label>

        <input 
          type="text" 
          placeholder="Enter your name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />


        <label>Email</label>

        <input 
          type="email" 
          placeholder="Enter your email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />


        <button onClick={saveChanges}>
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default Setting;