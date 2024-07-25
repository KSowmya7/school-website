import React from 'react';

const Academics = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg?auto=compress&cs=tinysrgb&w=600")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        padding: '50px 0',
      }}
    >
      <div className="container text-white " >
        <h1 className='text-center pb-5'>Academics</h1>
        <h2 className='text-bold' style={{color: 'pink'}}>Curriculum</h2>
        <p>We offer a comprehensive curriculum for primary, secondary, and senior secondary levels.</p>
        <ul>
          <li>
          <h4 className='text-bold' >Primary (Grades 1-5)</h4>
          <p>English, Mathematics, Science, Social Studies, Art, Physical Education</p>
          </li>
          <li>
            <h4>Secondary (Grades 6-10)</h4>
            <p>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
          </li>
          <li>
            <h4>Senior Secondary (Grades 11-12)</h4>
            <ul>
              <li>
                <p> <strong >Science Stream: </strong>Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
              </li>
              <li>
                <p><strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English</p>
              </li>
            </ul>
            
          </li>
        </ul>

        <h2 style={{color: 'pink'}}>Teaching Methodologies</h2>
        <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
        <h2 style={{color: 'pink'}}>Educational Resources</h2>
        <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
      </div>
    </div>
  );
};

export default Academics;
