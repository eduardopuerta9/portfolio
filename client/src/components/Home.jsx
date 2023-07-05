import '../App.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="startSection">
      <img
        className="profile"
        src="https://media.licdn.com/dms/image/D4E03AQFgPxhRXJqV7g/profile-displayphoto-shrink_800_800/0/1681248097796?e=1694044800&v=beta&t=LeEWfd99eLiBlJFbXKkq1as4HO9e0ud6ydQbGTo7ctI"
      />
      <h3 className="greeting">Welcome!</h3>
      <h4 className="intro">
        My name is Eduardo Puerta, and I am a passionate Full Stack Software
        Engineer dedicated to creating innovative solutions that resonate with
        users and make a positive impact. With a deep love for technology and a
        drive for continuous learning, I constantly seek new challenges to push
        the boundaries of what's possible.
      </h4>
      <div className="icons-container">
        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        />
        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
        />
        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
        />
        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
        />
        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />
        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        />
        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"
        />
        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        />
        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
        />
        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
        />
        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
        />
        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
        />
        <img
          className="icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg"
        />
      </div>
      <div className="links-container">
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
            title="Check out my resume"
            src="https://cdn-icons-png.flaticon.com/512/1870/1870080.png"
          />
        </a>
      </div>
      <h2 className="project-title">Projects </h2>
      <div className="project">
        <div className="project-image-container">
          <img
            className="project-image"
            alt="Project Link"
            title="Check out my project"
            src="https://user-images.githubusercontent.com/122240360/220215856-e7cc909b-7566-41f0-9a90-97de7abab2da.png"
          />
        </div>
        <div className="project-details">
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
          </div>
          <p className="project-desc">
            A website where Premier League fans can interact by sharing their
            opinions about their teams and stadium experiences.
          </p>
        </div>
      </div>
      <div className="project">
        <div className="project-image-container">
          <img
            className="project-image"
            alt="Project Link"
            title="Check out my project"
            src="https://camo.githubusercontent.com/7984a721682093bc2730eedeeb42a1d4d97e98ae80127d8dc68e977fee750be8/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313037353531393135383039373238313039372f313037383339383235343035333630353338362f53637265656e73686f745f66726f6d5f323032332d30322d32335f31322d30382d33312e706e673f77696474683d31333032266865696768743d363630"
          />
        </div>
        <div className="project-details">
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
          </div>
          <p className="project-desc">
            Have you been to Six Flags Recently? Use this website and leave a
            review on a ride you went on or even comment on already reviewed
            rides!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home
