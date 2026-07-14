import { Link } from "react-router-dom";

function CourseCard({
  id,
  title,
  instructor,
  duration,
  level,
  price,
  img,
}) {
  return (
    <div className="course-card">
      <h2>{title}</h2>
      <p>  <strong>Instructor:</strong> {instructor}</p>
      <p>  <strong>Duration:</strong> {duration}</p>
      <p>  <strong>Level:</strong> {level}</p>
      <p>  <strong>Price:</strong> {price}</p>
      <img src={img} alt={title} className="course-image"/>
      <Link to={`/courses/${id}`}>  <button>View Details</button></Link>
    </div>
  );
}

export default CourseCard;