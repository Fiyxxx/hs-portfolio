import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lumipic from "../assets/lumi.png";
import semperstrokepic from "../assets/semperstroke.png";

const dummyProjects = [
  {
    title: "lumistudy",
    description: "This is a short description for project1.",
    image: lumipic,
    liveLink: "#",
    codeLink: "#",
    preview: "[react, python, fastapi, llm, firebase]"
  },
  {
    title: "semperstroke",
    description: "This is a short description for project2.",
    image: semperstrokepic,
    liveLink: "#",
    codeLink: "#",
    preview: "[unity, c#, nextjs, metaquest]"
  },
  {
    title: "futbolvision",
    description: "This is a short description for project2.",
    image: "https://via.placeholder.com/400x250",
    liveLink: "#",
    codeLink: "#",
    preview: "[yolov8, opencv, python]"
  },
  {
    title: "jitsuna",
    description: "This is a short description for project2.",
    image: "https://via.placeholder.com/400x250",
    liveLink: "#",
    codeLink: "#",
    preview: "[python, telegramapi, sqlite3]"
  }
];

const Projects = () => {
  const [openStates, setOpenStates] = useState({});

  const toggleProject = (index) => {
    setOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="projects"
      className="scroll-mt-20 w-full min-h-screen px-6 py-10 flex justify-center relative"
    >
      <div className="max-w-2xl w-full flex flex-col gap-6 relative">
        {/* Section Title */}
        <div className="absolute top-6 left-0 w-full flex justify-center">
          <div className="max-w-screen-md w-full">
            <h2 className="text-3xl sm:text-7xl text-white font-bold tracking-wider">
              projects.
            </h2>
          </div>
        </div>

        {/* Project Items */}
        <div className="pt-86 flex flex-col gap-4">
          {dummyProjects.map((project, index) => (
            <div key={index} className="text-white">
              {/* Clickable Header */}
              <div
                onClick={() => toggleProject(index)}
                className="flex justify-between items-center cursor-pointer hover:text-violet-400 transition-colors"
              >
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
                <span className="text-xl text-gray-400 -translate-y-[5px] inline-block">
                  {project.preview}
                </span>
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {openStates[index] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-4"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full md:w-1/2 h-auto rounded-lg shadow-lg object-cover"
                      />

                      {/* Text Content */}
                      <div className="flex flex-col gap-4 md:w-1/2">
                        <p className="text-base">{project.description}</p>
                        <div className="flex gap-4">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-violet-400 hover:underline"
                          >
                            [link]
                          </a>
                          <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-violet-400 hover:underline"
                          >
                            [code]
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;