'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MenuIcon, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'Campus Life', href: '#campus' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'News', href: '#news' },
  ]

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-premium backdrop-blur-md'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">
              EA
            </div>
            <span className={`font-bold text-xl transition-colors ${
              scrolled ? 'text-primary' : 'text-white'
            }`}>
              Elite Academy
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  scrolled
                    ? 'text-primary hover:bg-highlight'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              scrolled
                ? 'text-primary border-2 border-primary hover:bg-highlight'
                : 'text-white border-2 border-white hover:bg-white/10'
            }`}>
              Login
            </button>
            <button className="px-6 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-premium">
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10"
          >
            {isOpen ? (
              <X className={scrolled ? 'text-primary' : 'text-white'} />
            ) : (
              <MenuIcon className={scrolled ? 'text-primary' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -20,
          }}
          transition={{ duration: 0.2 }}
          className={`md:hidden overflow-hidden ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 py-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-primary hover:bg-highlight rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-4 px-4 border-t border-gray-200">
              <button className="px-4 py-2 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-highlight transition-all">
                Login
              </button>
              <button className="px-4 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Enroll Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
