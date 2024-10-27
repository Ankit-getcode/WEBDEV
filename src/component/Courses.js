import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Web from './Web';
import Pricing from './Pricing';
import Course from './Courselist';
import Teaminfo from './Teaminfo';

const Courses = () => {
  const { ref: webRef, inView: webInView } = useInView({ triggerOnce: true });
  const { ref: pricingRef, inView: pricingInView } = useInView({ triggerOnce: true });
  const { ref: teamInfoRef, inView: teamInfoInView } = useInView({ triggerOnce: true });

  return (
    <>
     <h2 className='pagetitle'>Cou<span>rses</span> </h2>
      {/* Web section with scroll animation */}
      <motion.div
        ref={webRef}
        initial={{ y: -100, opacity: 0 }}
        animate={webInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <Web />
      </motion.div>

      <h1 className='priceHead'>Our Courses</h1>

      {/* Pricing section with scroll animation */}
      <motion.div
        ref={pricingRef}
        initial={{ y: 100, opacity: 0 }}
        animate={pricingInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <Pricing plan={Course} />
      </motion.div>

      {/* Team info section with scroll animation */}
      <motion.div
        ref={teamInfoRef}
        initial={{ y: 100, opacity: 0 }}
        animate={teamInfoInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <Teaminfo />
      </motion.div>
    </>
  );
};

export default Courses;
