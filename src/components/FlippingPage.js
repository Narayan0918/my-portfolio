// src/components/FlippingPage.js
import React from 'react';
import styled from 'styled-components';
import { motion, useTransform } from 'framer-motion';

const PageWrapper = styled(motion.div)`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  transform-style: preserve-3d;
  transform-origin: left; // This is crucial for the page to pivot from the spine
`;

const PageFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fdfdfd; // Paper color
  padding: 2rem;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Hides the back of the element when it's facing away from the user */
  backface-visibility: hidden;
`;

const FrontFace = styled(PageFace)`
  /* Front is not rotated initially */
`;

const BackFace = styled(PageFace)`
  /* Back is rotated 180 degrees to be on the other side */
  transform: rotateY(180deg);
`;


export const FlippingPage = ({ children, progress, zIndex }) => {
  // Map the progress value (0 to 1) to a rotation from 0 to -180 degrees
  const rotateY = useTransform(progress, [0, 1], [0, -180]);

  return (
    <PageWrapper style={{ rotateY, zIndex }}>
      <FrontFace>{children[0]}</FrontFace> {/* The first child is the front */}
      <BackFace>{children[1]}</BackFace>  {/* The second child is the back */}
    </PageWrapper>
  );
};