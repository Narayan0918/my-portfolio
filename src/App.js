// src/App.js
import React, { useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { FlippingPage } from "./components/FlippingPage";
import { Page } from "./components/Page";
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiExternalLink, FiCode, FiTool, FiGitBranch } from 'react-icons/fi';

// --- 1. Global Styles and Fonts ---
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Merriweather:wght@700&display=swap');
  
  body {
    font-family: 'Lato', sans-serif;
    background-color: #f0f0f0; // A lighter background
    color: #333;
    line-height: 1.6;
  }
`;

// --- 2. Reusable Styled Components ---
const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 1rem 2.5rem;
`;

const PageTitle = styled.h2`
  font-family: 'Merriweather', serif;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1a1a1a;
`;

const Subheading = styled.h4`
  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const BodyText = styled.p`
  text-align: left;
  max-width: 50ch; // Optimal line length for readability
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  width: 100%;
  li {
    margin-bottom: 0.75rem;
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 2rem;
  width: 100%;
  text-align: left;
`;

const SkillCategory = styled.div`
  h4 {
    font-family: 'Merriweather', serif;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;

const StyledLink = styled.a`
  font-weight: bold;
  color: #6a0dad; // A nice purple for links
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    text-decoration: underline;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0rem;
  margin-top: 0;

  a, p {
    color: #333;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1rem;
  }

  .socials{
    display:flex;
  }
`;


// --- 3. Content Components (Now using Styled Components) ---

const CoverContent = () => (
  <PageContent>
    <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ fontFamily: 'Merriweather, serif', fontSize: '2.5rem', margin: 0 }}>
      Narayan Raj Dubey
    </motion.h1>
    <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} style={{ fontWeight: 400, fontSize: '1.2rem' }}>
      Full-Stack Web Developer
    </motion.h3>
  </PageContent>
);

const SummaryContent = () => (
  <PageContent>
    <PageTitle>Chapter 1: Summary</PageTitle>
    <BodyText>
      Results-driven Computer Science graduate specializing in full-stack web
      development with the MERN stack (MongoDB, Express.js, React, Node.js).
      Proven ability to deliver scalable, high-performance web applications,
      demonstrated through internship experience and personal projects. Driven
      to create efficient, user-centric solutions.
    </BodyText>
  </PageContent>
);

const SkillsContent = () => (
  <PageContent>
    <PageTitle>Technical Skills</PageTitle>
    <SkillGrid>
      <SkillCategory>
        <h4><FiCode />Languages</h4>
        <p>Java, JavaScript, SQL</p>
      </SkillCategory>
      <SkillCategory>
        <h4><FiCode />Frameworks & Libraries</h4>
        <p>React.js, Node.js, Express.js, MongoDB</p>
      </SkillCategory>
      <SkillCategory>
        <h4><FiGitBranch />Version Control</h4>
        <p>GitHub, GitHub pages, Netlify, Render</p>
      </SkillCategory>
      <SkillCategory>
        <h4><FiTool />Tools & Technologies</h4>
        <p>VS Code, Postman, ChatGPT, Gemini, Claude</p>
      </SkillCategory>
    </SkillGrid>
  </PageContent>
);

const ExperienceContent = () => (
  <PageContent>
    <PageTitle>Chapter 2: Experience</PageTitle>
    <div style={{ textAlign: "left", width: "100%" }}>
      <Subheading>iNeuBytes | Web Development Intern</Subheading>
      <p><i>Aug 2024 - Oct 2024</i></p>
      <StyledList>
        <li>Developed and launched 5+ responsive web pages using React.</li>
        <li>Identified and resolved over 20 cross-device layout bugs.</li>
        <li>Optimized front-end code, resulting in a ~25% improvement in page load times.</li>
      </StyledList>
    </div>
  </PageContent>
);

const Project1Content = () => (
  <PageContent>
    <PageTitle>Chapter 3: Projects</PageTitle>
    <div style={{ textAlign: "left", width: "100%" }}>
      <Subheading>Localised On-Demand Service Platform (MERN)</Subheading>
      <StyledList>
        <li>Engineered a full-stack platform for users to book verified local service workers.</li>
        <li>Implemented secure, role-based authentication, reducing unauthorized access by 95%.</li>
        <li>Designed and integrated a RESTful API for seamless data communication.</li>
      </StyledList>
      <StyledLink href="#"><FiExternalLink /> View Project</StyledLink>
    </div>
  </PageContent>
);

const Project2Content = () => (
  <PageContent>
    <PageTitle>Projects (Cont.)</PageTitle>
    <div style={{ textAlign: "left", width: "100%" }}>
      <Subheading>E-Commerce Landing Page (React)</Subheading>
      <StyledList>
        <li>Architected a React SPA by converting a static HTML file into 8 reusable components.</li>
        <li>Eliminated 12+ hardcoded blocks by dynamically rendering product listings.</li>
        <li>Engineered a mobile-first navigation menu using the useState hook.</li>
      </StyledList>
      <StyledLink href="#"><FiExternalLink /> View Project</StyledLink>
    </div>
  </PageContent>
);

const EducationContactContent = () => (
  <PageContent>
    <PageTitle>Education & Contact</PageTitle>
    <Subheading>Panipat Institute of Engineering and Technology</Subheading>
    <p>B-Tech in Computer Science and Engineering | 2021-2025</p>
    <hr style={{ width: "80%", margin: "2rem 0" }} />
    <Subheading>Get In Touch</Subheading>
    <ContactInfo>
      <a href="mailto:narayanrajdubey9889@gmail.com"><FiMail /> narayanrajdubey9889@gmail.com</a>
      <p><FiPhone /> 7007344437</p>
      <div className="socials">
        <StyledLink href="#" style={{ marginRight: '1rem' }}><FiLinkedin /> LinkedIn</StyledLink>
        <StyledLink href="#"><FiGithub /> GitHub</StyledLink>
      </div>
    </ContactInfo>
  </PageContent>
);

// --- 4. Main App Structure ---

const ScrollContainer = styled.div`
  height: 500vh;
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Book = styled(motion.div)`
  width: 80vw;
  height: 70vh;
  max-width: 1000px;
  perspective: 2500px;
  filter: drop-shadow(0 0 30px rgba(0,0,0,0.4));
`;

function App() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const page1Progress = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const page2Progress = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const page3Progress = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);
  const page4Progress = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  const page1ZIndex = useTransform(scrollYProgress, [0.249, 0.25], [5, 1]);
  const page2ZIndex = useTransform(scrollYProgress, [0.499, 0.5], [4, 2]);
  const page3ZIndex = useTransform(scrollYProgress, [0.749, 0.75], [3, 0]);
  const page4ZIndex = useTransform(scrollYProgress, [0.999, 1], [2, 4]);

  return (
    <>
      <GlobalStyle />
      <ScrollContainer ref={scrollRef}>
        <StickyContainer>
          <Book>
            <Page className="left" />

            <FlippingPage progress={page1Progress} zIndex={page1ZIndex}>
              <div style={{ background: "#2c3e50", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                <CoverContent />
              </div>
              <SummaryContent />
            </FlippingPage>

            <FlippingPage progress={page2Progress} zIndex={page2ZIndex}>
              <SkillsContent />
              <ExperienceContent />
            </FlippingPage>

            <FlippingPage progress={page3Progress} zIndex={page3ZIndex}>
              <Project1Content />
              <Project2Content />
            </FlippingPage>

            <FlippingPage progress={page4Progress} zIndex={page4ZIndex}>
              <EducationContactContent />
              <div />
            </FlippingPage>

          </Book>
        </StickyContainer>
      </ScrollContainer>
    </>
  );
}

export default App;