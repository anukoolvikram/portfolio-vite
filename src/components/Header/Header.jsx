import React from 'react'
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

export const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }} //animation
        transition={{ duration: 0.5 }} //time for animation for title anukool on the homapage
        className="app__header-info">

        <div className='app_header-badge'>
          <div className='badge-cmp app__flex'>
            <div style={{ marginLeft: 5 }}>
              <div style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '28px', color: '#222', fontWeight: 500, lineHeight: 1.4 }}>
                <div style={{ color: '#a1acc3', marginBottom: '5px' }}>Hey, I am</div>

                  <div style={{ fontSize: '32px', fontWeight: 700, color: '#8da9ff', marginBottom: '10px' }}>
                    Anukool Vikram
                  </div>

                  <div style={{ fontSize: '20px', color: '#cbd5e1', marginBottom: '16px' }}>
                    I build clean, fast, and user-friendly web apps.
                  </div>

                  <div style={{
                    fontSize: '24px',
                    color: '#ffffff',
                    marginBottom: '10px',
                    display: 'flex',
                    gap: '8px'
                  }}>
                    <span style={{ animation: 'fadeIn 0.5s ease forwards', animationDelay: '0.5s', opacity: 0, color: '#d977fa' }}>Design.</span>
                    <span style={{ animation: 'fadeIn 0.5s ease forwards', animationDelay: '1s', opacity: 0, color: '#60a5fa' }}>Code.</span>
                    <span style={{ animation: 'fadeIn 0.5s ease forwards', animationDelay: '1.5s', opacity: 0, color: '#d977fa' }}>Deploy.</span>
                    <span style={{ animation: 'fadeIn 0.5s ease forwards', animationDelay: '2s', opacity: 0, color: '#60a5fa' }}>Repeat.</span>
                  </div>


              </div>

              <style>
              {`
              @keyframes fadeIn {
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
              }
              `}
              </style>


            </div>
          </div>
        </div>
      </motion.div>

      <motion.div whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img">

      <motion.img whileInView={{scale:[0,1]}}
      transition={{duration:1, ease:'easeInOut'}}
      className='overlay_circle'
      src={images.anukool}
      alt="profile_circle"/>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles">
        {[images.python, images.cpp, images.javascript].map((circle, index) => (
          <div className='circle-cmp app__Flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home');
