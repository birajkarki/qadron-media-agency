const Navbar = () => {
  return (
    <nav className="py-2 w-full ">
      <div className="w-[89%] m-auto max-w-[1400px] flex justify-between items-center ">
        <a href="/">
          <h1 className="text-3xl font-bold text-primary"> Qadron Media</h1>
        </a>
        <ul className="flex space-x-8">
          <li>
            <a href="/" className="text-lg font-medium text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-lg font-medium text-primary">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="text-lg font-medium text-primary">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
