import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="homeContainer">
    <Header />
    <img
      src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
      alt="home"
      className="sm"
    />
    <img
      src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
      alt="home"
      className="lg"
    />
  </div>
)
export default Home
