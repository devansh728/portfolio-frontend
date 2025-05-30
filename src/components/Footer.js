import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/leetsnew.svg';
import navIcon3 from '../assets/img/gitNew.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <a href="https://www.fontspace.com/category/paint">
              <img
                src="https://see.fontimg.com/api/rf5/OVl7O/MWZkNTEwOTIzNzgxNDdkMjgyNWJhMmRiMDdhYWUxOWQub3Rm/RGV2YW5zaCBHYXJn/rainly-regular.png?r=fs&h=65&w=1000&fg=000000&bg=FFFFFF&tb=1&s=65"
                alt="Paint fonts"
                className="img-fluid w-50"
              />
            </a>
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/devanshgarg728"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/devansh728"><img src={navIcon2} alt="" /></a>
              <a href="https://leetcode.com/u/devansh728/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
