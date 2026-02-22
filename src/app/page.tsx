'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, BookOpen, Heart, ArrowRight, Star, Users, Award, Clock } from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Secure environment with CCTV monitoring, trained staff, and child-safe facilities ensuring your peace of mind.",
      color: "text-royal-blue"
    },
    {
      icon: BookOpen,
      title: "Creative Curriculum",
      description: "Age-appropriate learning programs that nurture creativity, critical thinking, and academic excellence.",
      color: "text-orchid"
    },
    {
      icon: Heart,
      title: "Joyful Learning",
      description: "Where education meets fun! Our play-based approach makes learning an exciting adventure every day.",
      color: "text-royal-blue"
    }
  ]

  const stats = [
    { number: "500+", label: "Happy Children", icon: Users },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "98%", label: "Parent Satisfaction", icon: Star },
    { number: "50+", label: "Awards Won", icon: Award },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-hero min-h-screen flex items-center py-8 sm:py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                A Second Home for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orchid">
                  Your Little One
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Where every child's unique potential blossoms through love, care, and creative learning. 
                Join our nurturing community at Nyanarth Gurukkulam.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="/programs" className="btn-primary text-lg px-6 sm:px-8 py-4 w-full sm:w-auto text-center min-h-[48px] flex items-center justify-center">
                  Explore Programs
                </Link>
                <Link href="/contact" className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-royal-blue text-lg px-6 sm:px-8 py-4 w-full sm:w-auto text-center min-h-[48px] flex items-center justify-center">
                  Schedule Visit
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Happy children playing and learning"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-2xl"
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orchid rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-royal-blue">500+</p>
                    <p className="text-gray-600 text-sm">Happy Families</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold text-royal-blue mb-4 leading-tight">
              Why Choose Nyanarth Gurukkulam?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every parent wants the best for their child. Here's why families trust us with their most precious treasures.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg card-hover text-center"
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 ${feature.color === 'text-royal-blue' ? 'bg-royal-blue' : 'bg-orchid'} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-royal-blue text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 leading-tight">
              Trusted by Families Nationwide
            </h2>
            <p className="text-xl text-blue-200">
              Numbers that speak for our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orchid/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-orchid" />
                </div>
                <motion.p 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.p>
                <p className="text-blue-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orchid to-light-orchid text-white">
        <div className="container-custom">
          <div className="text-center">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Begin Your Child's Journey?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join hundreds of families who've chosen Nyanarth Gurukkulam as their child's 
              second home. Schedule a visit today and see the difference.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full sm:w-auto flex justify-center"
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-white text-orchid hover:bg-gray-100 font-semibold py-4 px-6 sm:px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto min-h-[48px]"
              >
                Schedule Your Visit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage