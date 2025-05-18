import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1 id="hero-title" className="text-4xl md:text-6xl font-bold mb-4">Aristide Norman</h1>
              <h2 id="hero-subtitle" className="text-xl md:text-3xl mb-8">Technology Leader & DevOps Expert</h2>
              <p id="hero-description" className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-300">
                Leading technology transformations and automating complex systems with over 20 years of experience in the financial services industry.
              </p>
              <div id="hero-buttons" className="flex justify-center space-x-4">
                <a href="#experience" className="btn-primary px-6 py-3 rounded-full text-white font-medium">View Experience</a>
                <a href="#contact" className="border border-cyan-500 px-6 py-3 rounded-full text-white font-medium hover:bg-cyan-800 hover:bg-opacity-30 transition-all">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
