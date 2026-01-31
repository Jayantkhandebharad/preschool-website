'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Heart, Facebook, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/programs', label: 'Programs' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  const programs = [
    { href: '/programs#nursery', label: 'Nursery (2-3 years)' },
    { href: '/programs#kg1', label: 'KG1 (3-4 years)' },
    { href: '/programs#kg2', label: 'KG2 (4-5 years)' },
  ]

  const socialLinks = [
    { href: '#', icon: Facebook, label: 'Facebook' },
    { href: '#', icon: Instagram, label: 'Instagram' },
    { href: 'https://www.youtube.com/@kidsartguru', icon: Youtube, label: 'YouTube' },
  ]

  return (
    <footer className="bg-royal-blue text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orchid to-light-orchid rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg sm:text-xl">NG</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-display font-bold leading-tight">Nyanarth Gurukkulam</h3>
                <p className="text-sm text-blue-200 leading-tight">A Second Home</p>
              </div>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed text-sm sm:text-base">
              Where every child's journey begins with love, care, and endless possibilities. 
              Creating tomorrow's leaders through nurturing education.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href !== '#' ? '_blank' : undefined}
                  rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                  className="w-11 h-11 bg-orchid/20 hover:bg-orchid rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 min-h-[44px]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-blue-200 hover:text-orchid transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orchid mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.href}>
                  <Link 
                    href={program.href}
                    className="text-blue-200 hover:text-orchid transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orchid mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orchid mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    123 Children's Lane<br />
                    Happy Valley, City 12345<br />
                    State, Country
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 min-h-[44px]">
                <Phone className="w-5 h-5 text-orchid flex-shrink-0" />
                <a 
                  href="tel:+1234567890"
                  className="text-blue-200 hover:text-orchid transition-colors duration-300 text-sm sm:text-base py-2 flex-1"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div className="flex items-center space-x-3 min-h-[44px]">
                <Mail className="w-5 h-5 text-orchid flex-shrink-0" />
                <a 
                  href="mailto:hello@nyanarthgurukkulam.com"
                  className="text-blue-200 hover:text-orchid transition-colors duration-300 text-sm sm:text-base py-2 flex-1 break-all"
                >
                  hello@nyanarthgurukkulam.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orchid mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    Mon - Fri: 8:00 AM - 5:00 PM<br />
                    Sat: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-blue-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-200 flex items-center justify-center space-x-2">
            <span>&copy; 2024 Nyanarth Gurukkulam. Made with</span>
            <Heart className="w-4 h-4 text-orchid" />
            <span>for little dreamers.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer