const Header = () => {
    console.log("✅ Header is rendering...");
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      <header className="fixed top-0 left-0 w-full bg-black text-white text-3xl font-bold py-4 text-center cursor-pointer shadow-lg z-50"
        onClick={scrollToTop}
      >
        hansheng.
      </header>
    );
  };
  
  export default Header;