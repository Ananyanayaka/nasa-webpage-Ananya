import React from 'react';
import './App.css';
import { FaHome, FaRocket } from 'react-icons/fa'; // For the navigation icons
import SectionOne from './components/SectionOne'; // Overview Section
import SectionTwo from './components/SectionTwo'; // API Section

function App() {
  return (
    <div className="App">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>NASA Webpage</h2>
          <p>Explore NASA's data and API's</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#overview">
                <FaHome /> Overview
              </a>
            </li>
            <li>
              <a href="#api-dropdowns">
                <FaRocket /> APIs
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <section id="overview">
          <SectionOne />
        </section>

        <section id="api-dropdowns">
          <SectionTwo />
        </section>
      </div>
    </div>
  );
}

export default App;
