import React from 'react'
import {Link}from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function About() {


  const [email, setEmail] = useState('');
  
    const handleChange = (e) => {
      setEmail(e.target.value);
    }
  
  
    const handleClick = async(e)=>{
      e.preventDefault();
      try{
        const response = axios.post('http://localhost:5000/api/emails',{email});
  
        //Only alert if backedn response is successful
        // if(response.status === 200 && response.data.message){
        //   alert(response.data.message);
        //   setEmail('');
        // }else{
        //   alert("Failed to subscribe. Please try again.");
        // }
        alert("Thank you for subscribing to our newsletter!");
        setEmail('');
  
      }catch(error){
        console.error("Error capturing email:", error);
        alert("Error saving your emai. Please try again later.")
      }
    
  }
  return (
    <div>
        {/* About Start */}
          <div className="container-xxl py-6 ">
            <div className="container">
              <div className="d-inline-block border rounded-pill px-4 mt-4 mb-3" style={{color:"rgb(248, 185, 32)"}}>About Us</div>
              <h1 
                className="fw-bold mb-4 text-gradient"
                style={{
                  fontSize: "2.8rem",
                  background: "linear-gradient(90deg, rgb(56,77,125) 0%, rgb(248,185,32) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "1px",
                  lineHeight: "1.2"
                }}
              >
                Transforming Education and Promoting Global Opportunities
              </h1>
              <p className="mb-4 text-dark" style={{ fontSize: "1.15rem", lineHeight: "1.7" }}>
                <strong>Taraji MasomoCare</strong> began operations in 2025 in Nairobi, Kenya, and is centralized in Idaho, United States, has grown significantly. With a focus on leveraging technology to reach African markets, it stands as the largest education platform globally, with plans to expand and open offices across African countries.
              </p>
              <p className="mb-4 text-dark" style={{ fontSize: "1.15rem", lineHeight: "1.7" }}>
                The organization plays a pivotal role in exposing African students to global academic opportunities, fostering cultural exchange, language immersion, and interactions with diverse communities worldwide. With the introduction of Language Labs among its services, Taraji MasomoCare teaches local language dialects internationally, leading to increased self-awareness, improved critical thinking, and enhanced work opportunities—contributing to easier access to global opportunities.
              </p>
              <p className="mb-4 text-dark" style={{ fontSize: "1.15rem", lineHeight: "1.7" }}>
                Globally, Taraji MasomoCare partners with over <strong>500 universities</strong> in countries such as the UK, USA, Canada, and many others to enable Africans to access international education and scholarship opportunities.
              </p>
              <p className="mb-4 text-dark" style={{ fontSize: "1.15rem", lineHeight: "1.7" }}>
                Recently, the organization launched a transformational social impact initiative under <strong>Taraji Foundation</strong> in partnership with additional stakeholders, reaffirming their commitment to using sports as a tool to promote diversity, inclusion, and opportunities for school children and young people in Kenya and other parts of rural Africa. During the launch, the founders emphasized the importance of these social impact partnerships in transforming learners both locally and internationally, highlighting the interconnectedness of our globalized world.
              </p>

              <div className="row g-5 ">
                
                <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                  <img className="img-fluid mb-3 rounded-3 " style={{"height":"600px"}} src="img/abroad_uni.jpg" />
                  
                </div>
                <div className="col-lg-6 wow fadeInUp " data-wow-delay="0.1s">
                  <h2 className="mb-4">Global Academic Opportunities</h2>
                  <p className="mb-4 text-dark">Our mission is to transform dreams of international education into reality through personalized counseling, comprehensive admissions support, and strategic partnerships with reputable educational institutions worldwide.</p>
                  <p className="mb-4 text-dark">We specialize in study abroad programs, scholarship application assistance, visa processing, internship placements, and pre-departure orientations, aiming to nurture future leaders, professionals, and change-makers in various fields.</p>
                  
                  <div className="row g-3 mb-4">
                    <div className="col-12 d-flex">
                      {/* <div className="flex-shrink-0 btn-lg-square rounded-circle" style={{backgroundColor: "rgb(56, 77, 125)"}}>
                        
                      </div> */}
              <div className="ms-4">
                <i className="bi bi-eye-fill text-primary" style={{fontSize:"40px"}} />
                <h6>Vision</h6>
                <span>To create a better world by embracing change and transforming the African education landscape </span>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
              {/* <div className="flex-shrink-0 btn-lg-square rounded-circle " style={{backgroundColor: "rgb(56, 77, 125)"}}>
                
              </div> */}
              <div className="ms-4">
                <i className="bi bi-pin-angle-fill text-primary" style={{fontSize:"40px"}}/>
                <h6>Motto </h6>
                <span>Unlocking potential through access</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
                <Link to="/services" className="btn btn-primary rounded-pill py-3 px-5 mt-2" href style={{backgroundColor:"rgb(56, 77, 125)"}}>Read More</Link>

    </div>
  </div>
  {/* About End */}

  {/* Newsletter Start */}
<div className="container-xxl my-0 wow fadeInUp" data-wow-delay="0.1s" style={{backgroundColor: "rgb(56, 77, 125)"}}>
  <div className="container px-lg-5">
    <div className="row align-items-center" style={{height: 250}}>
      <div className="col-12 col-md-6">
        <h3 className="text-white">Ready to get started</h3>
        <small className="text-white">Subscribe to our email to get updates on the latest opportunites available </small>
        <div className="position-relative w-100 mt-3">
          <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" onChange={handleChange} value={email} type="text" placeholder="Enter Your Email" style={{height: 48}} />
          <button type="button" onClick={handleClick} className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane fs-4 " style={{color: "rgb(56, 77, 125)"}} /></button>
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