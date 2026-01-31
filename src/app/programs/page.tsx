'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Palette, Music, Book, Users, Clock, Calendar, ArrowRight, Star, Baby, GraduationCap } from 'lucide-react'

const ProgramsPage = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)

  const programs = [
    {
      id: 'nursery',
      title: 'Nursery',
      ageRange: '2-3 Years',
      icon: Baby,
      color: 'from-pink-400 to-pink-600',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      shortDescription: 'Gentle introduction to social learning through play and exploration.',
      fullDescription: 'Our Nursery program provides a warm, nurturing environment where toddlers begin their educational journey. Through sensory play, music, and gentle social interaction, children develop foundational skills while feeling safe and loved.',
      focuses: [
        'Sensory exploration and discovery',
        'Basic social skills and sharing',
        'Simple language development',
        'Fine and gross motor skills',
        'Emotional regulation and comfort',
        'Independence in daily activities'
      ],
      schedule: {
        duration: '3-4 hours daily',
        ratio: '1:4 teacher-to-child ratio',
        activities: 'Play-based learning with structured routines'
      },
      highlights: ['Potty training support', 'Naptime facility', 'Parent communication daily']
    },
    {
      id: 'kg1',
      title: 'KG1',
      ageRange: '3-4 Years',
      icon: Book,
      color: 'from-blue-400 to-blue-600',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      shortDescription: 'Building confidence through structured learning and creative expression.',
      fullDescription: 'KG1 students engage in more structured learning while maintaining the joy of discovery. Our curriculum balances academic readiness with creative expression, helping children build confidence and curiosity.',
      focuses: [
        'Pre-literacy and phonics introduction',
        'Number recognition and basic math',
        'Creative arts and crafts',
        'Science exploration and experiments',
        'Social skills and teamwork',
        'Physical development through play'
      ],
      schedule: {
        duration: '4-5 hours daily',
        ratio: '1:6 teacher-to-child ratio',
        activities: 'Balanced mix of learning and play'
      },
      highlights: ['Field trips and outdoor learning', 'Individual progress tracking', 'Skill-building workshops']
    },
    {
      id: 'kg2',
      title: 'KG2',
      ageRange: '4-5 Years',
      icon: GraduationCap,
      color: 'from-purple-400 to-purple-600',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      shortDescription: 'Preparing confident learners for primary school success.',
      fullDescription: 'Our KG2 program focuses on school readiness while maintaining our nurturing approach. Children develop advanced skills in literacy, numeracy, and critical thinking, preparing them for a smooth transition to primary school.',
      focuses: [
        'Advanced reading and writing skills',
        'Mathematical concepts and problem-solving',
        'Scientific thinking and observation',
        'Leadership and presentation skills',
        'Complex social interactions',
        'Independence and responsibility'
      ],
      schedule: {
        duration: '5-6 hours daily',
        ratio: '1:8 teacher-to-child ratio',
        activities: 'Project-based learning with assessments'
      },
      highlights: ['School readiness assessments', 'Graduation ceremony', 'Primary school preparation']
    }
  ]

  const commonFeatures = [
    {
      icon: Palette,
      title: 'Creative Arts',
      description: 'Daily art, music, and drama activities to foster creativity'
    },
    {
      icon: Music,
      title: 'Music & Movement',
      description: 'Songs, dance, and rhythm activities for holistic development'
    },
    {
      icon: Users,
      title: 'Social Learning',
      description: 'Collaborative activities that build friendship and empathy'
    },
    {
      icon: Book,
      title: 'Language Rich',
      description: 'Storytelling, conversation, and early literacy in a fun way'
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
              Programs Designed for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orchid">
                Every Stage
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              From first steps to school readiness, our age-appropriate programs nurture your child's 
              natural curiosity and love for learning at every developmental milestone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-royal-blue mb-4">
              Choose the Perfect Program
            </h2>
            <p className="text-xl text-gray-600">
              Click on any program to learn more about what your child will experience
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 touch-manipulation ${
                  selectedProgram === program.id ? 'ring-4 ring-orchid shadow-2xl' : 'hover:shadow-xl active:shadow-xl'
                }`}
                onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-48">
                  <Image
                    src={program.image}
                    alt={`${program.title} program`}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-80`}></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1 leading-tight">
                      {program.title}
                    </h3>
                    <p className="text-white/90 text-sm">{program.ageRange}</p>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                    {program.shortDescription}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{program.schedule.duration}</span>
                    </div>
                    <ArrowRight className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      selectedProgram === program.id ? 'rotate-90 text-orchid' : 'text-gray-400'
                    }`} />
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {selectedProgram === program.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t overflow-hidden"
                    >
                      <div className="p-4 sm:p-6 bg-gray-50">
                        <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                          {program.fullDescription}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                          <div>
                            <h4 className="font-semibold text-royal-blue mb-3">What We Focus On:</h4>
                            <ul className="space-y-2 text-sm">
                              {program.focuses.map((focus, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <Star className="w-4 h-4 text-orchid mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{focus}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-royal-blue mb-3">Program Details:</h4>
                            <div className="space-y-3 text-sm">
                              <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4 text-orchid" />
                                <span className="text-gray-600">{program.schedule.duration}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Users className="w-4 h-4 text-orchid" />
                                <span className="text-gray-600">{program.schedule.ratio}</span>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Calendar className="w-4 h-4 text-orchid mt-0.5" />
                                <span className="text-gray-600">{program.schedule.activities}</span>
                              </div>
                            </div>

                            <div className="mt-4">
                              <h5 className="font-medium text-gray-800 mb-2">Special Features:</h5>
                              <ul className="space-y-1 text-sm text-gray-600">
                                {program.highlights.map((highlight, idx) => (
                                  <li key={idx} className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-orchid rounded-full"></div>
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-royal-blue mb-4">
              What All Programs Include
            </h2>
            <p className="text-xl text-gray-600">
              Every child enjoys these enriching experiences regardless of their program
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commonFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orchid/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-orchid" />
                </div>
                <h3 className="text-xl font-semibold text-royal-blue mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orchid to-light-orchid text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Enroll Your Child?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join our community of families and give your child the best start in their educational journey. 
              Schedule a visit to see our programs in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orchid hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Schedule a Visit
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orchid font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProgramsPage