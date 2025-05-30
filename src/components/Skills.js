import springBoot from "../assets/img/icons8-spring-boot.svg"
import kubernetes from "../assets/img/kubernetes.png";
import docker from "../assets/img/icons8-docker.svg";
import jenkins from "../assets/img/icons8-jenkins.svg";
import aws from "../assets/img/icons8-aws.svg";
import nginx from "../assets/img/icons8-nginx.svg";
import ci from "../assets/img/ci.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import javaNew from "../assets/img/java-svgrepo-com.svg";
import react from "../assets/img/icons8-react-js.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const circleImageStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "auto",
    display: "block",
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                A passionate developer fluent in Java. I build scalable backend systems with Spring Boot and microservices using Docker, Kubernetes,Jenkins and AWS. With hands-on expertise in Kafka, RabbitMQ, and both SQL/NoSQL databases, I deliver robust, production-ready solutions. I thrive at the intersection of clean code, modern DevOps, and cutting-edge cloud-native technologies.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={javaNew} alt="Springboot" style={circleImageStyle} />
                  <h5>java</h5>
                </div>
                <div className="item">
                  <img src={springBoot} alt="Microservices" style={circleImageStyle} />
                  <h5>SpringBoot</h5>
                </div>
                <div className="item">
                  <img src={docker} alt="Microservices" style={circleImageStyle} />
                  <h5>Docker</h5>
                </div>
                <div className="item">
                  <img src={aws} alt="AWS" style={circleImageStyle} />
                  <h5>AWS</h5>
                </div>
                <div className="item">
                  <img src={kubernetes} alt="Kubernetes" style={circleImageStyle} />
                  <h5>Kubernetes</h5>
                </div>
                <div className="item">
                  <img src={jenkins} alt="CI & CD" style={circleImageStyle} />
                  <h5>jenkins</h5>
                </div>
                <div className="item">
                  <img src={nginx} alt="CI & CD" style={circleImageStyle} />
                  <h5>Nginx</h5>
                </div>
                <div className="item">
                  <img src={react} alt="CI & CD" style={circleImageStyle} />
                  <h5>React Js</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Decoration" />
    </section>
  );
};
