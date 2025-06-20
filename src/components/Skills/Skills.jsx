import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';
import { images } from '../../constants';

export const skillsData = [
 {
  name: 'C++',
  bgColor: '#00599C', // A bold C++-ish blue
  icon: images.logocpp
},
{
  name: 'Python',
  bgColor: '#306998', // Official Python blue
  icon: images.python
},

  {
    name: 'JavaScript',
    bgColor: '#f7df1e',
    icon: images.logojs
  },
  {
    name: 'React',
    bgColor: '#61dafb',
    icon: images.logoreact
  },
  
  {
    name: 'Node.js',
    bgColor: '#3c873a',
    icon: images.logonode
  },
  {
    name: 'PostgreSQL',
    bgColor: '#336791',
    icon: images.logopgsql
  },
  {
    name: 'MongoDB',
    bgColor: '#4db33d',
    icon: images.logomongo
  },
  {
    name: 'Django',
    bgColor: '#ffffff',
    icon: images.logodjango
  }
];


const Skills = () => {
  const [skills] = useState(skillsData);

  return (
    <>
      <h2 className="head-text">Here's My <span>Tech Stack</span>!</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
