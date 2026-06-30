function App() {
  return (
    <div className="container">

      <section className="intro">
        <h1>Hello, I'm Tanvi </h1>
        <p>
          I am learning React and building my first dashboard.
        </p>
      </section>

    
      <section className="goals">
        <h2>Learning Goals</h2>

        <ul>
          <li>Learn JSX</li>
          <li>Understand Components</li>
          <li>Build React Projects</li>
          <li>Improve Frontend Skills</li>
        </ul>
      </section>

   
      <section className="hobbies">
        <h2>My Hobbies</h2>

        <ul>
          <li> Listening Music</li>
          <li> Coding</li>
          <li> Watching Movies</li>
        </ul>
      </section>

  
      <section>
        <h2>Skills</h2>

        <div className="skills">

          <div className="card">
            <h3>HTML</h3>
          </div>

          <div className="card">
            <h3>CSS</h3>
          </div>

          <div className="card">
            <h3>JavaScript</h3>
          </div>

        

        </div>
      </section>

    </div>
  );
}

export default App;