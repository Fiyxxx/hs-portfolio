import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 150) {
        setActiveSection('hero');
        return;
      }
  
      const scrollPosition = window.scrollY + 200;
  
      for (let section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
  
    // ✅ Call on mount (to activate 'header' without scrolling)
    handleScroll();
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pl-5 hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 w-16 flex-col items-start gap-6 text-white z-50">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`text-sm transition-colors hover:text-violet-400 ${
            activeSection === id ? 'text-white' : 'text-gray-500'
          }`}
        >
          {label}
        </a>
      ))}
    </div>
  );
};

export default Navbar;