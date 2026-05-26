export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#17252a] text-gray-300 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Ismail Akhtar</h3>
            <p className="text-sm">UI/UX Manager & Frontend Tech Lead with 10+ years of experience building scalable enterprise applications.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-[#3aafa9] transition">About</a></li>
              <li><a href="/services" className="hover:text-[#3aafa9] transition">Services</a></li>
              <li><a href="/portfolio" className="hover:text-[#3aafa9] transition">Portfolio</a></li>
              <li><a href="/blog" className="hover:text-[#3aafa9] transition">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:ismailakhtar786@gmail.com" className="hover:text-[#3aafa9] transition">ismailakhtar786@gmail.com</a></li>
              <li>Phone: <a href="tel:+917020315520" className="hover:text-[#3aafa9] transition">+91-7020315520</a></li>
              <li>Location: India</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Follow Me</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.behance.net/ismailakht6867" target="_blank" rel="noopener noreferrer" className="hover:text-[#3aafa9] transition">Behance Portfolio</a></li>
              <li><a href="https://www.linkedin.com/in/ismail-akhtar" target="_blank" rel="noopener noreferrer" className="hover:text-[#3aafa9] transition">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3aafa9] transition">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Ismail Akhtar. All rights reserved. | UI/UX Design & Frontend Architecture</p>
        </div>
      </div>
    </footer>
  );
}
