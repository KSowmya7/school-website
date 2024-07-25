// Faculty.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Faculty = () => {
  return (
    <section id='faculty'> 
      <h1 className='text-center pt-5 pb-5 text-danger font-weight-bold'>Faculty</h1>

      <div className='container d-flex gap-5 flex-wrap align-content-center '>

      <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug=" />
      <Card.Body>
        <Card.Title>John Doe</Card.Title>
        <Card.Text>
        Principal, M.Ed, 20 years of experience in educational administration. 
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=" />
      <Card.Body>
        <Card.Title>Jane Smith</Card.Title>
        <Card.Text>
        Vice Principal, M.Sc. in Physics, 15 years of teaching experience.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src="https://media.istockphoto.com/id/544979402/photo/portrait-of-a-serious-young-man.jpg?s=612x612&w=0&k=20&c=0GrHQ9mIMA1QcVj3Jehxf52nPN6dH9XeCHxGTZcoVhU=" />
      <Card.Body>
        <Card.Title>Emily Johnson</Card.Title>
        <Card.Text>
          English Teacher, M.A. in English, 10 years of teaching experience.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1501770003/photo/happy-handsome-young-indian-man-head-shot-front-portrait.jpg?s=612x612&w=0&k=20&c=P2toTbaknymA7vf28IQNa-3xrlUjPXLFqvN2Zra8_nw=" />
      <Card.Body>
        <Card.Title>Michael Brown</Card.Title>
        <Card.Text>
          Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1307791650/photo/headshot-portrait-of-smiling-caucasian-businessman-pose-at-workplace.jpg?s=612x612&w=0&k=20&c=Guj8f7rGyX4tsSszs3qR_NCYDOOvypB6T3eSPEB9GOQ=" />
      <Card.Body>
        <Card.Title>Sophia Davis</Card.Title>
        <Card.Text>
          Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug=" />
      <Card.Body>
        <Card.Title>David Wilson</Card.Title>
        <Card.Text>
          Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  </section>
  );
};

export default Faculty;
