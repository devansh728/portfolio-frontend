

// import { ArrowRightCircle } from 'react-bootstrap-icons';

// export const ResumeButton = () => {
//   const googleDrivePdfUrl = "https://drive.google.com/file/d/14JNH64X2VtZ8-vtndRxu2BLf9IjLiarh/view?usp=sharing";

//   return (
//     <a 
//       href={googleDrivePdfUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '8px',
//         background: 'transparent',
//         border: '1px solid #fff',
//         color: '#fff',
//         padding: '8px 16px',
//         borderRadius: '4px',
//         cursor: 'pointer',
//         textDecoration: 'none'
//       }}
//     >
//       View My Resume <ArrowRightCircle size={20} />
//     </a>
//   );
// };
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { keyframes, styled } from 'styled-components';

const arrowBounce = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(4px);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    
    svg {
      animation: ${arrowBounce} 0.8s infinite;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  animation: ${pulse} 2s infinite;
`;

export const ResumeButton = () => {
  const googleDrivePdfUrl = "https://drive.google.com/file/d/1D5SKkXGzfsJdJTZDID5AaXOh5CSE5ubZ/view?usp=sharing";

  return (
    <StyledButton 
      href={googleDrivePdfUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      View My Resume <ArrowRightCircle size={20} />
    </StyledButton>
  );
};