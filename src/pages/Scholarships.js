import React from 'react'

function Scholarships() {
  return (
    <div>
        
        <div className="container-xxl py-6">
          <div className="container">
            <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
              <div className="d-inline-block border rounded-pill px-4 mt-3 mb-3" style={{color:"rgb(248, 185, 32)"}}>Scholarships</div>
              <h2 className="mb-5">Available Scholarships</h2>
            </div>
            <div className='d-flex flex-row form-control justify-content-around align-items-center mt-3 mb-3'>
            <div style={{width:"30%"}}>
                <input type="text" className='form-control' placeholder='Enter country' />
            </div>
            <div style={{width:"30%"}}>
                <select class="form-select text-secondary" aria-label="Default select example">
                <option selected>Level</option>
                <option value="1">Diploma</option>
                <option value="2">Undergraduate</option>
                <option value="3">Post graduate</option>
              </select>
            </div >
            <div style={{width:"30%"}} className='d-flex flex-row justify-content-between align-items-center'>
                <input type="text" className='form-control' placeholder='Enter course title' />
                <button className='btn btn-primary'>Search</button>
            </div>

            </div>
            <div className="row justify-content-center">
              <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.3s">
                {/* Add your scholarship content here */}
                <p>List of scholarships will be displayed here.</p>
              </div>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Scholarships