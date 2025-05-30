import { Container, Row, Col, Tab, Nav, Modal} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import AWScerti from "../assets/img/AWScerti.png";
import Jenkins from "../assets/img/Jenkins.jpg";
import Jp from "../assets/img/Jp.jpg";
import javaC from "../assets/img/javaC.jpg";
import wal from "../assets/img/wal.jpg";
import download from "../assets/img/download.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { useState } from "react";

export const Certificates = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const projects = [
    {
      title: "AWS Cloud Practitioner Essentials",
      description: "AWS Training and Certification",
      imgUrl: AWScerti,
    },
    {
      title: "AWS Devops with Jenkins",
      description: "Alison",
      imgUrl: Jenkins,
    },
    {
      title: "Certified Software Engineer",
      description: "HackerRank",
      imgUrl: download,
    },
    {
      title: "Software Engineering Job Simulation",
      description: "JP Morgan - Forage",
      imgUrl: Jp,
    },
    {
      title: "Advanced Software Engineering",
      description: "Walmart - Forage",
      imgUrl: wal,
    },
    {
      title: "Java Programming",
      description: "Vityarthi",
      imgUrl: javaC,
    },
  ];

  const handleImageClick = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const imageUrls = projects.map(project => project.imgUrl);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Certificates</h2>
                <p>Click on any certificate to view it in full screen.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="g-4">
                        {projects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                            onClick={() => handleImageClick(project)}
                            imgStyle={{ 
                              width: '100%', 
                              height: '200px', 
                              objectFit: 'cover',
                              cursor: 'pointer'
                            }}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>

      {/* Certificate Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedCert?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={selectedCert?.imgUrl}
            alt={selectedCert?.title}
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
          <p className="mt-3">{selectedCert?.description}</p>
        </Modal.Body>
      </Modal>

    </section>
  )
}
