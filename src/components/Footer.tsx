'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '#hero' },
        { label: 'About Us', href: '#about' },
        { label: 'Academics', href: '#academics' },
        { label: 'Admissions', href: '#admissions' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Student Portal', href: '#' },
        { label: 'Parent Portal', href: '#' },
        { label: 'Staff Directory', href: '#' },
        { label: 'Calendar', href: '#' },
      ],
    },
    {
      title: 'Information',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Contact Us', href: '#contact' },
        { label: 'News & Events', href: '#news' },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-blue-600 rounded-lg flex items-center justify-center font-bold">
                EA
              </div>
              <span className="font-bold text-xl">Elite Academy</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering students to become tomorrow's leaders through academic excellence and character development.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-white/10 hover:bg-accent p-3 rounded-lg transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            >
              <h3 className="font-bold text-lg mb-4 text-accent">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-bold text-lg mb-4 text-accent">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 text-accent mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-300 text-sm">123 Academy Street, Education City, ST 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-accent" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+1234567890" className="text-gray-300 text-sm hover:text-accent">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-accent" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:info@eliteacademy.edu" className="text-gray-300 text-sm hover:text-accent">
                    info@eliteacademy.edu
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Elite Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
