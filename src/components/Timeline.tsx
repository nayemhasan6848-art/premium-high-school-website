'use client'

import { motion } from 'framer-motion'

export default function Timeline() {
  const timelineEvents = [
    {
      year: '2000',
      title: 'Foundation',
      description: 'Elite Academy was established with a vision to provide world-class education.',
    },
    {
      year: '2008',
      title: 'Expansion',
      description: 'Expanded campus and introduced advanced technology in classrooms.',
    },
    {
      year: '2015',
      title: 'Innovation Hub',
      description: 'Launched state-of-the-art STEM labs and research facilities.',
    },
    {
      year: '2020',
      title: 'Digital Excellence',
      description: 'Pioneered hybrid learning during global challenges.',
    },
    {
      year: '2024',
      title: 'Global Recognition',
      description: 'Achieved international accreditation and quality standards.',
    },
  ]

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-transparent" />

      {/* Timeline Events */}
      <div className="space-y-12 md:space-y-16">
        {timelineEvents.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row gap-8 ${
              idx % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Content */}
            <div className="flex-1 md:flex md:justify-end">
              <div className="bg-white rounded-xl p-6 shadow-premium hover:shadow-premium-hover transition-all w-full md:max-w-sm">
                <p className="text-accent font-bold text-lg mb-2">{event.year}</p>
                <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>

            {/* Timeline Dot */}
            <div className="hidden md:flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: idx * 0.1 + 0.3, duration: 0.4 }}
                viewport={{ once: true }}
                className="w-4 h-4 bg-accent rounded-full ring-4 ring-white shadow-lg"
              />
            </div>

            {/* Mobile Spacer */}
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
