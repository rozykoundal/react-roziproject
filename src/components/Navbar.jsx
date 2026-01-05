function Navbar() {
  return (
    <header className="relative w-full">
      {/* Top beige strip */}
      <div className="w-full h-1 bg-amber-100"></div>
      
      {/* Main navigation bar */}
      <nav className="relative w-full bg-white">
        {/* Left beige border */}
        <div className="absolute left-0 top-0 h-full w-2 bg-amber-100"></div>
        
        {/* Right beige border */}
        <div className="absolute right-0 top-0 h-full w-2 bg-amber-100"></div>
        
        {/* Main content container */}
        <div className="flex items-center justify-between px-8 py-4 relative z-10">
          {/* Name on the left */}
          <h1 className="text-3xl font-bold text-blue-600">Rozy</h1>
          
          {/* Navigation links on the right */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-lg font-bold text-gray-800 hover:text-gray-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-lg font-bold text-gray-800 hover:text-gray-600 transition-colors">
              Gallery
            </a>
            <a href="#" className="text-lg font-bold text-gray-800 hover:text-gray-600 transition-colors">
              Contact
            </a>
            <a href="#" className="text-lg font-bold text-gray-800 hover:text-gray-600 transition-colors">
              About
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
