import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Pricing from './Pricing';
import plans from './Plans';
import Web from './Web';
import Timeline from './Timeline';
import Process from './Process';

const Webdev = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { ref: webRef, inView: webInView } = useInView({ triggerOnce: true });
  const { ref: pricingRef, inView: pricingInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading delay
    return () => clearTimeout(timer);
  }, []);

 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
       <h2 className='pagetitle'>Web <span>Development</span> </h2>
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
     
        <Process/>
    

      <h1 className='priceHead'>Our Pricing a Plans</h1>

      {/* Pricing section with scroll animation */}
      <motion.div
        ref={pricingRef}
        initial={{ y: 100, opacity: 0 }}
        animate={pricingInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
      >
        <Pricing plan={plans} />
      </motion.div>
    </motion.div>
  );
};

export default Webdev;
