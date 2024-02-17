import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Agrihub from "../../Assets/Projects/Agrihub.png";
import attendance from "../../Assets/Projects/attendance.png";
import Cancer from "../../Assets/Projects/Cancer.png";
import Expenses from "../../Assets/Projects/Expenses.png";
import flaskBlog from "../../Assets/Projects/flaskBlog.png";
import jackpot from "../../Assets/Projects/jackpot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Agrihub}
              isBlog={false}
              title="Agrihub"
              description="AgriHub is a web application developed using Flask framework that provides a platform for farmers and buyers to connect with each other. The application allows farmers to add their crops to the platform and buyers can view the crops available for sale in their dashboard after logging in."
              ghLink="https://github.com/Mubashirshariq/AgriHub"
              demoLink="https://smart-attendance-y43y.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendance}
              isBlog={false}
              title="Smart Attendance System"
              description="Smart_Attendance_System is a web application developed using Flask framework that provides a platform for taking attendance in schools offices and colleges.                             
              "
              ghLink="https://github.com/Mubashirshariq/Smart_Attendance_System"
              demoLink="https://smart-attendance-y43y.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cancer}
              isBlog={false}
              title="Histopathologic Cancer Detection"
              description="Developed a CNN algorithm to identify metastatic cancer in small image patches taken from larger digital pathology scans"
              ghLink="https://github.com/Mubashirshariq/Histopathologic_Cancer_detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Expenses}
              isBlog={false}
              title="FinTrack"
              description="FinTrack, your go-to website for effortlessly managing your finances! Whether you're an individual, a small business owner, or a freelancer, we understand the importance of staying on top of your income and expenses."
              ghLink="https://github.com/Mubashirshariq/Backend_FinTrack"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flaskBlog}
              isBlog={false}
              title="Flask Blog"
              description="FLaskBlog is a web application developed using Flask framework that provides a platform for Blogging."
              ghLink="https://github.com/Mubashirshariq/Flask__BLog"
              demoLink="https://flaskblogg-0nd5.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jackpot}
              isBlog={false}
              title="The Jackport Quest"
              description="The Jackport Quest,A Smart Contract which allows users to enter into a real lottery contest where users enter by sending minimum amount of ether .There is a manager which when presses the pickWinner button, winner is picked randomly and all the money of the contract is deposited into the account of the winner."
              ghLink="https://github.com/Mubashirshariq/The-Jackpot-Quest"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
