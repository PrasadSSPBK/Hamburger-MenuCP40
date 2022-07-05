import Header from '../Header'
import './index.css'

const About = () => (
  <div className="homeContainer">
    <Header />
    <img
      src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
      alt="about"
      className="sm"
    />
    <img
      src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
      alt="about"
      className="lg"
    />
  </div>
)
export default About
