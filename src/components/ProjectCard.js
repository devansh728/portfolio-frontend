import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl ,onClick, imgStyle}) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <div className="proj-card">
      <div className="proj-imgbx" onClick = {onClick}>
        <img 
          src={imgUrl} 
          alt={title} 
          
          style={imgStyle || { 
            width: '100%', 
            height: '200px', 
            objectFit: 'cover' 
          }} 
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </div>
    </Col>
  )
}
