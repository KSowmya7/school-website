import React from 'react';

const Admissions = () => {
  return (
<div 
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/1764436/pexels-photo-1764436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        padding: '50px 0',
      }}
    >
      <div className="container " >
      <h1 className='text-center pb-5'>Admissions</h1>
      <h2>Process</h2>
      <p style={{color:'gray'}}>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
      <h2>Criteria</h2>
      <p style={{color:'gray'}}>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      <h2>Important Dates</h2>
      <ul style={{color:'gray'}}>
        <li>Admission Form Availability: March 1st</li>
        <li>Last Date for Submission: March 31st</li>
        <li>Entrance Test: April 15th</li>
        <li>Announcement of Results: April 30th</li>
      </ul>

      </div>
      
      </div>
  );
};

export default Admissions;
