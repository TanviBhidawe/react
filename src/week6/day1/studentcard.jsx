function StudentCard({ student, Attendance,removeStudent }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>

      <p className={student.present ? "present" : "absent"}>
        {student.present ? "Present " : "Absent"}
      </p>
      <div className="btn-group">
      <button  className="mark" onClick={() => Attendance(student.id)}>
        {student.present ? "Mark Absent" : "Mark Present"}
      </button>
     <button className="delete-btn" onClick={() => removeStudent(student.id)}> Remove</button>
     </div>
    </div>
     );
    }

export default StudentCard;