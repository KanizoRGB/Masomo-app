import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Whatsappbutton from './Whatsappbutton';
import axios from 'axios';



function Footer() {

  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  }


  const handleClick = async(e)=>{
    e.preventDefault();
    try{
      axios.post('http://localhost:5000/api/emails',{email});

      //Only allert if backedn response is successful
      // if(response.status === 200){
      //   alert("Thank you for subscribing to our newsletter!");
      //   setEmail('');
      // }
      alert("Thank you for subscribing to our newsletter!");
      setEmail('');

    }catch(error){
      console.error("Error capturing email:", error);
    }
  
}

  return (
    <div>
        {/* Footer Start */}
        <Whatsappbutton />
<div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{marginTop: '6rem'}}>
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-md-6 col-lg-3">
        <h5 className="text-white mb-4">Get In Touch</h5>
        <p><i className="fa fa-map-marker-alt me-3" />Nairobi, Kenya</p>
        <p><i className="fa fa-phone-alt me-3" />+254 101722019</p>
        <p><i className="fa fa-map-marker-alt me-3" />Idaho, United States</p>
        <p><i className="fa fa-phone-alt me-3" />+1   2083535347</p>
        <p><i className="fa fa-envelope me-3" />info@tarajimasomo.co.ke</p>
        <div className="d-flex pt-2">
          <a className="btn btn-outline-light btn-social" href="https://x.com/masomocare"><i className="fab fa-twitter" /></a>
          <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/profile.php?id=61577952435753&mibextid=rS40aB7S9Ucbxw6v"><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-outline-light btn-social" href="https://youtube.com/@tarajimasomocare?si=RfVozBxGVV-2Vk9-"><i className="fab fa-youtube" /></a>
          <a className="btn btn-outline-light btn-social" href="https://www.tiktok.com/@masomocare"><i className="fa-brands fa-tiktok" /></a>
          <a className="btn btn-outline-light btn-social" href="https://instagram.com/tarajimasomo"><i className="fab fa-instagram" /></a>
          <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/in/masomo-care-13b936384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <h5 className="text-white mb-4">Quick Link</h5>
        <Link to="/about" className="btn btn-link" >About Us</Link>
        <Link to="/contact" className="btn btn-link" >Contact Us</Link>
        <Link className="btn btn-link" >Privacy Policy</Link>
        <Link  className="btn btn-link" >Terms &amp; Condition</Link>
        <Link to="/careers" className="btn btn-link" >Career</Link>
      </div>
      <div className="col-md-6 col-lg-3">
        <h5 className="text-white mb-4">Popular Link</h5>
        <Link to="/about" className="btn btn-link" >About Us</Link>
        <Link to="/contact" className="btn btn-link" >Contact Us</Link>
        <Link className="btn btn-link" >Privacy Policy</Link>
        <Link  className="btn btn-link" >Terms &amp; Condition</Link>
        <Link to="/careers" className="btn btn-link" >Career</Link>
      </div>
      <div className="col-md-6 col-lg-3">
        <h5 className="text-white mb-4">Newsletter</h5>
        <p>Enter your email to subscribe to our newsletter and get the latest updates</p>
        <div className="position-relative w-100 mt-3">
          <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" onChange={handleChange} value={email} placeholder="Your Email" style={{height: 48}} />
          <button type="button" onClick={handleClick} className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane fs-4" style={{color:"rgb(248, 185, 32)"}} /></button>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="copyright">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          © <a className="border-bottom" href="#">Taraji Masomo</a>, All Right Reserved. 
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          Designed By <a className="border-bottom" href="https://htmlcodex.com">NizoTel</a>
          {/* <br />Distributed By: <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a> */}
        </div>
        <div className="col-md-6 text-center text-md-end">
          <div className="footer-menu">
            <a href>Home</a>
            <a href>Cookies</a>
            <a href>Help</a>
            <a href>FAQs</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Footer End */}

    </div>
  )
}

export default Footer