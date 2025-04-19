function NavBar() {
    return (
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-[#3A86FF]">Angel Santiago</h1>
        <ul className="flex gap-6 text-[#1E293B] font-medium">
          <li><a href="#projects" className="hover:text-[#3A86FF]">Projects</a></li>
          <li><a href="#about" className="hover:text-[#3A86FF]">About</a></li>
          <li><a href="#contact" className="hover:text-[#3A86FF]">Contact</a></li>
        </ul>
      </nav>
    );
  }

  export default NavBar;