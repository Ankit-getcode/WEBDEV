// src/serviceData.js
import Image1 from '../image/webd.png';
import Image2 from '../image/seo.png';
import Image3 from '../image/plang.png';
const Servicedata = [
    {
      id: 'service1',
      serviceimg:Image1, // Adjust the path as needed
      serviceheading: 'Web Development',
      servicepara: 'We offer professional web development services to create high-quality, responsive websites tailored to your business needs. From simple landing pages to complex web applications, we deliver scalable and user-friendly solutions that enhance your online presence',
      servlink: '/webdev',
      servlinkname: 'Read more',
    },
    {
      id: 'service2',
      serviceimg: Image2, // Example image path
      serviceheading: 'Digital Marketing',
      servicepara: 'Our digital marketing services are designed to help your business grow online by reaching the right audience, driving traffic, and boosting conversions. We specialize in SEO, social media marketing, content strategy, and more to ensure your brand thrives in the digital landscape',
      servlink: '/digital',
      servlinkname: 'Learn More',
    },
    {
      id: 'service3',
      serviceimg:Image3, // Example image path
      serviceheading: 'Courses',
      servicepara: 'Our comprehensive teaching and training programs empower individuals to become proficient in \'Web Development\' & \'Digital Marketing\'. Whether you\'re a beginner or looking to enhance your skills and help you succeed in the tech industry.Just explore for price and details of the courses.',
      servlink: '/courses',
      servlinkname: 'Explore',
    },
  ];
  
  export default Servicedata;
  