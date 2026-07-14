import { Link, useParams } from "react-router-dom";
import courses from "./coursedata";

function CourseDetails() {
  const { id } = useParams();

  const selectedCourse = courses.find(
    (course) => course.id === Number(id)
  );

  if (!selectedCourse) {
    return <h2>Course Not Found</h2>;
  }

  return (
    <>
      <div className="course-details">
        <h1>{selectedCourse.title}</h1>
        <h3>Instructor: {selectedCourse.instructor}</h3>
        <p><strong>Duration:</strong> {selectedCourse.duration}</p>
        <p> <strong>Level:</strong> {selectedCourse.level} </p>
        <p>  <strong>Price:</strong> {selectedCourse.price}</p>
       <p>  <strong>Description:</strong></p>
        <p>{selectedCourse.description}</p>
        <Link to="/courses"><button>Back to Courses</button> </Link>
      </div>
    </>
  );
}

export default CourseDetails;