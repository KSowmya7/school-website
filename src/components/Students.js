import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

const Students = () => {
  return (
    <section>
      <div className="container py-5">
        <h1 className='text-center text-danger mb-4'>Students</h1>
        <h2 className='mb-4 text-primary'>Life at Springdale</h2>
        <ul>
          <li>
            <strong>Extracurricular Activities:  </strong>
            Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
          </li>
          <li>
            <strong>Clubs and Societies:  </strong>Literary Society, Environmental Club, Astronomy Club, Coding Club
          </li>
        </ul>

        <h2 className='pb-2 text-primary mt-4 '>Achievements</h2>

      <div className='container d-flex gap-4  align-content-center'>
        <div>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPMFX1lIPAP9c3F-tngZ6B8dZfmDXwKuoaxQ&s' width={350}  height={350}  rounded/>
        <div className='text-center'><strong>John Smith </strong>
        <p>National Level Math Olympiad Winner</p> 
        </div>
        </div>
        <div>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPMFX1lIPAP9c3F-tngZ6B8dZfmDXwKuoaxQ&s' width={350} height={350}  rounded/>
        <div className='text-center'><strong>Sarah Lee</strong>
        <p>Gold Medalist in State Swimming Championship</p> 
        </div>
        </div>
        <div>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWDofarg-jVLmtzeaTJIK_Gw8q9pFnY8mGQ&s' width={350}  height={350} rounded/>
        <div className='text-center'><strong>Tech Innovators Club </strong>
        <p>Winners of Inter-School Robotics Competition</p> 
        </div>
        </div>
      </div>


      <h2 className='text-primary mt-4 '>Student Council</h2>
      <div className='container d-flex gap-5 px-4  py-4 align-content-center'>
      
        <div  className=' d-flex flex-column align-content-center'>
          <div>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPR5BbOTFf7BApjEm4XhLI5p5BPwlJYavvQ&s' width={250}/>
          </div>
          <div >
            <strong className='m-4 p-4'>President </strong>
            <p className='px-4'>Amy Parker, Grade 12</p> 
          </div>
        </div>

        <div  className=' d-flex flex-column align-content-center'>
          <div>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPR5BbOTFf7BApjEm4XhLI5p5BPwlJYavvQ&s' width={250}/>
          </div>
          <div >
            <strong className='m-4 p-4'>Vice President </strong>
            <p className='px-4'>Rajiv Mehta, Grade 11</p> 
          </div>
        </div>

        <div  className=' d-flex flex-column align-content-center'>
          <div>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPR5BbOTFf7BApjEm4XhLI5p5BPwlJYavvQ&s' width={250}/>
          </div>
          <div >
            <strong className='m-4 p-4'>Secretary</strong>
            <p className='px-4' >Lisa Wong, Grade 10</p> 
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Students;
