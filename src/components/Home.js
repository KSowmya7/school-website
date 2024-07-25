import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const slideData = [
  {
    id: 1,
    image: 'https://media.istockphoto.com/id/1148219796/photo/teachers-applauding-for-student-at-awards-ceremony.jpg?s=1024x1024&w=is&k=20&c=zsZMZiCtIps440xF97eouEwPhnc63rinjNfKzYDcM3U=',
    title: 'Annual Sports Day',
    description: 'Celebrating in Sports',
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEWCvfUV70RezeMh3x0BIVyUU184lzkqF2Jw&s'
  },
  {
    id: 2,
    image: 'https://media.istockphoto.com/id/1901753664/photo/secondary-or-high-school-students-studying-wind-turbines-in-science-class-with-teacher.jpg?s=612x612&w=0&k=20&c=EBuxZLfFWusXW5Km01cY1CrgBA_JqL32NfbbaSqsx5s=',
    title: 'Science Exhibition',
    description: 'Showcasing Student Innovations',
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEWCvfUV70RezeMh3x0BIVyUU184lzkqF2Jw&s'
  },
  {
    id: 3,
    image: 'https://media.istockphoto.com/id/512399072/photo/girl-child-dancers-perforimg-at-holi-festival-in-kolkata.jpg?s=612x612&w=0&k=20&c=kq9tE-HsiM4YZZXVzfj-H_R2Gn4Sy3OcWDaY3snrADI=',
    title: 'Cultural Fest',
    description: 'Embracing Diversity and Creativity',
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEWCvfUV70RezeMh3x0BIVyUU184lzkqF2Jw&s'
  }
];

const Home = () => {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {slideData.map((hero) => (
          <Carousel.Item key={hero.id}>
            <img
              className="d-block w-100"
              src={hero.image}
              alt={"slide " + hero.id}
              style={{ maxHeight: '600px', objectFit: 'fit' }} n
            />
            <Carousel.Caption style={{ color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{hero.title}</h2>
              <p style={{ fontSize: '1.25rem' }}>{hero.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Home;
