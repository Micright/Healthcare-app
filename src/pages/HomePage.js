import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Healthcare App</h1>
      <p>This is the homepage of the healthcare application where you can manage patients and appointments.</p>
      <nav>
        <ul>
          <li>
            <Link to="/patients">Patients</Link>
          </li>
          <li>
            <Link to="/appointments">Appointments</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
