import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Navbar from '../Navbar'

import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  in_progress: 'IN PROGRESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {activeStatus: apiStatus.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatus.in_progress})
    const token = Cookies.get('jwt_token')

    const trendingVideoUrl = 'https://apis.ccbp.in/movies-app/trending-movies'
    const options = {
      header: {
        Authorization: `Bearer ${token} `,
      },
      method: 'GET',
    }
    const trendingVideoResponse = await fetch(trendingVideoUrl, options)
    console.log(trendingVideoResponse)
  }

  renderInProgress = () => (
    <div className="in-progress-container">
      <Loader color="#D81F26" />
    </div>
  )

  renderOnTrendingVideo = () => {
    const {activeStatus} = this.state

    switch (true) {
      case activeStatus === apiStatus.success:
        return this.renderOnSuccessTrendingVideo()
      case activeStatus === apiStatus.failure:
        return this.renderOnFailure()
      case activeStatus === apiStatus.in_progress:
        return this.renderInProgress()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="home-bg-container">
        <div className="header-container">
          <Navbar />
          <div className="home-description-container">
            <h1 className="home-title">Super Man</h1>
            <p className="home-page-description">
              Superman is a fictional superhero who first appeared in American
              comic books published by DC Comics.
            </p>
            <button type="button" className="play-btn">
              Play
            </button>
          </div>
        </div>
        <div className="home-footer-container">
          <h1 className="home-sub-heading">Trending Now</h1>
        </div>
      </div>
    )
  }
}
export default Home
