import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Ourwork from './Ourwork';
import MyReview from './Myreview';

const About = () => {
  const { ref: ourWorkRef, inView: ourWorkInView } = useInView({ triggerOnce: true });
  const { ref: myReviewRef, inView: myReviewInView } = useInView({ triggerOnce: true });

  return (
    <>
     <h2 className='pagetitle'>About <span>Us</span> </h2>
      {/* Ourwork section with scroll animation */}
      <motion.div
        ref={ourWorkRef}
        initial={{ y: -100, opacity: 0 }}
        animate={ourWorkInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <Ourwork />
      </motion.div>

      {/* MyReview section with scroll animation */}
      <motion.div
        ref={myReviewRef}
        initial={{ y: 100, opacity: 0 }}
        animate={myReviewInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <MyReview />
      </motion.div>
    </>
  );
};

export default About;
