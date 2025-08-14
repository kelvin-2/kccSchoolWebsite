const Footer = () =>{
    return (
        <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-red-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">KCC</span>
                </div>
                <span className="text-lg font-bold">Kingdom Christian College</span>
              </div>
              <p className="text-gray-400">
                Excellence in Christian education since our founding.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#academics" className="text-gray-400 hover:text-white transition-colors">Academics</a></li>
                <li><a href="#admissions" className="text-gray-400 hover:text-white transition-colors">Admissions</a></li>
                <li><a href="#activities" className="text-gray-400 hover:text-white transition-colors">Activities</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Mtubatuba, KwaZulu-Natal</li>
                <li>+27 (0)XX XXX XXXX</li>
                <li>info@kingdomchristian.co.za</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">School Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Friday: 7:00 AM - 3:00 PM</li>
                <li>Office Hours: 7:30 AM - 4:00 PM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Kingdom Christian College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    );
}

export default Footer;