// src/Statistics.js
import React from 'react';
import './Statistics.css'; 

const Statistics = () => {
  return (
    <div className="statistics-container">
      <h2>Foydalanuvchilar statistikasi</h2>
      <div className="stats">
        <div className="stat-item">
          <h3>O'qituvchilar</h3>
          <p>50</p> {/* Replace with dynamic data if needed */}
        </div>
        <div className="stat-item">
          <h3>O'quvchilar</h3>
          <p>200</p> {/* Replace with dynamic data if needed */}
        </div>
        <div className="stat-item">
          <h3>O'quv Markazlar</h3>
          <p>10</p> {/* Replace with dynamic data if needed */}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
