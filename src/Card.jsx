import React from 'react';

function Card({ logo, title, color, link, text }) {
  const cardStyle = {
    backgroundColor: color,
    padding: '8px',
    borderRadius: '8px',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'League Spartan, sans-serif',
    margin: '1px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    width: '60px',
    textDecoration: 'none',
    minWidth: 'fit-content',
    minHeight: 'fit-content',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const imageStyle = {
    width: '30px',
    height: 'auto',
    marginBottom: '2px',
  };

  const titleStyle = {
    fontSize: '1rem',
    margin: '0',
  };

  const textStyle = {
    fontSize: '.75rem',
    color: '#dcdcdc',
    margin: '2px 0 0 0',
  };

  const cardContent = (
    <div style={cardStyle} className="card">
      <img src={logo} alt={`${title} logo`} style={imageStyle} />
      <h2 style={titleStyle}>{title}</h2>
      {text && <p style={textStyle}>{text}</p>}
    </div>
  );

  return link ? (
    <a href={link} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" className="card-link">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
}

export default Card;
