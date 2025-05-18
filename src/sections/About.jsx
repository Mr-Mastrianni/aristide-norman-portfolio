import React, { useEffect } from 'react';
import gsap from 'gsap';

const About = () => {
  useEffect(() => {
    const img = document.getElementById('profile-img');
    gsap.fromTo(img,
      { rotateY: 0 },
      { rotateY: 360, duration: 2, repeat: -1, ease: 'none' }
    );
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/5 mb-10 md:mb-0 flex flex-col items-center" id="about-image-area"> 
            <div className="profile-card mb-4"> 
              <div className="profile-card-inner">
                <div className="profile-card-front border-4 border-cyan-500 shadow-lg shadow-cyan-500/50 hover:scale-105 transition-transform duration-500">
                  <img id="profile-img" src="/images/MyImage.png" alt="Aristide Norman - Open to Work" className="w-full h-full object-cover" />
                </div>
                <div className="profile-card-back border-4 border-cyan-500 shadow-lg shadow-cyan-500/50">
                  <h3 className="text-xl mb-2">Aristide Norman</h3>
                  <p>Technology Leader</p>
                  <p className="mt-2">Phoenix, AZ</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-3/5" id="about-content">
            <p className="text-lg mb-6">
              Hello, I'm Aristide Norman, a seasoned technology professional with over two decades of experience in the financial services industry. My expertise lies in leading technology teams, implementing DevOps practices, and driving digital transformation initiatives.
            </p>
            <p className="text-lg mb-6">
              During my extensive tenure at Wells Fargo, I've had the privilege of leading teams in automating critical server provisioning processes, significantly improving operational efficiency. My leadership in DevOps and application development has been recognized by colleagues and industry peers alike. I specialize in creating robust, scalable technology solutions that drive business value and enhance customer experiences.
            </p>
            <p className="text-lg mb-8">
              Based in Phoenix, Arizona, I've built a reputation for my ability to bridge the gap between technical teams and business stakeholders. My approach combines technical expertise with strong leadership skills, enabling me to deliver complex projects on time and within budget. I'm passionate about mentoring junior team members and fostering a culture of continuous learning and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="btn-primary px-6 py-3 rounded-full text-white font-medium">
                <i className="fas fa-envelope mr-2"></i> Contact Me
              </a>
              <a href="#experience" className="border border-cyan-500 px-6 py-3 rounded-full text-white font-medium hover:bg-cyan-800 hover:bg-opacity-30 transition-all">
                <i className="fas fa-briefcase mr-2"></i> Work History
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
