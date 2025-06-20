import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';
import { images } from '../../constants';

const projectData = [
  {
    title: 'Hotel booking site',
    description: 'A full stack app using MERN for booking and renting hotel rooms',
    imgUrl: images.hotelbooking,
    codeLink: 'https://github.com/anukoolvikram/hotel-booking-full-stack.git',
    tags: ['MERN', 'UI/UX'],
  },
  {
    title: 'Blogging Platform',
    description: 'A CRUD based blogging platform built using Next JS',
    imgUrl: images.blogging,
    codeLink: 'https://github.com/anukoolvikram/nextjs_blogging',
    tags: ['Next JS', 'Web App'],
  },
  {
    title: 'Management Tool',
    description: 'A tool to manage housing society data and provide services to residents',
    imgUrl: images.management,
    codeLink: 'https://github.com/anukoolvikram/Nivaso.git',
    tags: ['React JS', 'PERN'],
  },
  {
    title: 'Music Controller',
    description: 'A platform to create rooms, to stream songs and allow guests to listen',
    imgUrl: images.music,
    codeLink: 'https://github.com/anukoolvikram/music-controller.git',
    tags: ['React JS', 'Django'],
  },
];

const Work = () => {
  const [filterWork] = useState(projectData);

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-portfolio">
        {filterWork.map((work, index) => (
          <motion.div
            className="app__work-item app__flex"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} loading="lazy" />
              <motion.div
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="app__work-hover app__flex"
              >
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content" style={{marginTop: 15}}>
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text">{work.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);
