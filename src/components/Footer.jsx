function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">
        {/* Logo */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400">
            JP SOFTWARE SOLUTIONS
          </h2>
          <p className="mt-2 text-gray-400">Affordable Web Hosting Services</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Careers</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Helpdesk</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Payments</h3>
          <p className="text-gray-400">GPay, Paytm, UPI</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-10 text-gray-500 text-sm">
        © 2026 JP Software Solutions. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
