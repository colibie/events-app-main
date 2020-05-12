import React from 'react';
import { Link } from 'react-router-dom';

const noEvent = () => (
  <div style={{textAlign:"center", margin:"10rem"}}>
    {/* // Illustration */}
    <img src="/img/mirage-list-is-empty.png" alt="List is empty illustration from https://icons8.com" width="30%" height="auto"></img>
    <p>Ooops!! Looks like you've not requested an event breakdown</p>
    <Link
      to="/addEvent"
      className="btn-get-started">
        Add a new event
    </Link>
  </div>
);

export default noEvent;