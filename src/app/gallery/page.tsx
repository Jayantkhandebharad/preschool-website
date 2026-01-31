'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, Heart, Download, Share2, Eye } from 'lucide-react'

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Photos', count: 24 },
    { id: 'classroom', name: 'Learning Moments', count: 8 },
    { id: 'outdoor', name: 'Outdoor Fun', count: 6 },
    { id: 'arts', name: 'Creative Arts', count: 5 },
    { id: 'events', name: 'Special Events', count: 5 }
  ]

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Children engaged in creative learning activities',
      category: 'classroom',
      title: 'Creative Learning Time',
      description: 'Our little artists exploring colors and creativity during art class.',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Happy children playing together outdoors',
      category: 'outdoor',
      title: 'Playground Adventures',
      description: 'Laughter and friendship bloom during outdoor playtime.',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1516627145797-5de4a6a6a21e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Children doing arts and crafts',
      category: 'arts',
      title: 'Little Artists at Work',
      description: 'Masterpieces in the making during our daily art sessions.',
      aspectRatio: 'aspect-[4/5]'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Reading time with teacher and students',
      category: 'classroom',
      title: 'Story Time Magic',
      description: 'Imaginations soar during our interactive storytelling sessions.',
      aspectRatio: 'aspect-[16/9]'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Children enjoying healthy snack time',
      category: 'classroom',
      title: 'Healthy Snack Time',
      description: 'Nutritious meals shared with friends in our cozy dining area.',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Music and movement activity',
      category: 'classroom',
      title: 'Music & Movement',
      description: 'Dancing and singing together creates joyful memories.',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Children building with blocks',
      category: 'classroom',
      title: 'Building Tomorrow',
      description: 'Engineering minds at work with our construction play center.',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Outdoor nature exploration',
      category: 'outdoor',
      title: 'Nature Explorers',
      description: 'Discovering the wonders of nature in our outdoor classroom.',
      aspectRatio: 'aspect-[4/5]'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Group activity and teamwork',
      category: 'classroom',
      title: 'Teamwork Makes Dreams Work',
      description: 'Learning cooperation and friendship through group activities.',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Special celebration event',
      category: 'events',
      title: 'Celebration Time',
      description: 'Special moments and achievements we celebrate together.',
      aspectRatio: 'aspect-[16/9]'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Children painting at easels',
      category: 'arts',
      title: 'Easel Artists',
      description: 'Every stroke tells a story in our art studio.',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Garden activity with children',
      category: 'outdoor',
      title: 'Little Gardeners',
      description: 'Growing plants and knowledge in our school garden.',
      aspectRatio: 'aspect-[4/5]'
    },
    // Add more images to reach 24 total
    ...Array.from({ length: 12 }, (_, i) => ({
      id: 13 + i,
      src: `https://images.unsplash.com/photo-${[
        '1544717297-fa95b6ee9643',
        '1503454537195-1dcabb73ffb9',
        '1516627145797-5de4a6a6a21e',
        '1544717302-de2939b7ef71',
        '1571019613454-1cb2f99b2d8b',
        '1513475382585-d06e58bcb0e0'
      ][i % 6]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`,
      alt: `Gallery image ${13 + i}`,
      category: ['classroom', 'outdoor', 'arts', 'events'][Math.floor(Math.random() * 4)],
      title: `Memory ${13 + i}`,
      description: `Beautiful moments captured at Nyanarth Gurukkulam.`,
      aspectRatio: ['aspect-[4/3]', 'aspect-[3/4]', 'aspect-[4/5]', 'aspect-[16/9]'][Math.floor(Math.random() * 4)]
    }))
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

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
              Capturing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orchid">
                Precious Moments
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Every smile, every discovery, every friendship formed - these are the moments that make 
              Nyanarth Gurukkulam truly special. Explore our gallery of memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-orchid text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-orchid hover:text-white shadow-md'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.id}-${selectedCategory}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                  <div className={`relative ${image.aspectRatio} overflow-hidden`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-orchid/0 group-hover:bg-orchid/80 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                        <Eye className="w-8 h-8 mx-auto mb-2" />
                        <p className="font-semibold">View Photo</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-royal-blue mb-2 line-clamp-1">
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="btn-outline">
              Load More Photos
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[95vh] sm:max-h-[90vh] bg-white rounded-xl sm:rounded-2xl overflow-hidden mx-2 sm:mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-black/60 hover:bg-black/80 active:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors duration-300 touch-manipulation"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Image */}
              <div className="relative aspect-[4/3] max-h-[60vh] sm:max-h-[70vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-royal-blue mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <button className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-orchid/10 text-orchid rounded-lg hover:bg-orchid hover:text-white active:bg-orchid active:text-white transition-colors duration-300 touch-manipulation min-h-[44px]">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm sm:text-base">Like</span>
                  </button>
                  <button className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-royal-blue/10 text-royal-blue rounded-lg hover:bg-royal-blue hover:text-white active:bg-royal-blue active:text-white transition-colors duration-300 touch-manipulation min-h-[44px]">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm sm:text-base">Share</span>
                  </button>
                  <button className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 active:bg-gray-200 transition-colors duration-300 touch-manipulation min-h-[44px]">
                    <Download className="w-4 h-4" />
                    <span className="text-sm sm:text-base">Download</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Ready to Create Beautiful Memories?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Your child's journey of wonder and discovery starts here. Join our community 
              and become part of these precious moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orchid hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Schedule a Visit
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orchid font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Contact Us Today
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default GalleryPage