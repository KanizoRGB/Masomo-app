import React from 'react'

function About() {
  return (
    <div>
        {/* About Start */}
  <div className="container-xxl py-6 ">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
          <img className="img-fluid" src="img/abroad_uni.jpg" />
        </div>
        <div className="col-lg-6 wow fadeInUp " data-wow-delay="0.1s">
          <div className="d-inline-block border rounded-pill px-4 mt-4 mb-3" style={{color:"rgb(248, 185, 32)"}}>About Us</div>
          <h2 className="mb-4">Scholarships to fund your dreams</h2>
          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod</p>
          <div className="row g-3 mb-4">
            <div className="col-12 d-flex">
              <div className="flex-shrink-0 btn-lg-square rounded-circle" style={{backgroundColor: "rgb(56, 77, 125)"}}>
                <i className="fa fa-user-tie text-white" />
              </div>
              <div className="ms-4">
                <h6>Statement of Purpose(SOP)</h6>
                <span>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</span>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="flex-shrink-0 btn-lg-square rounded-circle " style={{backgroundColor: "rgb(56, 77, 125)"}}>
                <i className="fa fa-chart-line text-white" />
              </div>
              <div className="ms-4">
                <h6>Essay Review</h6>
                <span>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</span>
              </div>
            </div>
          </div>
          <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href style={{backgroundColor:"rgb(56, 77, 125)"}}>Read More</a>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}

  {/* Newsletter Start */}
<div className="container-xxl my-6 wow fadeInUp" data-wow-delay="0.1s" style={{backgroundColor: "rgb(56, 77, 125)"}}>
  <div className="container px-lg-5">
    <div className="row align-items-center" style={{height: 250}}>
      <div className="col-12 col-md-6">
        <h3 className="text-white">Ready to get started</h3>
        <small className="text-white">Diam elitr est dolore at sanctus nonumy.</small>
        <div className="position-relative w-100 mt-3">
          <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{height: 48}} />
          <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane fs-4 " style={{color: "rgb(56, 77, 125)"}} /></button>
        </div>
      </div>
      <div className="col-md-6 text-center mb-n5 d-none d-md-block">
        <img className="img-fluid mt-5" style={{maxHeight: 250}} src="img/newsletter.png" />
      </div>
    </div>
  </div>
</div>
{/* Newsletter End */}

    </div>
  )
}

export default About