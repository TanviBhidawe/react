function Hero() {

  function GetStarted() {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  }

  function LearnMore() {
    document.getElementById("features").scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className="hero" id="hero">

      <div className="hero-text">

        <h1>Build Your Dream Startup Today</h1>

        <p>
          Launch your business with modern technology and
          powerful solutions that help you grow faster.
        </p>

        <div className="hero-btns">

          <button
            className="btn1"
            onClick={GetStarted}
          >
            Get Started
          </button>

          <button
            className="btn2"
            onClick={LearnMore}
          >
            Learn More
          </button>

        </div>

      </div>

      <div className="hero-image">

    </div>

    </section>
  );
}

export default Hero;