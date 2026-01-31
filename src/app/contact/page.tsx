'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar } from 'lucide-react'

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "123 Children's Lane",
        "Happy Valley, City 12345",
        "State, Country"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+1 (234) 567-8900",
        "+1 (234) 567-8901"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "hello@nyanarthgurukkulam.com",
        "admissions@nyanarthgurukkulam.com"
      ]
    },
    {
      icon: Clock,
      title: "School Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-royal-blue via-blue-700 to-orchid text-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6">
              Let's Start{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orchid">
                This Journey Together
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              We'd love to meet you and your little one! Reach out to schedule a visit, 
              ask questions, or learn more about how we can support your child's growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-display font-bold text-royal-blue mb-6">
                  Schedule Your Visit
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Fill out this form and we'll get back to you within 24 hours to schedule 
                  your personalized tour and meet our amazing team.
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Parent/Guardian Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-orchid/30 focus:border-orchid transition-all duration-300 text-base min-h-[48px] touch-manipulation"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-orchid/30 focus:border-orchid transition-all duration-300 text-base min-h-[48px] touch-manipulation"
                        placeholder="+1 (234) 567-8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-orchid/30 focus:border-orchid transition-all duration-300 text-base min-h-[48px] touch-manipulation"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Child's Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-orchid/30 focus:border-orchid transition-all duration-300 text-base min-h-[48px] touch-manipulation"
                        placeholder="Child's full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Child's Age
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-orchid/30 focus:border-orchid transition-all duration-300 text-base min-h-[48px] touch-manipulation">
                        <option value="">Select age</option>
                        <option value="2">2 years old</option>
                        <option value="3">3 years old</option>
                        <option value="4">4 years old</option>
                        <option value="5">5 years old</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Program of Interest
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-orchid/30 focus:border-orchid transition-all duration-300 text-base min-h-[48px] touch-manipulation">
                      <option value="">Select a program</option>
                      <option value="nursery">Nursery (2-3 years)</option>
                      <option value="kg1">KG1 (3-4 years)</option>
                      <option value="kg2">KG2 (4-5 years)</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Visit Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-orchid/30 focus:border-orchid transition-all duration-300 text-base min-h-[48px] touch-manipulation"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Questions or Special Requirements
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-orchid/30 focus:border-orchid transition-all duration-300 resize-none text-base min-h-[100px] touch-manipulation"
                      placeholder="Tell us anything else you'd like us to know..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center space-x-2 min-h-[48px] text-base touch-manipulation"
                  >
                    <Send className="w-5 h-5" />
                    <span>Schedule My Visit</span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-royal-blue mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We're here to answer all your questions and help you discover why 
                  Nyanarth Gurukkulam is the perfect second home for your little one.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-lg"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orchid/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-orchid" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-royal-blue mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-r from-royal-blue to-orchid rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Need immediate assistance?</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-3 rounded-lg transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-3 rounded-lg transition-colors duration-300">
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-royal-blue mb-4">
              Find Us Easily
            </h2>
            <p className="text-xl text-gray-600">
              Conveniently located in the heart of the community
            </p>
          </motion.div>

          {/* Map Placeholder - In a real implementation, you'd integrate Google Maps or similar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center text-gray-500"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-orchid" />
              <p className="text-lg font-medium">Interactive Map</p>
              <p className="text-sm">Google Maps integration would go here</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage