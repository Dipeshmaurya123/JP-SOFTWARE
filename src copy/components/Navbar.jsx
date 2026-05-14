function Navbar() {
  return (
    <div className="flex justify-between px-10 py-4 bg-white sticky top-0 z-50">
      <h1 className="font-bold text-blue-600">JP SOFTWARE SOLUTIONS</h1>

      <div className="space-x-6 text-sm">
        <a href="#home">HOME</a>
        <a href="#services">SERVICES</a>
        <a href="#pricing">PRICING</a>
        <a href="#contact">CONTACT</a>
      </div>
    </div>
  );
}

export default Navbar;
