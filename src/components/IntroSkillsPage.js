// src/components/IntroSkillsPage.js
import React from 'react';
import styled from 'styled-components';
import { Page } from './Page';
import { motion } from 'framer-motion';

const SummaryText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: left;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
`;

const Skill = styled(motion.div)`
  background: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
`;

const skillsList = [
  "Java", "JavaScript", "SQL", "React.js", "Node.js", "Express.js",
  "MongoDB", "RESTful APIs", "GitHub", "Netlify", "Render", "VS Code"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const IntroSkillsPage = () => {
  return (
    <>
      {/* Left Page: Summary */}
      <Page className="left" style={{ zIndex: 1, display: 'none' /* Hide for now */ }}>
        <h2>Chapter 1: Summary</h2>
        <SummaryText>
          Results-driven Computer Science graduate specializing in full-stack web development with the MERN stack (MongoDB, Express.js, React, Node.js). Proven ability to deliver scalable, high-performance web applications, demonstrated through internship experience and personal projects. Driven to create efficient, user-centric solutions.
        </SummaryText>
      </Page>

      {/* Right Page: Skills */}
      <Page className="right" style={{ zIndex: 2, display: 'none' /* Hide for now */ }}>
        <h2>Technical Skills</h2>
        <SkillsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillsList.map(skill => (
            <Skill key={skill} variants={itemVariants}>
              {skill}
            </Skill>
          ))}
        </SkillsGrid>
      </Page>
    </>
  );
};