
import React from 'react'

function Blogs() {
  return (
    <div>
        <div className="container-xxl py-6">
  <div className="container">
    <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
      <div className="d-inline-block border rounded-pill px-4 mt-3 mb-3" style={{color:"rgb(248, 185, 32)"}}>Blogs</div>
      <h2 className="mb-5">Learn more about studying abroad</h2>
    </div>

    <div className='row'>
      <div className="col-lg-4 col-md-6 wow fadeInUp mb-4" data-wow-delay="0.1s">
       <div className="card " style={{width: '18rem'}}>
          <img src="img/study_abroad.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">The Ultimate Guide to Studying Abroad</h5>
            <p className="card-text">Discover everything you need to know about studying abroad, from choosing the right program to navigating cultural differences.</p>
            <a href="#" className="btn btn-primary">Read More...</a>
          </div>
       </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp mb-4" data-wow-delay="0.1s">
       <div className="card " style={{width: '18rem'}}>
          <img src="img/destination.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Top 10 Destinations for International Students</h5>
            <p className="card-text">Explore the top destinations for international students and find out why they are popular choices for studying abroad.</p>
            <a href="#" className="btn btn-primary">Read More...</a>
          </div>
       </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp mb-4" data-wow-delay="0.1s">
       <div className="card " style={{width: '18rem'}}>
          <img src="img/scholarship.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Scholarships and Financial Aid for Studying Abroad</h5>
            <p className="card-text">Learn about the various scholarships and financial aid options available for students looking to study abroad.</p>
            <a href="#" className="btn btn-primary">Read More...</a>
          </div>
       </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp mb-4" data-wow-delay="0.3s">
       <div className="card " style={{width: '18rem'}}>
          <img src="img/culture.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Cultural Differences: What to Expect When Studying Abroad</h5>
            <p className="card-text">Prepare for the cultural differences you may encounter while studying abroad and how to adapt to them.</p>
            <a href="#" className="btn btn-primary">Read More...</a>
          </div>
       </div> 
       </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp mb-4" data-wow-delay="0.3s">
       <div className="card " style={{width: '18rem'}}>
          <img src="img/study_programme.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">How to Choose the Right Study Abroad Program</h5>
            <p className="card-text">Get tips on how to choose the right study abroad program that fits your academic and personal goals.</p>
            <a href="#" className="btn btn-primary">Read More...</a>
          </div>
       </div> 
       </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp mb-4" data-wow-delay="0.3s">
       <div className="card " style={{width: '18rem'}}>
          <img src="img/Friends.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Tips for Making Friends While Studying Abroad</h5>
            <p className="card-text">Discover effective strategies for making friends and building a social network while studying abroad.</p>
            <a href="#" className="btn btn-primary">Read More...</a>
          </div>
       </div> 
       </div>

    </div>

    
    {/* <div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="blog-item rounded overflow-hidden">
            <img className="img-fluid" src="img/blog-1.jpg" alt="" />
            <div className="p-4">
              <h5 className="mb-3">The Ultimate Guide to Studying Abroad</h5>
              <p>Discover everything you need to know about studying abroad, from choosing the right program to navigating cultural differences.</p>
              <a className="text-uppercase" href="">Read More</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="blog-item rounded overflow-hidden">
            <img className="img-fluid" src="img/blog-2.jpg" alt="" />
            <div className="p-4">
              <h5 className="mb-3">Top 10 Destinations for International Students</h5>
              <p>Explore the top destinations for international students and find out why they are popular choices for studying abroad.</p>
              <a className="text-uppercase" href="">Read More</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="blog-item rounded overflow-hidden">
            <img className="img-fluid" src="img/blog-3.jpg" alt="" />
            <div className="p-4">
              <h5 className="mb-3">Scholarships and Financial Aid for Studying Abroad</h5>
              <p>Learn about the various scholarships and financial aid options available for students looking to study abroad.</p>
              <a className="text-uppercase" href="">Read More</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="blog-item rounded overflow-hidden">
            <img className="img-fluid" src="img/blog-4.jpg" alt="" />
            <div className="p-4">
              <h5 className="mb-3">Cultural Differences: What to Expect When Studying Abroad</h5>
              <p>Prepare for the cultural differences you may encounter while studying abroad and how to adapt to them.</p>
              <a className="text-uppercase" href="">Read More</a>
            </div>
          </div>
          </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="blog-item rounded overflow-hidden">
            <img className="img-fluid" src="img/blog-5.jpg" alt="" />
            <div className="p-4">
              <h5 className="mb-3">How to Choose the Right Study Abroad Program</h5>
              <p>Get tips on how to choose the right study abroad program that fits your academic and personal goals.</p>
              <a className="text-uppercase" href="">Read More</a>
            </div>
          </div>
          </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="blog-item rounded overflow-hidden">
            <img className="img-fluid" src="img/blog-6.jpg" alt="" />
            <div className="p-4">
              <h5 className="mb-3">Tips for Making Friends While Studying Abroad</h5>
              <p>Discover effective strategies for making friends and building a social network while studying abroad.</p>
              <a className="text-uppercase" href="">Read More</a>
            </div>
          </div>
          </div>



      </div>
    </div> */}
    {/* AI generated content */}

  </div>
</div>

    </div>
  )
}

export default Blogs