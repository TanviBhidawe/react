import { useEffect, useState } from "react";
import "./news.css";
import NewsCard from "./newscard";

function News() {
const newsData = [
  {
    id: 1,
    title: "React 19 Released",
    category: "Technology",
    info:
      "React 19 introduces powerful new features, making applications faster and improving the developer experience.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNCWgCzETZMCBtYJca-L9yVa_fdZpe4mca5bqm6Y7GN2e89JZG6A9Lucs&s=10"
  },
  {
    id: 2,
    title: "India Wins Cricket Match",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600",
    info:
      "India secured an exciting victory with an impressive batting performance and disciplined bowling.",
  },
  {
    id: 3,
    title: "Stock Market Hits Record High",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600",
    info:
      "Strong company earnings and investor confidence pushed the market to a new all-time high.",
  },
  {
    id: 4,
    title: "Heavy Rain Alert Issued",
    category: "Weather",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600",
    info:
      "The weather department has warned of heavy rainfall in several districts over the next two days.",
  },
  {
    id: 5,
    title: "New Electric Cars Launched",
    category: "Automobile",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600",
    info:
      "Leading automobile companies introduced affordable electric vehicles with improved battery range.",
  },
  {
    id: 6,
    title: "AI Changing Education",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
    info:
      "Schools and colleges are adopting AI-powered tools to improve learning and classroom engagement.",
  },
];

  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);

  function loadNews() {
    setLoading(true);

    setTimeout(() => {
      const change = [...newsData].sort(() => Math.random() - 0.5);
      setHeadlines(change);
      setLoading(false);
    }, 1500);
  }

  useEffect(() => {
    loadNews();
    const interval = setInterval(() => {
      loadNews();
    }, 5000);
  }, []);

  return (
    <div className="container">
      <h1> Dynamic News Headlines</h1>

      <p className="refresh">
        Headlines refresh automatically every 5 seconds
      </p>

      {loading ? (
        <div className="loading">Loading Latest News...</div>
      ) : (
        <div className="news-container">
          {headlines.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              category={news.category}
              description={news.info}
              image={news.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default News;