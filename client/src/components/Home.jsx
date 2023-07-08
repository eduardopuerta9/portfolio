import '../App.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section>
      <img
        className="profile"
        src="https://media.licdn.com/dms/image/D4E03AQFgPxhRXJqV7g/profile-displayphoto-shrink_800_800/0/1681248097796?e=1694044800&v=beta&t=LeEWfd99eLiBlJFbXKkq1as4HO9e0ud6ydQbGTo7ctI"
      />
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
      <div class="intro-container">
        <h4 class="intro">
          Welcome! <br></br>
          <br></br> My name is Eduardo Puerta, and I am a passionate Full Stack
          Software Engineer dedicated to creating innovative solutions that
          resonate with users and make a positive impact. With a deep love for
          technology and a drive for continuous learning, I constantly seek new
          challenges to push the boundaries of what's possible.
        </h4>
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
            Have you watched a Premier League team play or recently visited a
            stadium? Access this website where Premier League fans can interact
            by sharing their opinions about their teams and stadium experiences.
            Built using MongoDB, Express, React, and Node.
          </p>
          <Link to={'https://connect-four-space.surge.sh/'}>
            <button className="visit">Visit Website</button>
          </Link>
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
            rides! Built using MongoDB, Express, React, and Node.
          </p>
          <Link to={'https://'}>
            <button className="visit">Visit Website</button>
          </Link>
        </div>
      </div>
      <div className="project">
        <div className="project-image-container">
          <img
            className="project-image"
            alt="Project Link"
            title="Check out my project"
            src="https://user-images.githubusercontent.com/122240360/231035347-60a6b3fe-58e5-4034-921a-c2737e90f6bd.png"
          />
        </div>
        <div className="project-details">
          <div className="project-icons">
            <img
              className="project-icon"
              alt="PostgreSQL"
              title="PostgreSQL"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
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
            Are you an avid cyclist? If so use this social media website where
            bikers share their rides on the platform. Distance and time is
            recorded using the Google Maps API. Users are able to create their
            own posts and comment on others as well. Comments and posts are
            editable and deletable by the own user. Built using PostgreSQL,
            Express, React, and Node.
          </p>
          <Link to={'https://'}>
            <button className="visit">Visit Website</button>
          </Link>
        </div>
      </div>
      <div className="project">
        <div className="project-image-container">
          <img
            className="project-image"
            alt="Project Link"
            title="Check out my project"
            src="https://user-images.githubusercontent.com/122240360/215114718-7693b643-039b-4960-ade1-858d08450458.png"
          />
        </div>
        <div className="project-details">
          <div className="project-icons">
            <img
              className="project-icon"
              alt="HTML"
              title="HTML"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
            />
            <img
              className="project-icon"
              alt="CSS"
              title="CSS"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
            />
            <img
              className="project-icon"
              alt="javascript"
              title="javascript"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
            />
          </div>
          <p className="project-desc">
            A rendition of the classic board game Connect Four with an out of
            this world twist.
          </p>
          <Link to={'https://connect-four-space.surge.sh/'}>
            <button className="visit">Play Game</button>
          </Link>
        </div>
      </div>

      <iframe
        className="form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScDNF6IKR73lyREIbrvbX0V-lXMla3-sln5FIvpuagqGIJJrA/viewform?embedded=true"
        width="100%"
        height="900"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </section>
  )
}

export default Home
