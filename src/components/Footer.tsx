

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 px-6 md:px-20">

      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">About Me</h3>
          <p className="text-sm leading-relaxed">
            I am a passionate Frontend Developer specializing in building
            beautiful, responsive and user-friendly interfaces.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">Skills</li>
            <li className="hover:text-white cursor-pointer transition">Projects</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
          <p className="text-sm">adeyemiogunnaike02@gmail.com</p>
          <p className="text-sm">Location: Lagos, Nigeria</p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-700 my-8"></div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between text-sm">
        <p>© {new Date().getFullYear()} Adeyemi Ogunnaike. All rights reserved.</p>

       
      </div>
    </footer>
  );
}
