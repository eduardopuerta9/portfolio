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
    </section>
  )
}
export default Home
