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
    </section>
  )
}
export default Home
