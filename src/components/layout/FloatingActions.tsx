'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'

const FloatingActions = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+1234567890" // Replace with actual WhatsApp number
    const message = "Hello! I'm interested in learning more about Nyanarth Gurukkulam programs."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleCallClick = () => {
    window.location.href = "tel:+1234567890" // Replace with actual phone number
  }

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-40 pointer-events-none">
      <div className="container-custom relative">
        {/* Call Button - Bottom Left */}
        <motion.button
          onClick={handleCallClick}
          className="absolute bottom-0 left-3 sm:left-4 w-14 h-14 sm:w-16 sm:h-16 bg-royal-blue hover:bg-dark-royal active:bg-dark-royal text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center pointer-events-auto touch-manipulation"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            y: [0, -5, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
          aria-label="Call us"
        >
          <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
        </motion.button>

        {/* WhatsApp Button - Bottom Right */}
        <motion.button
          onClick={handleWhatsAppClick}
          className="absolute bottom-0 right-3 sm:right-4 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 active:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center pointer-events-auto touch-manipulation"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            y: [0, -5, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut",
            delay: 0.5
          }}
          aria-label="WhatsApp us"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </motion.button>

        {/* Call Button Label */}
        <motion.div
          className="absolute bottom-16 left-4 bg-royal-blue text-white text-xs px-3 py-2 rounded-lg shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
        >
          Call Us
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-royal-blue"></div>
        </motion.div>

        {/* WhatsApp Button Label */}
        <motion.div
          className="absolute bottom-16 right-4 bg-green-500 text-white text-xs px-3 py-2 rounded-lg shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
        >
          WhatsApp
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-500"></div>
        </motion.div>
      </div>
    </div>
  )
}

export default FloatingActions