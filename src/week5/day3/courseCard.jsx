function CourseCard({ title, level, duration, image }) {
  return (
    <div className="card">

      <img src={image} alt={title} />

      <h2>{title}</h2>

      <p> {level}</p>

      <p> {duration}</p>

      <button>Enroll</button>

    </div>
  );
}

export default CourseCard;