import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lumipic from "../assets/lumi.png";
import semperstrokepic from "../assets/semperstroke.png";
import futbolvision from "../assets/futbolvision.png";
import jitsuna from "../assets/jitsuna.png";

const dummyProjects = [
  {
    title: "lumistudy",
    description: [
      "flashcard study app with llm integration to convert pdf notes to flashcards instantly",
      "my love letter to 🇸🇬 students, happy learning!",
      "founder & main coder"
    ],
    image: lumipic,
    liveLink: "https://lumi-app-theta.vercel.app",
    codeLink: "#",
    preview: "[react, python, fastapi, llm, firebase]",
    emoji: "📚"
  },
  {
    title: "semperstroke",
    description: [
      "vr games that aid rehabilitation of stroke patients",
      "targeting the critical lack of physios in the market",
      "main vr coder, in collaboration with nus/ntu medical students"
    ],
    image: semperstrokepic,
    liveLink: "#",
    codeLink: "#",
    preview: "[unity, c#, nextjs, metaquest]",
    emoji: "🏥"
  },
  {
    title: "futbolvision",
    description: [
      "football analysis system tracking ball, player movements, and other stats",
      "passion project with my ❤️ for football + computing",
      "sole coder"
    ],
    image: futbolvision,
    liveLink: "#",
    codeLink: "#",
    preview: "[yolov8, opencv, python]",
    emoji: "⚽️"
  },
  {
    title: "jitsuna",
    description: [
      "habit tracking telegram bot with daily alerts and levels",
      "i'm big on self improvement, and this bot has helped me along my journey!",
      "sole coder"
    ],
    image: jitsuna,
    liveLink: "#",
    codeLink: "#",
    preview: "[python, telegramapi, sqlite3]",
    emoji: "✅"
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

const [hoveredIndex, setHoveredIndex] = useState(null);
const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

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
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                }}
                className="flex justify-between items-center cursor-pointer hover:text-violet-400 transition-colors relative"
              >
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
                <span className="text-xl text-gray-400 -translate-y-[5px] inline-block">
                  {project.preview}
                </span>

                {hoveredIndex === index && (
                  <div
                    className="absolute pointer-events-none text-2xl transition-transform duration-75"
                    style={{
                      top: cursorPos.y,
                      left: cursorPos.x,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {project.emoji}
                  </div>
                )}
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
                      <ul className="list-disc list-inside text-base leading-relaxed space-y-1">
                        {project.description.map((point, i) => (
                        <li key={i}>{point}</li>
                        ))}
                      </ul>
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