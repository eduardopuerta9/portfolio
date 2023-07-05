import '../App.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section className="startSection">
      <img
        className="profile"
        src="https://media.licdn.com/dms/image/D4E03AQFgPxhRXJqV7g/profile-displayphoto-shrink_800_800/0/1681248097796?e=1694044800&v=beta&t=LeEWfd99eLiBlJFbXKkq1as4HO9e0ud6ydQbGTo7ctI"
      ></img>
      <h3 className="greeting">Welcome!</h3>
      <h4 className="intro">
        My name is Eduardo Puerta, and I am a passionate Full Stack Software
        Engineer dedicated to creating innovative solutions that resonate with
        users and make a positive impact. With a deep love for technology and a
        drive for continuous learning, I constantly seek new challenges to push
        the boundaries of what's possible.
      </h4>
      <img
        className="icons"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      />
      <img
        className="icons"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
      />
      <img
        className="icons"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
      />
      <img
        className="icons"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
      />
      <img
        className="icons"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      />
      <img
        className="icons"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      />
      <img
        className="icons"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"
      />
      <img
        className="icons"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      />
      <img
        className="icons"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
      />
      <img
        className="icons"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
      />
      <img
        className="icons"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
      />
      <img
        className="icons"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
      />
      <img
        className="icons"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg"
      />
      <br />
      <a href="https://www.linkedin.com/in/eduardo-puerta-0a7707265/">
        <img
          className="linkedin"
          alt="linkedin account"
          title="Connect With Me on LinkedIn"
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
        />
      </a>
      <a href="https://docs.google.com/document/d/11kKd-C8DMDFQWO0HlrXSznGVKfojKLDNyEu4wpIbwUo/edit?pli=1">
        <img
          className="resume"
          alt="resume link"
          title="check out my resume"
          src="https://cdn-icons-png.flaticon.com/512/1870/1870080.png"
        />
      </a>
      <h2 className="project-title">Projects I have Built</h2>
      <div className="project">
        <img
          className="project-image"
          alt="Project Link"
          title="Check out my project"
          src="https://user-images.githubusercontent.com/122240360/220215856-e7cc909b-7566-41f0-9a90-97de7abab2da.png"
        />
        <div className="project-icons">
          <img
            className="project-icon"
            alt="MongoDB"
            title="MongoDB"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          />
          <img
            className="project-icon"
            alt="express"
            title="express"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
          />
          <img
            className="project-icon"
            alt="react"
            title="react"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <img
            className="project-icon"
            alt="node"
            title="node"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
          {/* Add more project icons here */}
        </div>
        <p className="project-desc">
          A website where Premier League fans can interact by sharing their
          opinions about their teams and stadium experiences.
        </p>
      </div>
    </section>
  )
}
export default Home
