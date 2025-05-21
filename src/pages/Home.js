import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="container-xxl hero-header" style={{backgroundColor: "rgb(56, 77, 125)"}}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="text-white mb-4 animated zoomIn">Turn Your Dream of Studying,into Reality</h1>
              <p className="text-white pb-3 animated zoomIn">Taraji Masomo Care is an innovative education consultancy dedicated to empowering students across Africa by providing access to global academic opportunities. </p>
              <Link to='/about' className="btn btn-outline-light rounded-pill border-2 py-3 px-5 animated slideInRight">Learn More</Link>
            </div>
            <div className="col-lg-6 text-center text-lg-start">
            {/* <img className="img-fluid animated zoomIn" src="img/hero.png" alt /> */}
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Home