import image from "../../assets/image.png";

function Hero() {

  function hireMe() {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  }

  function learnMore() {
    document.getElementById("about").scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className="hero" id="hero">

      <div className="hero-text">

        <h1>Hi, I'm Tanvi </h1>

        <h3>Frontend Developer | React Learner</h3>

        <p>
          I enjoy building modern and responsive websites using HTML, CSS,
          JavaScript, and React. I love learning new technologies and improving
          my development skills.
        </p>

        <div className="hero-btns">

          <button className="btn1" onClick={hireMe}>Hire Me</button>
        <button  className="btn2" onClick={learnMore}>Learn More </button>
         </div>

      </div>

     
        <div className="hero-image">
        <img src={image} alt="Tanvi" />
      </div>

    </section>
  );
}

export default Hero;