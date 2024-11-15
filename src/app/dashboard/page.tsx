'use client';

import React from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import './page.css'; // Import CSS

const Dashboard = () => {
  const router = useRouter(); // Initialize router

  const handleNavigation = (page: string) => {
    // Navigate to the respective page based on the button clicked
    router.push(`/${page}`);

  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h3>Courses</h3>
        <p>Manage your courses and materials</p>
        <Button
          type="primary"
          className="view-button"
          onClick={() => handleNavigation('courses')} // Navigate to courses page
        >
          View Courses
        </Button>
      </div>
      <div className="dashboard-card">
        <h3>Notifications</h3>
        <p>Check the latest updates and notifications</p>
        <Button
          type="primary"
          className="view-button"
          onClick={() => handleNavigation('notifications')} // Navigate to notifications page
        >
          View Notifications
        </Button>
      </div>
      <div className="dashboard-card">
        <h3>Classroom</h3>
        <p>Join the virtual classroom for live lessons</p>
        <Button
          type="primary"
          className="view-button"
          onClick={() => handleNavigation('classroom')} // Navigate to classroom page
        >
          Join Classroom
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
