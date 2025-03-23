import profilePic from "../assets/bitavatar.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen px-6 py-10 flex justify-center relative"
    >
      {/* Constrained inner container */}
      <div className="max-w-2xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Section Title */}
        <div className="absolute top-6 left-0 w-full flex justify-center">
          <div className="max-w-screen-md w-full">
            <h2 className="text-3xl sm:text-7xl text-white font-bold tracking-wider">
              about.
            </h2>
          </div>
        </div>

        {/* Left: Text Content */}
        <div className="flex-1.5 text-white">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            hi, i’m han sheng <span className="inline-block">👋</span>
          </h3>
          <p className="text-base sm:text-lg leading-relaxed max-w-xl">
            i'm a computing undergraduate majoring in ai systems. beyond passion,
            i believe in building great systems that change lives.
            my main interests are systems, ai/ml, and quant finance. 
            i love exchanging ideas, and
            taking on new challenges, reach out to me!
          </p>

          <div className="flex items-center gap-6 mt-4 text-white text-2xl">
            <a
              href="https://www.linkedin.com/in/goh-han-sheng"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/fiyxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105">
            <img
              src={profilePic}
              alt="Han Sheng"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;