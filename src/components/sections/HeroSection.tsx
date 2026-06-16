'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import FloatingShapes from '@/components/3D/FloatingShapes'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary pt-20"
    >
      {/* Background 3D Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingShapes />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />

      {/* Content Container */}
      <motion.div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Badge */}
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 w-fit">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-white text-sm font-medium">Welcome to Excellence</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Shape Your
              <span className="block gradient-text"> Future Today</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl"
            >
              Experience premium education that combines academic excellence with character development. Join 1,500+ students building their path to success.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center space-x-2 px-8 py-4 bg-accent hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-all shadow-premium hover:shadow-premium-lg"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg font-bold text-lg transition-all backdrop-blur-sm"
              >
                <Play size={20} />
                <span>Virtual Tour</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-8 pt-8 border-t border-white/10"
            >
              <div>
                <p className="text-white font-bold text-xl">98%</p>
                <p className="text-gray-300 text-sm">Graduation Rate</p>
              </div>
              <div>
                <p className="text-white font-bold text-xl">50+</p>
                <p className="text-gray-300 text-sm">Faculty Members</p>
              </div>
              <div>
                <p className="text-white font-bold text-xl">25+</p>
                <p className="text-gray-300 text-sm">Academic Programs</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-screen lg:h-auto"
          >
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-white font-bold text-2xl mb-4">Elite Academy</h3>
                <p className="text-gray-200 text-sm mb-6">Transform your potential into excellence through world-class education.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '1500+', label: 'Students' },
                  { number: '25+', label: 'Programs' },
                  { number: '50+', label: 'Faculty' },
                  { number: '98%', label: 'Success' },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-center border border-white/20"
                  >
                    <p className="text-white font-bold text-lg">{stat.number}</p>
                    <p className="text-gray-300 text-xs">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
