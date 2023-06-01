import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <>
    <div className="fullScreenViewContainer">
      <h1 className="notFoundFullScreenTitle">Lost Your Way</h1>
      <p className="notFoundFullScreenDesc">
        we are sorry, the page you requested could not be found Please go back
        to the homepage.
      </p>
      <Link to="/">
        <button type="button" className="notFoundFullScreenButton">
          Go to Home
        </button>
      </Link>
    </div>
  </>
)
export default NotFound
