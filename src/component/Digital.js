import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Pricing from './Pricing';
import plans from './Digitalmarketing';
import Web from './Web';
import Timeline from './Timeline';
import Process from './Process';

const Digital = () => {
  const { ref: webRef, inView: webInView } = useInView({ triggerOnce: true });
  const { ref: timelineRef, inView: timelineInView } = useInView({ triggerOnce: true });
  const { ref: pricingRef, inView: pricingInView } = useInView({ triggerOnce: true });

  return (
    <div>
       <h2 className='pagetitle'>Digital <span>Marketing</span> </h2>
      {/* Web section with scroll animation */}
      <motion.div
        ref={webRef}
        initial={{ y: -100, opacity: 0 }}
        animate={webInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <Web />
      </motion.div>

      <h1 className='priceHead'>Our Process</h1>

      {/* Timeline section with scroll animation */}
      <motion.div
        ref={timelineRef}
        initial={{ y: 100, opacity: 0 }}
        animate={timelineInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <Process />
      </motion.div>

      <h1 className='priceHead'>Our Pricing Plans</h1>

      {/* Pricing section with scroll animation */}
      <motion.div
        ref={pricingRef}
        initial={{ y: 100, opacity: 0 }}
        animate={pricingInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
      >
        <Pricing plan={plans} />
      </motion.div>
    </div>
  );
};

export default Digital;
