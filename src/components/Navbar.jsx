import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone,
  ChevronRight
} from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null)
  const location = useLocation()

  const navigation = [
    {
      name: 'About',
      dropdown: [
        { name: 'Our Purpose', path: '/our-purpose', description: 'Our mission in eye care' },
        { name: 'Patient-First Philosophy', path: '/patient-first', description: 'Putting patients first' },
        { name: 'Surgeon Collaboration', path: '/surgeon-collaboration', description: 'Working with experts' },
        { name: 'Our Team', path: '/our-team', description: 'Meet our specialists' },
      ],
    },
    {
      name: 'Products',
      dropdown: [
        { name: 'Cataract Solutions', path: '/products/cataract', description: 'Advanced cataract care' },
        { name: 'Refractive Technologies', path: '/products/refractive', description: 'Vision correction' },
        { name: 'Retinal Care', path: '/products/retinal', description: 'Retinal treatments' },
        { name: 'Surgical Equipment', path: '/products/surgical', description: 'Operating tools' },
      ],
    },
    {
      name: 'Support & Services',
      dropdown: [
        { name: 'Practice Development', path: '/support/development', description: 'Grow your practice' },
        { name: 'Application Support', path: '/support/application', description: 'Technical assistance' },
        { name: 'After Sales Service', path: '/support/service', description: 'Post-purchase support' },
        { name: 'Training Programs', path: '/support/training', description: 'Skill development' },
      ],
    },
    { name: 'Contact', path: '/contact' },
    { name: 'Inquiry', path: '/inquiry' },
  ]

  const toggleMobileDropdown = (itemName) => {
    setMobileOpenDropdown(mobileOpenDropdown === itemName ? null : itemName)
  }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 border-b border-gray-100">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - No eye icon */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <span className="text-white font-bold text-xl">D</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 tracking-tight">
                <span className="text-primary-600">Do</span>
                <span className="text-gray-800">medicals</span>
              </span>
              <span className="text-xs text-gray-500 font-medium">Advanced Ophthalmic Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation - UNCHANGED */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onClick={()=>setOpenDropdown(item?.name)}
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                // onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`flex items-center px-4 py-3 text-lg font-semibold rounded-lg transition-all duration-200 ${
                      location.pathname === item.path
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button className="flex items-center px-4 py-3 text-lg font-semibold text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-all duration-200">
                    {item.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                )}

                {item.dropdown && openDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="flex flex-col p-4 hover:bg-primary-50 transition-colors duration-150 border-b border-gray-50 last:border-b-0"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span className="font-semibold text-gray-900 group-hover:text-primary-600">
                          {subItem.name}
                        </span>
                        {subItem.description && (
                          <span className="text-xs text-gray-500 mt-1">
                            {subItem.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Contact Button */}
            <Link 
              to="/contact" 
              className="ml-4 flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - FIXED */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100">
            <div className="space-y-1 pt-4">
              {navigation.map((item) => (
                <div key={item.name} className="space-y-1">
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-semibold block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-semibold"
                      >
                        <span>{item.name}</span>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${mobileOpenDropdown === item.name ? 'rotate-90' : ''}`} />
                      </button>
                      
                      {/* Dropdown items - Only show if this dropdown is open */}
                      {mobileOpenDropdown === item.name && (
                        <div className="ml-4 space-y-1">
                          {item.dropdown?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="flex flex-col px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg block"
                              onClick={() => {
                                setIsOpen(false)
                                setMobileOpenDropdown(null)
                              }}
                            >
                              <span className="font-medium">{subItem.name}</span>
                              {subItem.description && (
                                <span className="text-xs text-gray-500 mt-1">
                                  {subItem.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="flex items-center justify-center space-x-2 px-5 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 mt-4"
                onClick={() => {
                  setIsOpen(false)
                  setMobileOpenDropdown(null)
                }}
              >
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar