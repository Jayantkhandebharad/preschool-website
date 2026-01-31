'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, Shield, Users, BookOpen, Award, Target, Eye, Lightbulb } from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Nurturing Care",
      description: "Every child receives individual attention in a loving, supportive environment that feels like home."
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Comprehensive safety measures including trained staff, secure facilities, and constant supervision."
    },
    {
      icon: Users,
      title: "Community Spirit",
      description: "Building strong relationships between children, families, and educators to create lasting bonds."
    },
    {
      icon: BookOpen,
      title: "Holistic Learning",
      description: "Balanced curriculum combining academics, arts, physical development, and social-emotional growth."
    }
  ]

  const achievements = [
    { number: "15+", label: "Years of Excellence" },
    { number: "500+", label: "Children Graduated" },
    { number: "25+", label: "National Awards" },
    { number: "98%", label: "Parent Satisfaction" },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-royal-blue via-blue-700 to-orchid text-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 leading-tight">
                Our Story Begins with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orchid block sm:inline">
                  Motherhood
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
                From one mother's vision to a community of families - discover the heart 
                behind Nyanarth Gurukkulam and our commitment to nurturing every child's unique journey.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="w-full h-64 sm:h-80 lg:h-96 border-4 border-orchid/20 shadow-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Children learning together in a nurturing environment"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mb-8 lg:mb-0"
            >
              <div className="w-full h-[400px] sm:h-[450px] lg:h-[500px] border-4 border-royal-blue/20 shadow-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Founder with children"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Quote card positioned to avoid overlap */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:-bottom-6 lg:-right-6 bg-orchid text-white p-3 sm:p-4 lg:p-6 rounded-xl shadow-lg max-w-[280px] sm:max-w-xs z-10">
                <p className="text-sm sm:text-base lg:text-xl font-bold leading-tight">"Every child deserves to shine"</p>
                <p className="text-purple-200 text-xs mt-1 sm:mt-2">- Founder, Nyanarth Gurukkulam</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 mt-8 lg:mt-0"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-royal-blue mb-6 leading-tight">
                A Mother's Dream Realized
              </h2>
              
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p className="leading-relaxed">
                  <strong className="text-royal-blue">When I became a mother,</strong> I experienced the profound 
                  love and protective instinct that every parent knows. I wanted the absolute best for my child - 
                  a place where they could learn, grow, and thrive in an environment as nurturing as our home.
                </p>
                
                <p className="leading-relaxed">
                  After searching countless preschools, I realized that what I was looking for didn't exist yet. 
                  That's when the vision for Nyanarth Gurukkulam was born - a place where every child would be 
                  treated with the same love and attention that I would give my own.
                </p>
                
                <p className="leading-relaxed">
                  <strong className="text-orchid">Fifteen years later,</strong> what started as a mother's dream 
                  has grown into a thriving community of families. We've watched over 500 children take their 
                  first steps into learning, make lifelong friendships, and discover their unique talents.
                </p>
                
                <p className="leading-relaxed">
                  Every morning when I see the joy in our children's faces, I'm reminded why we do what we do. 
                  This isn't just a preschool - it's truly a second home where every child's potential is 
                  nurtured with patience, understanding, and boundless love.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gurukkulam Philosophy */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-royal-blue mb-6">
              The Gurukkulam Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Rooted in ancient wisdom yet embracing modern learning, our Gurukkulam approach 
              creates a sacred space where knowledge flows naturally through love, respect, and 
              hands-on discovery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Eye,
                title: "Our Vision",
                description: "To be the most trusted early childhood education provider, where every child discovers their unique potential in a nurturing, joyful environment that feels like home."
              },
              {
                icon: Target,
                title: "Our Mission", 
                description: "To provide exceptional early childhood education through play-based learning, fostering creativity, confidence, and curiosity while maintaining the highest standards of care and safety."
              },
              {
                icon: Lightbulb,
                title: "Our Approach",
                description: "We believe learning happens best when children feel safe, loved, and inspired. Our curriculum balances structured activities with free play, academics with arts, and individual growth with social development."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center"
              >
                <div className="w-16 h-16 bg-orchid rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-royal-blue mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-royal-blue mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from how we interact with children 
              to how we support families in their parenting journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-royal-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-royal-blue mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Standards */}
      <section className="section-padding bg-royal-blue text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                Safety & Standards That Give You Peace of Mind
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-orchid mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Comprehensive Safety Protocols</h3>
                    <p className="text-blue-200">24/7 CCTV monitoring, secure entry systems, and emergency response procedures ensure your child's safety at all times.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-orchid mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Certified Excellence</h3>
                    <p className="text-blue-200">Nationally accredited programs with certified teachers who undergo continuous professional development and background checks.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Heart className="w-6 h-6 text-orchid mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Health & Nutrition</h3>
                    <p className="text-blue-200">Nutritious meals prepared fresh daily, regular health checkups, and a clean, hygienic environment maintained at all times.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <p className="text-3xl font-bold text-orchid mb-2">{achievement.number}</p>
                  <p className="text-blue-200 text-sm">{achievement.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage