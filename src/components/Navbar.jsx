const Navbar = () => {
  return (
    <div className="hidden md:flex fixed left-5 top-1/2 -translate-y-1/2 w-16 h-auto flex-col items-start gap-6 text-white z-50">
      <a href="#header" className="text-sm hover:text-violet-400 transition">Intro</a>
      <a href="#about" className="text-sm hover:text-violet-400 transition">About</a>
      <a href="#projects" className="text-sm hover:text-violet-400 transition">Projects</a>
      <a href="#education" className="text-sm hover:text-violet-400 transition">Education</a>
    </div>
  );
};

export default Navbar;