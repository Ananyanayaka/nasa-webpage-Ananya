import React, { useState } from 'react';

function SectionTwo() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="section-two">
      <h3>APIs</h3>
      <button onClick={toggleDropdown}>
        {isOpen ? 'Hide APIs' : 'Show APIs'}
      </button>
      {isOpen && (
        <div className="dropdown">
          <ul>
            <li><a href="https://nasa-frontend-apod.vercel.app/">APOD</a></li>
            <li><a href="https://vercelananyanasa.vercel.app/">NASA Image & Video Library</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SectionTwo;
