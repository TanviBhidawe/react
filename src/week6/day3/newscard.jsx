function NewsCard({ title, category, info,image }) {
  return (
    <div className="card">
      <span className="cat">{category}</span>

      <h2>{title}</h2>
     <img src={image} alt={title} className="img" />
      <p>{info}</p>
    </div>
  );
}

export default NewsCard;