import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('Message sent!');
      setFormData({ name: '', email: '',subject:'', message: '' });
    } catch (error) {
      alert('Error sending message');
      console.error(error);
    }

  }




  

  return (
    <div>
        {/* Contact Start */}
<div className="container-xxl py-6">
  <div className="container">
    <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
      <div className="d-inline-block border rounded-pill px-4 mt-3 mb-3" style={{color:"rgb(248, 185, 32)"}}>Contact Us</div>
      <h2 className="mb-5">If You Have Any Query, Please Feel Free Contact Us</h2>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.3s">
        {/* <p className="text-center mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating">
                <input 
                type="text" 
                name="name"  
                className="form-control" 
                id="name" 
                value={formData.name} 
                onChange={handleChange}
                placeholder="Your Name" />

                <label htmlFor="name">Your Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input 
                type="email" 
                name='email' 
                className="form-control" 
                id="email" 
                onChange={handleChange}
                value={formData.email} 
                
                placeholder="Your Email" />
                <label htmlFor="email">Your Email</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input 
                type="number" 
                name='phone' 
                className="form-control" 
                id="phone" 
                onChange={handleChange}
                value={formData.phone} 
                
                placeholder="Phone number(include country code)" />
                <label htmlFor="email">Phone Number</label>
              </div>
            </div>
            <div className='col-md-6'>
              <div className="form-floating">
              <select class="form-select text-secondary" aria-label="Default select example">
                <option selected>Appropriate time to reach out</option>
                <option value="1">Morning</option>
                <option value="2">Afternoon</option>
                <option value="3">Evening</option>
              </select>
              </div>
              {/* <div className="form-floating dropdown form-control">
                

              </div> */}
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input 
                type="text"
                name='subject'  
                className="form-control" 
                id="subject" 
                value={formData.subject} 
                onChange={handleChange}
                placeholder="Subject" />
                <label htmlFor="subject">Subject</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <textarea 
                className="form-control" 
                name='message' 
                placeholder="Leave a message here" 
                id="message" 
                value={formData.message}
                onChange={handleChange}
                style={{height: 150}} 
                defaultValue={""} />
                <label htmlFor="message">Message</label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn w-100 py-3" style={{backgroundColor:"rgb(248, 185, 32)"}} type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
{/* Contact End */}

    </div>
  )
}

export default Contact