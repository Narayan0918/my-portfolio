// src/components/Page.js
import styled from 'styled-components';

export const Page = styled.div`
  width: 50%; // Each page is half the book's width
  height: 100%;
  position: absolute;
  top: 0;
  background: #fdfdfd; // Off-white paper color
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow: hidden; // Prevents content from spilling out

  // Style for left and right pages
  &.left {
    left: 0;
  }
  &.right {
    right: 0;
  }
`;