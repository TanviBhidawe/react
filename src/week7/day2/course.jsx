import CourseCard from "./coursecard";
import courses from "./coursedata";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="course-container">
        <h1>Our Courses</h1>

        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              instructor={course.instructor}
              duration={course.duration}
              level={course.level}
              price={course.price}
              img={course.img}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;