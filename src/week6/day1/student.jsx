import { useState } from "react";
import "./student.css";
import StudentCard from "./studentcard.jsx";

function Student() {
  const [students, setStudents] = useState([
    { id: 1, name: "Amit", present: false },
    { id: 2, name: "Sneha", present: false },
    { id: 3, name: "Rahul", present: false },
    { id: 4, name: "Priya", present: false },
    { id: 5, name: "Rohit", present: false },
  ]);
  const [newStudent, setNewStudent] = useState("");

  const Attendance = (id) => {
    setStudents(students.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }: student));
       };

   const addStudent = () => {
    if (newStudent.trim() === "") {
       alert("please enter the student name!")
      return;
    }

    const student = {
      id: students.length + 1,
      name: newStudent,
      present: false,
    };
     setStudents([...students, student]);
    setNewStudent("");
  };

  const removeStudent = (id) => {
  setStudents(
    students.filter((student) => student.id !== id)
  );
};

  const presentCount = students.filter((student) => student.present).length;
  const absentCount = students.length - presentCount;
  const attendancePercentage = ((presentCount / students.length) *100).toFixed(0);

  const getSummary = () => {
    if (attendancePercentage >= 80) {
      return "Excellent Attendance!";
    } else if (attendancePercentage >= 60) {
      return " Good Attendance!";
    } else if (attendancePercentage > 0) {
      return "Attendance Needs Improvement!";
    } else {
      return "No Attendance Marked Yet!";
    }
  };

  return (
    <div className="container">
      <h1>Student Attendance Tracker</h1>

         <div className="add-student">
        <input type="text" placeholder="Enter student name" value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}/>
        <button onClick={addStudent}>Add Student</button>
      </div>

      <div className="student-list">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            Attendance={Attendance}
            removeStudent={removeStudent} />
        ))}
      </div>

      <div className="summary">
        <h2>Attendance Summary</h2>
        <p><strong>Total Students:</strong> {students.length}</p>
       <p> <strong>Present:</strong> {presentCount}</p>
      <p><strong>Absent:</strong> {absentCount}</p>
      <p><strong>Attendance:</strong> {attendancePercentage}%</p>
      <h3>{getSummary()}</h3>
      </div>
    </div>);
}
export default Student;