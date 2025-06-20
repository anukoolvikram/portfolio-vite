import React from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

const abouts = [
  {
    title: 'Frontend Developer',
    description: 'I build responsive, fast, and accessible UIs using React and TailwindCSS.',
    imgUrl: images.frontend, 
  },
  {
    title: 'Backend Developer',
    description: 'I design secure and scalable APIs with Node.js & Express using SQL/NoSQL databases.',
    imgUrl: images.backend,
  },
  {
    title: 'UI/UX Designer',
    description: 'I craft user experiences that feel smooth and intuitive.',
    imgUrl: images.uiux,
  },
  {
    title: 'Problem Solver',
    description: 'I love debugging and optimizing code to run better and cleaner.',
    imgUrl: images.debug,
  },
];

export const About = () => {
  return (
    <>
      <h2 className="head-text">
        <span>What am I good at?</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');
