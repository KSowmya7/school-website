// Gallery.js
import React from 'react';

const Gallery = () => {
  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    border: '2px solid #dc3545', 
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
    borderRadius: '5px',
  };

  const textStyle = {
    textAlign: 'center',
    padding: '10px 0', 
    color: '#333', 
  };

  return (
    <div className="container py-5">
      <h1 className="text-center text-danger mb-4 pb-4">Gallery</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR97akETnOrpWkggL5frg-jf_cxKEAAjAPA&s"
            alt="Sports Day"
            className="img-fluid"
            style={imageStyle}
          />
          <p style={textStyle}>Students participating in various sports events.</p>
        </div>
        <div className="col-md-4 mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlS3G1hWSlI5jRyoDtCsrdA57I8Hdri5aoC_RxyAbx0DlOdFSDVpY_PAM7bo0tNNyQjkw&usqp=CAU"
            alt="Science Exhibition"
            className="img-fluid"
            style={imageStyle}
          />
          <p style={textStyle}>Students presenting their science projects.</p>
        </div>
        <div className="col-md-4 mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs5I0wmuUpVJeL1AnR5LI5J689CttNj5E8-A&s"
            alt="Cultural Fest"
            className="img-fluid"
            style={imageStyle}
          />
          <p style={textStyle}>Students performing in the cultural fest.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmmNscju85OXU9dAw-tjPjy3J-zmeBiGi5w&s"
            alt="Classroom"
            className="img-fluid"
            style={imageStyle}
          />
          <p style={textStyle}>A glimpse of our interactive classrooms.</p>
        </div>
        <div className="col-md-4 mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs4nnLe4koZuFo4a2J2RAfzxWmzjXhup5Erg&s"
            alt="Library"
            className="img-fluid"
            style={imageStyle}
          />
          <p style={textStyle}>Students reading and studying in the school library.</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
