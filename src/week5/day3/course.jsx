import "./style.css";
import CourseCard from "./courseCard";

function App() {
  const courses = [
    {
      id: 1,
      title: "React Basics",
      level: "Beginner",
      duration: "4 Weeks",
      image:"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D"
      
    },

    {
      id: 2,
      title: "JavaScript",
      level: "Intermediate",
      duration: "6 Weeks",
      image:"https://assets.bacancytechnology.com/qanda/wp-content/uploads/2024/10/16055013/Parse-a-String-in-JavaScript.jpg"
    },

    {
      id: 3,
      title: "Python",
      level: "Beginner",
      duration: "8 Weeks",
      image:"https://img.magnific.com/premium-vector/python-icon_1181510-14.jpg?semt=ais_hybrid&w=740&q=80"
    },

    {
      id: 4,
      title: "C Programming",
      level: "Beginner",
      duration: "5 Weeks",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJiU4pYdHNVw65eUyz8YDmQMPMk6jrCYDmWZAatfSCIg&s"
    },
  ];

  return (
    <div className="app">

      <h1> Course Listing Platform</h1>

      <div className="courses">

        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            level={course.level}
            duration={course.duration}
            image={course.image}
          />
        ))}

      </div>

    </div>
  );
}

export default App;