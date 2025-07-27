'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Coffee, Heart, Zap } from 'lucide-react'
import { personalInfo, stats } from '@/data/portfolio'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "I believe in writing maintainable, scalable, and well-documented code that stands the test of time."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency is always a top priority in my development process."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User Experience",
      description: "Creating intuitive and delightful user experiences that solve real problems and add value."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Staying updated with the latest technologies and best practices in the ever-evolving tech landscape."
    }
  ]

  const funFacts = [
    "🎮 Gaming enthusiast who loves strategy games",
    "📚 Avid reader of tech blogs and documentation",
    "🌱 Always learning new technologies and frameworks",
    "☕ Coffee-powered developer (3+ cups daily!)",
    "🎵 Code better with lo-fi music in the background"
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {personalInfo.bio}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge with the developer community. I believe in the power of collaboration and 
                  continuous learning to drive innovation.
                </p>
              </div>

              {/* Fun Facts */}
              <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="mr-2">🎯</span>
                  Fun Facts About Me
                </h3>
                <ul className="space-y-2">
                  {funFacts.map((fact, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="text-gray-600 dark:text-gray-300 flex items-center"
                    >
                      {fact}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Values */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                What I Value
              </h3>
              <div className="grid gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats (from portfolio.ts) */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About