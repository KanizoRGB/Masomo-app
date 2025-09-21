import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
// import Whatsappbutton from '../components/Whatsappbutton'

function Home() {
  return (
    <div >
      <div className="container-xxl hero-header  px-0 mb-0" >
        <style>
          {`
            .hero-header {
              background-image: url('/img/university_background.jpg');
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
            }
          `}
        </style>
        <div className="container w-100 m-0">
          <div className="row g-5 align-items-center " style={{}}>
            <div className="col-lg-6 text-center glossy-box text-lg-start">
              <h1 className="text-white mb-4 animated zoomIn">Turn Your Dream of Studying,into Reality</h1>
              {/* <p className="text-white pb-3 animated zoomIn">Taraji Masomo Care is an innovative education consultancy dedicated to empowering students across the world by providing access to global academic opportunities. </p> */}
              <p className="text-white fs-5 pb-3 animated zoomIn">
                Taraji Masomo Care is an{' '}
                <span
                  style={{
                    color: 'rgb(248, 185, 32)',
                    // textShadow: '0 0 8px rgb(238, 255, 0), 0 0 16px rgb(238, 255, 0), 0 0 24px rgb(238, 255, 0)',
                    fontWeight: 'bold'
                  }}
                >
                  international resource center
                </span>{' '}
                dedicated to empowering students across the world by providing access to global academic opportunities.
              </p>
              <Link to='/about' className="btn btn-outline-light rounded-pill border-2 py-3 px-5 animated slideInRight">Learn More</Link>
            </div>
            <div className="col-lg-6 text-center text-lg-start">
            {/* <img className="img-fluid animated zoomIn" src="img/uni_students2.png" alt /> */}
          </div>
        </div>
        {/* <Whatsappbutton /> */}
      </div>
    </div>

    </div>
  )
}

export default Home