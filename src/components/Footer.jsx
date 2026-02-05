import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Eye } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-white">
      <div className="w-[90%] mx-auto section-padding">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-black">Domedicals</div>
                <div className="text-sm text-gray-300">Advanced Ophthalmic Care</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering ophthalmologists with cutting-edge technology and unparalleled support for better patient outcomes.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Our Purpose', path: '/our-purpose' },
                { name: 'Patient-First Philosophy', path: '/patient-first' },
                { name: 'Our Team', path: '/our-team' },
                { name: 'Products Catalog', path: '/products' },
                { name: 'Support Center', path: '/support' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <div className="w-1 h-1 bg-primary-400 rounded-full mr-2"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {[
                'Cataract Solutions',
                'Refractive Technologies',
                'Retinal Care Systems',
                'Surgical Equipment',
                'Diagnostic Tools',
                'Practice Management',
              ].map((product) => (
                <li key={product}>
                  <a href="#" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-400 mr-3 mt-1" />
                <div>
                  <div className="font-medium">Main Office</div>
                  <div className="text-gray-300 text-sm">123 Medical Drive, Suite 500</div>
                  <div className="text-gray-300 text-sm">Boston, MA 02115</div>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-400 mr-3" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-400 mr-3" />
                <a href="mailto:info@domedicals.com" className="hover:text-white transition-colors">
                  info@domedicals.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Domedicals. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
