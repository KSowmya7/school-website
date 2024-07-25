import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
          
const AboutUs = () => {
  return (
    <section id='about' className="container py-5" >
      <container fluid>
      <div className="title-holder text-center  ">
          <h1 className='text-danger'>About Us</h1>
          <div className="subtitle">Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</div>
        </div>

        <div className='mt-4'>
          <h3 className='text-danger'>Vision</h3>
          <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
        </div>

        <div>
          <h3 className='text-danger'>Mission</h3>
          <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
        </div>

        <div>
          <h3 className='text-danger'>Principal's Message</h3>
          <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
        </div>

        <div>
          <h3 className='text-danger'>Infrastructure and Facilities</h3>
          <ul>
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>Library with a vast collection of books and digital resources</li>
            <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
        </ul>
      </div>
      </container>
    </section>
   
  );
};

export default AboutUs;
