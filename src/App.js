import React from 'react';
import './App.css';
import profilePhoto from './myphoto.jpg'; // 👈 Make sure your image is in the src folder

function App() {
  const resumeData = {
    name: "Namrutha R",
    email: "namratharavishankar5@gmail.com",
    phone: "9036262629",
    address: "3rd main 3rd cross, Hemavathi Nagar, Hassan, Karnataka",
    education: [
      {
        school: "Vijaya School",
        degree: "BE Computer Science in Malnad College of Engineering",
        year: "2022 - 2026"
      }
    ],
    skills: ["JavaScript", "SQL", "HTML", "Figma"],
    projects: [
      {
        title: "Aadhaar Seeding Portal",
        description: "Linking Aadhaar number to bank account"
      },
      {
        title: "Weather App",
        description: "Displays weather using OpenWeather API"
      }
    ]
  };

  return (
    <div className="App">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />

      <h1>{resumeData.name}</h1>
      <p><strong>Email:</strong> {resumeData.email}</p>
      <p><strong>Phone:</strong> {resumeData.phone}</p>
      <p><strong>Address:</strong> {resumeData.address}</p>

      <h2>Education</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {resumeData.education.map((edu, index) => (
            <tr key={index}>
              <td>{edu.school}</td>
              <td>{edu.degree}</td>
              <td>{edu.year}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Skills</h2>
      <table border="1" cellPadding="10">
        <tbody>
          <tr>
            {resumeData.skills.map((skill, index) => (
              <td key={index}>{skill}</td>
            ))}
          </tr>
        </tbody>
      </table>

      <h2>Projects</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {resumeData.projects.map((project, index) => (
            <tr key={index}>
              <td>{project.title}</td>
              <td>{project.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
