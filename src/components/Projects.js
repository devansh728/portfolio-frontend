import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import url from "../assets/img/url.png";
import videoscalable from "../assets/img/videosacalable.png";
import locator from "../assets/img/locator.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Linkly",
      description: "Url Shortener Web App",
      imgUrl: url,
      projectUrl : "https://github.com/devansh728/tiniUrl.git",
    },
    {
      title: "Streamlio",
      description: "Scalable Video Streaming Platform",
      imgUrl: videoscalable,
      projectUrl : "https://github.com/devansh728/Streamlio.git",
    },
    {
      title: "DevMate",
      description: "Real-Time Developer Proximity & Collaboration Platform",
      imgUrl: locator,
      projectUrl : "https://github.com/devansh728/DevMate.git"
    },
  ];

  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Innovative full-stack engineer crafting scalable microservices with Spring Boot, Docker, and Kubernetes—driving real-time systems, secure auth flows, and high-performance media delivery.
Expert in building CI/CD pipelines, cloud-native apps, and resilient architectures using Kafka, Redis, Grafana, and AWS.</p>
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
                            onClick={() => handleCardClick(project.projectUrl)}
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
    </section>
  )
}
