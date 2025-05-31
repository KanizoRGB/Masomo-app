import React from 'react'


function Adminpanel() {
  return (
    <div>
      <h1 className='text-center mt-5'>Admin Panel</h1>
      <p className='text-center'>This is the admin panel. You can manage your website from here.</p>
      <p className='text-center'>You can view the contact submissions by clicking on the button below.</p>
      <div className='text-center'>
        <button className='btn btn-primary' onClick={() => window.location.href = '/responses'}>View Contact Submissions</button>
        <button className='btn btn-secondary ms-3' onClick={() => window.location.href = '/scholarships'}>View Scholarships</button>
        <button className='btn btn-success ms-3' onClick={() => window.location.href = '/blogs'}>View Blogs</button>
      </div>
      
    </div>
  )
}

export default Adminpanel