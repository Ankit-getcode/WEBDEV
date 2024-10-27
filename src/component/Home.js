import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Web from './Web';
import Service from './Service';
import Whytochoose from './Whytochoose';
import Teaminfo from './Teaminfo';
import OurWork from './Ourwork';
import MyReview from './Myreview';

const Home = () => {
  // Using useInView hooks for each component to apply animations
  const { ref: webRef, inView: webInView } = useInView({ triggerOnce: true });
  const { ref: serviceRef, inView: serviceInView } = useInView({ triggerOnce: true });
  const { ref: ourWorkRef, inView: ourWorkInView } = useInView({ triggerOnce: true });
  const { ref: whyChooseRef, inView: whyChooseInView } = useInView({ triggerOnce: true });
  const { ref: teamInfoRef, inView: teamInfoInView } = useInView({ triggerOnce: true });
  const { ref: myReviewRef, inView: myReviewInView } = useInView({ triggerOnce: true });

  return (
    <>
    <h2 className='pagetitle'>Web <span>Ocean</span> </h2>
      <motion.div
        ref={webRef}
        initial={{ y: -100, opacity: 0 }}
        animate={webInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <Web />
      </motion.div>

      <motion.div
        ref={serviceRef}
        initial={{ y: -100, opacity: 0 }}
        animate={serviceInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <Service />
      </motion.div>

      <motion.div
        ref={ourWorkRef}
        initial={{ y: -100, opacity: 0 }}
        animate={ourWorkInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <OurWork />
      </motion.div>

      <motion.div
        ref={whyChooseRef}
        initial={{ y: -100, opacity: 0 }}
        animate={whyChooseInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <Whytochoose />
      </motion.div>

      <motion.div
        ref={teamInfoRef}
        initial={{ y: -100, opacity: 0 }}
        animate={teamInfoInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <Teaminfo />
      </motion.div>

      <motion.div
        ref={myReviewRef}
        initial={{ y: -100, opacity: 0 }}
        animate={myReviewInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <MyReview />
      </motion.div>
    </>
  );
};

export default Home;
