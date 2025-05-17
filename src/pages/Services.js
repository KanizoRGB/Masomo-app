import React from 'react'

function Services() {
  return (
    <div>

        {/* Service Start */}
  <div className="container-xxl py-6">
    <div className="container">
      <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <div className="d-inline-block border rounded-pill px-4 mt-3 mb-3" style={{color:"rgb(56, 77, 125)"}}>Our Services</div>
        <h2 className="mb-5">We Sort Your Academic needs</h2>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item rounded h-100">
            <div className="d-flex justify-content-between">
              <div className="service-icon">
                <i className="fa fa-user-tie fa-2x" />
              </div>
              <a className="service-btn" href>
                <i className="fa fa-link fa-2x" />
              </a>
            </div>
            <div className="p-5">
              <h5 className="mb-3">Application assistance</h5>
              <span>Support in filling out university applications, compiling required documents, and meeting deadlin</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item rounded h-100">
            <div className="d-flex justify-content-between">
              <div className="service-icon">
                <i className="fa fa-chart-pie fa-2x" />
              </div>
              <a className="service-btn" href>
                <i className="fa fa-link fa-2x" />
              </a>
            </div>
            <div className="p-5">
              <h5 className="mb-3">Accomodation Support</h5>
              <span>Help students find and book student housing or hostels in their destination country.</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
          <div className="service-item rounded h-100">
            <div className="d-flex justify-content-between">
              <div className="service-icon">
                <i className="fa fa-chart-line fa-2x" />
              </div>
              <a className="service-btn" href>
                <i className="fa fa-link fa-2x" />
              </a>
            </div>
            <div className="p-5">
              <h5 className="mb-3">Language Test Preparation</h5>
              <span>Coaching or resources for IELTS, TOEFL, PTE, or other language proficiency tests required by universities.</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item rounded h-100">
            <div className="d-flex justify-content-between">
              <div className="service-icon">
                <i className="fa fa-chart-area fa-2x" />
              </div>
              <a className="service-btn" href>
                <i className="fa fa-link fa-2x" />
              </a>
            </div>
            <div className="p-5">
              <h5 className="mb-3">University & Course Selection Guidance</h5>
              <span>Help students choose the right university and course based on their academic background, interests, and career goals.</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item rounded h-100">
            <div className="d-flex justify-content-between">
              <div className="service-icon">
                <i className="fa fa-balance-scale fa-2x" />
              </div>
              <a className="service-btn" href>
                <i className="fa fa-link fa-2x" />
              </a>
            </div>
            <div className="p-5">
              <h5 className="mb-3">Visa Counseling</h5>
              <span>Step-by-step guidance for student visa applications including document checklists, interview preparation, and submission help.</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
          <div className="service-item rounded h-100">
            <div className="d-flex justify-content-between">
              <div className="service-icon">
                <i className="fa fa-house-damage fa-2x" />
              </div>
              <a className="service-btn" href>
                <i className="fa fa-link fa-2x" />
              </a>
            </div>
            <div className="p-5">
              <h5 className="mb-3">Scholarship & Funding Advice</h5>
              <span>Assist students in identifying and applying for scholarships, grants, and other funding opportunities.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}

    </div>
  )
}

export default Services