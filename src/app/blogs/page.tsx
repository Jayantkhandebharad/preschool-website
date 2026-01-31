'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Heart, BookOpen, Users, Star, Baby } from 'lucide-react'

const BlogsPage = () => {
  const featuredPost = {
    id: 1,
    title: "Why Nyanarth Gurukkulam is the Right Choice for Your Child",
    excerpt: "Discover what sets us apart from other preschools and why hundreds of families trust us with their most precious treasures.",
    content: "Choosing the right preschool for your child is one of the most important decisions you'll make as a parent...",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "School Choice",
    featured: true
  }

  const blogPosts = [
    {
      id: 2,
      title: "Preparing Your Child for Their First Day at Preschool",
      excerpt: "Simple steps to help your little one feel confident and excited about starting their educational journey with us.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Parenting Tips",
      icon: Baby
    },
    {
      id: 3,
      title: "The Magic of Play-Based Learning in Early Childhood",
      excerpt: "How children learn best when education feels like play, and why this approach creates lifelong learners.",
      image: "https://images.unsplash.com/photo-1516627145797-5de4a6a6a21e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Education",
      icon: BookOpen
    },
    {
      id: 4,
      title: "Building Social Skills: The Foundation for Future Success",
      excerpt: "Why social-emotional learning is just as important as academics in your child's early development.",
      image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "February 28, 2024",
      readTime: "5 min read",
      category: "Child Development",
      icon: Users
    },
    {
      id: 5,
      title: "Nutrition That Fuels Growing Minds and Bodies",
      excerpt: "Our approach to healthy eating and how we make nutritious meals exciting for young children.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "February 22, 2024",
      readTime: "4 min read",
      category: "Health & Nutrition",
      icon: Heart
    },
    {
      id: 6,
      title: "Creative Arts: Unlocking Your Child's Imagination",
      excerpt: "How art, music, and drama activities support cognitive development and self-expression.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "February 15, 2024",
      readTime: "6 min read",
      category: "Creative Learning",
      icon: Star
    },
    {
      id: 7,
      title: "Parent Partnership: How We Work Together for Your Child",
      excerpt: "The importance of strong parent-teacher collaboration in your child's educational success.",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "February 8, 2024",
      readTime: "5 min read",
      category: "Parenting",
      icon: Users
    }
  ]

  const categories = [
    { name: "All Posts", count: 7, active: true },
    { name: "Parenting Tips", count: 3 },
    { name: "Education", count: 2 },
    { name: "Child Development", count: 2 }
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
              Insights & Stories from{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orchid">
                Our Community
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Helpful parenting tips, educational insights, and heartwarming stories from our 
              Gurukkulam family to support you on your parenting journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-display font-bold text-royal-blue">Featured Article</h2>
              <div className="hidden sm:flex items-center space-x-4 text-sm text-gray-500">
                <span className="bg-orchid text-white px-3 py-1 rounded-full">Featured</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="bg-royal-blue text-white px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-royal-blue leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-xl text-gray-600 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <Link
                    href={`/blogs/${featuredPost.id}`}
                    className="inline-flex items-center btn-primary"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Categories */}
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
                  key={category.name}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-orchid text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-orchid hover:text-white shadow-md'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-royal-blue px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-royal-blue mb-3 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blogs/${post.id}`}
                    className="inline-flex items-center text-orchid hover:text-royal-blue font-semibold transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="btn-outline">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-royal-blue text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Stay Connected with Our Community
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Get the latest parenting tips, educational insights, and updates from 
              Nyanarth Gurukkulam delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-orchid/30"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            
            <p className="text-sm text-blue-300 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BlogsPage