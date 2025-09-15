// src/components/CoverPage.js
import React from 'react';
import { motion } from 'framer-motion';
import { Page } from './Page';

export const CoverPage = () => {
  return (
    <Page className="right" style={{ background: '#2c3e50', color: 'white' }}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        [cite_start]Narayan Raj Dubey [cite: 1]
      </motion.h1>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        [cite_start]Full-Stack Web Developer [cite: 4]
      </motion.h3>
      {/* We can add the page-turn animation here later */}
    </Page>
  );
};