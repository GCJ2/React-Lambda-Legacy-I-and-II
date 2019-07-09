import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className="card-content-div">
      <h1>
        Get started with React
      </h1>
      <p>
        React makes it painless to make interactive UI's. Design simple views
        for each state in your application.
      </p>
      <a className="react-link"
        href="https://reactjs.org" target="_blank">
        reactjs.org
      </a>
    </div>

  );
};

export default CardContent;
