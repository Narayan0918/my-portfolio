import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { FlippingPage } from "./components/FlippingPage";
import { Page } from "./components/Page";

// --- Reusable Content Components (No Changes Here) ---

const CoverContent = () => (
  <div style={{ textAlign: "center", color: "white" }}>
    <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      Narayan Raj Dubey
    </motion.h1>
    <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
      Full-Stack Web Developer
    </motion.h3>
  </div>
);

const SummaryContent = () => (
  <>
    <h2>Chapter 1: Summary</h2>
    <p style={{ textAlign: "left", lineHeight: 1.6 }}>
      Results-driven Computer Science graduate specializing in full-stack web
      development with the MERN stack (MongoDB, Express.js, React, Node.js).
      Proven ability to deliver scalable, high-performance web applications,
      demonstrated through internship experience and personal projects. Driven
      to create efficient, user-centric solutions.
    </p>
  </>
);

const SkillsContent = () => (
  <>
    <h2>Technical Skills</h2>
    <ul style={{ listStyle: "none", padding: 0, textAlign: "left", width: "100%" }}>
      <li><b>Languages:</b> Java, JavaScript, SQL</li>
      <li><b>Frameworks & Libraries:</b> React.js, Node.js, Express.js, MongoDB</li>
      <li><b>Version Control:</b> GitHub, GitHub pages, Netlify, Render</li>
      <li><b>Tools:</b> VS Code, Postman, ChatGPT, Gemini, Claude</li>
    </ul>
  </>
);

const ExperienceContent = () => (
  <>
    <h2>Chapter 2: Experience</h2>
    <div style={{ textAlign: "left", width: "100%" }}>
      <h4>iNeuBytes | Web Development intern</h4>
      <p><i>08/2024-10/2024</i></p>
      <ul>
        <li>Developed and launched 5+ responsive web pages using React.</li>
        <li>Identified and resolved over 20 cross-device layout bugs.</li>
        <li>Optimized front-end code, resulting in a ~25% improvement in page load times.</li>
        <li>Collaborated with the team using Agile methodologies.</li>
      </ul>
    </div>
  </>
);

const Project1Content = () => (
  <>
    <h2>Chapter 3: Projects</h2>
    <div style={{ textAlign: "left", width: "100%", fontSize: "0.9rem" }}>
      <h4>Localised On-Demand Service Platform (MERN)</h4>
      <ul>
        <li>Engineered a full-stack platform for users to book verified local service workers.</li>
        <li>Implemented secure, role-based authentication, reducing unauthorized access by 95%.</li>
        <li>Designed and integrated a RESTful API for seamless data communication.</li>
        <li>Refined UI responsiveness, achieving 100% performance and accessibility.</li>
      </ul>
      <a href="#" style={{ fontWeight: "bold" }}>View Project Link</a>
    </div>
  </>
);

const Project2Content = () => (
  <>
    <h2>Projects (Cont.)</h2>
    <div style={{ textAlign: "left", width: "100%", fontSize: "0.9rem" }}>
      <h4>E-Commerce Landing Page (React)</h4>
      <ul>
        <li>Architected a React SPA by converting a 550-line static HTML file into 8 reusable components.</li>
        <li>Eliminated 12+ hardcoded blocks by dynamically rendering product listings from JavaScript arrays.</li>
        <li>Engineered a mobile-first navigation menu using the useState hook.</li>
      </ul>
      <a href="#" style={{ fontWeight: "bold" }}>View Project Link</a>
    </div>
  </>
);

const EducationContactContent = () => (
  <>
    <h2>Education & Contact</h2>
    <div style={{ textAlign: "center", width: "100%" }}>
      <h4>Panipat Institute of Engineering and Technology | Samalkha, Haryana</h4>
      <p>B-Tech in Computer Science and Engineering | 2021-2025</p>
      <hr style={{ width: "80%", margin: "2rem 0" }} />
      <h4>Get In Touch</h4>
      <p>
        <a href="mailto:narayanrajdubey9889@gmail.com" style={{ color: "#333", textDecoration: "none" }}>
          📧 narayanrajdubey9889@gmail.com
        </a>
      </p>
      <p>📞 7007344437</p>
      <div style={{ marginTop: "1rem" }}>
        <a href="#" style={{ margin: "0 1rem" }}>LinkedIn</a> |
        <a href="#" style={{ margin: "0 1rem" }}>GitHub</a> |
        <a href="#" style={{ margin: "0 1rem" }}>Portfolio</a>
      </div>
    </div>
  </>
);


// --- Main App Structure ---

const ScrollContainer = styled.div`
  height: 500vh; /* Increased height for 4 page turns */
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
  height: 90vh;
  max-width: 1000px;
  perspective: 2500px;
`;

function App() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // NEW: Each of the 4 pages gets 25% of the scroll distance
  const page1Progress = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const page2Progress = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const page3Progress = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);
  const page4Progress = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  // NEW: zIndex logic updated for 4 flipping pages
  const page1ZIndex = useTransform(scrollYProgress, [0, 0.25], [5, 1]);
  const page2ZIndex = useTransform(scrollYProgress, [0.25, 0.5], [4, 2]);
  const page3ZIndex = useTransform(scrollYProgress, [0.5, 0.75], [3, 3]);
  const page4ZIndex = useTransform(scrollYProgress, [0.75, 1], [2, 4]);


  return (
    <ScrollContainer ref={scrollRef}>
      <StickyContainer>
        <Book>
          {/* A static left page for the inside of the book cover */}
          <Page className="left" />

          {/* Page 1: Cover -> Summary */}
          <FlippingPage progress={page1Progress} zIndex={page1ZIndex}>
            <div style={{ background: "#2c3e50", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
              <CoverContent />
            </div>
            <SummaryContent />
          </FlippingPage>

          {/* Page 2: Skills -> Experience */}
          <FlippingPage progress={page2Progress} zIndex={page2ZIndex}>
            <SkillsContent />
            <ExperienceContent />
          </FlippingPage>

          {/* Page 3: Project 1 -> Project 2 */}
          <FlippingPage progress={page3Progress} zIndex={page3ZIndex}>
            <Project1Content />
            <Project2Content />
          </FlippingPage>

          {/* Page 4: Education/Contact -> Empty Back Cover */}
          <FlippingPage progress={page4Progress} zIndex={page4ZIndex}>
            <EducationContactContent />
            <div />
          </FlippingPage>

        </Book>
      </StickyContainer>
    </ScrollContainer>
  );
}

export default App;