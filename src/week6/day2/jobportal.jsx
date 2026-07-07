
import { useState } from "react";
import "./job.css";
import PreviewCard from "./job";

function JobPortal() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    skills: [],
    about: "",
  });

  const [message,setmessage]= useState("")

  const Change = (e) => {
    setForm({...form,[e.target.name]: e.target.value,});};

  const Skill = (skill) => {
    if (form.skills.includes(skill)) {
      setForm({...form,skills: form.skills.filter((item) => item !== skill),});
    } else {
      setForm({ ...form,skills: [...form.skills, skill], });
    }
  };

  const submitForm = () => {
    if ( !form.name.trim() ||!form.email.trim() ||!form.phone.trim() ||!form.role ||!form.experience ||form.skills.length === 0) {
      setmessage("please fill all required fields")
      return;
    }
    else{
   setmessage("Application Submitted Successfully!");
    }

  };

  return (
    <div className="container">
      <h1>Job Application Portal</h1>

      <div className="main">
        <div className="form">
          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={Change}/>
          <input type="email" name="email" placeholder="Email"  value={form.email}onChange={Change}/>
          <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={Change}/>
          <select name="role" value={form.role} onChange={Change}>
            <option value="">Select Role</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Full Stack Developer</option>
          </select>

          <select name="experience" value={form.experience} onChange={Change}>
            <option value="">Experience</option>
            <option>Fresher</option>
            <option>1-2 Years</option>
            <option>3+ Years</option>
          </select>

          <h3>Select Skills</h3>

          <label>
            <input type="checkbox" checked={form.skills.includes("HTML")} onChange={() => Skill("HTML")}/>HTML
           </label>
          <label>
            <input type="checkbox" checked={form.skills.includes("CSS")}onChange={() => Skill("CSS")}/>CSS
          </label>
         <label>
            <input type="checkbox" checked={form.skills.includes("JavaScript")} onChange={() => Skill("JavaScript")}/>JavaScript
          </label>

          <label>
            <input type="checkbox" checked={form.skills.includes("React")} onChange={() => Skill("React")}/>  React
          </label>

          <label>
            <input type="checkbox" checked={form.skills.includes("Node.js")} onChange={() => Skill("Node.js")}/>Node.js
          </label>

          <textarea name="about" placeholder="About Yourself" rows="5" value={form.about} onChange={Change} ></textarea>

          <button onClick={submitForm}>Submit Application </button>
          {message && <p className="message">{message}</p>}
        </div>

        <PreviewCard
          name={form.name}
          email={form.email}
          phone={form.phone}
          role={form.role}
          experience={form.experience}
          skills={form.skills}
          about={form.about}
        />
      </div>
    </div>
  );
}

export default JobPortal;