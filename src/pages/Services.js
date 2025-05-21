// import { Carousel } from 'bootstrap';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Services() {
  return (
    <div>

        {/* Service Start */}
  <div className="container-xxl py-6">
    <div className="container">
      <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <div className="d-inline-block border rounded-pill px-4 mt-3 mb-3" style={{color:"rgb(248, 185, 32)"}}>Our Services</div>
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

   {/* Testimonial Start */}

     

    
  
<div className="container-xxl py-6">
  <div className="container">
    <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
      <div className="d-inline-block border rounded-pill px-4 mb-3" style={{color:"rgb(248, 185, 32)"}}>Testimonial</div>
      <h2 className="mb-5">What Our Clients Say!</h2>
    </div>
    <div id="carouselExampleInterval" className="carousel slide p-5" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval={5000}>
          <div className='d-flex justify-content-center'>
            <img src="img/testimonial-1.jpg" className="rounded-circle" alt="..." />
            <h1 className='pt-4 mb-0'> Myra Smith</h1>
          </div>
          <h2>Occupation Therapist 1</h2>
          <p>Taraji Masomo Care provided me with exceptional support throughout my study abroad journey. Their team was knowledgeable, responsive, and genuinely cared about my success. I couldn't have done it without them!</p>
        </div>
        <div className="carousel-item " data-bs-interval={5000}>
          <div className='d-flex justify-content-center'>
            <img src="img/testimonial-2.jpg" className="rounded-circle" alt="..." />
            <h1 className='pt-4 mb-0'> Myra Smith</h1>
          </div>
          <h2>Occupation Therapist 2</h2>
          <p>Taraji Masomo Care provided me with exceptional support throughout my study abroad journey. Their team was knowledgeable, responsive, and genuinely cared about my success. I couldn't have done it without them!</p>
        </div>
        <div className="carousel-item " data-bs-interval={5000}>
          <div className='d-flex justify-content-center'>
            <img src="img/testimonial-3.jpg" className="rounded-circle" alt="..." />
            <h1 className='pt-4 mb-0'> Myra Smith</h1>
          </div>
          <h2>Occupation Therapist 3</h2>
          <p>Taraji Masomo Care provided me with exceptional support throughout my study abroad journey. Their team was knowledgeable, responsive, and genuinely cared about my success. I couldn't have done it without them!</p>
        </div>
       
      </div>
      <button className="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon text-primary" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next text-dark" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon text-primary" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    {/* <div className=" testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
      <div className="testimonial-item rounded p-4">
        <i className="fa fa-quote-left fa-2x text-primary mb-3" />
        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
        <div className="d-flex align-items-center">
          <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" />
          <div className="ps-3">
            <h6 className="mb-1">Client Name</h6>
            <small>Profession</small>
          </div>
        </div>
      </div>
      <div className="testimonial-item rounded p-4">
        <i className="fa fa-quote-left fa-2x text-primary mb-3" />
        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
        <div className="d-flex align-items-center">
          <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" />
          <div className="ps-3">
            <h6 className="mb-1">Client Name</h6>
            <small>Profession</small>
          </div>
        </div>
      </div>
      <div className="testimonial-item rounded p-4">
        <i className="fa fa-quote-left fa-2x text-primary mb-3" />
        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
        <div className="d-flex align-items-center">
          <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" />
          <div className="ps-3">
            <h6 className="mb-1">Client Name</h6>
            <small>Profession</small>
          </div>
        </div>
      </div>
      <div className="testimonial-item rounded p-4">
        <i className="fa fa-quote-left fa-2x text-primary mb-3" />
        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
        <div className="d-flex align-items-center">
          <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" />
          <div className="ps-3">
            <h6 className="mb-1">Client Name</h6>
            <small>Profession</small>
          </div>
        </div>
      </div>
    </div> */}
  </div>
</div>
{/* Testimonial End */}


    </div>
  )
}

export default Services