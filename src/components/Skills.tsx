'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { skills } from '@/data/portfolio'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState('Programming Languages')

  const categories = [
    { key: 'Programming Languages', label: 'Programming', color: 'from-blue-500 to-cyan-500' },
    { key: 'Frontend Development', label: 'Frontend', color: 'from-green-500 to-emerald-500' },
    { key: 'Backend & APIs', label: 'Backend', color: 'from-purple-500 to-pink-500' },
    { key: 'Database & Storage', label: 'Database', color: 'from-orange-500 to-red-500' },
    { key: 'DevOps & Tools', label: 'DevOps', color: 'from-red-500 to-pink-500' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const SkillBar = ({ skill, index }: { skill: any; index: number }) => (
    <motion.div
      variants={itemVariants}
      className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{skill.icon}</span>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {skill.name}
          </h3>
        </div>
        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
          {skill.level}%
        </span>
      </div>
      
      <div className="relative">
        <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          />
        </div>
      </div>
      
      {/* Tooltip on hover */}
      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : skill.level >= 60 ? 'Intermediate' : 'Beginner'}
        </p>
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills[activeCategory as keyof typeof skills].map((skill, index) => (
              <div key={skill.name} className="group">
                <SkillBar skill={skill} index={index} />
              </div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Always Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Technology evolves rapidly, and I'm committed to staying current with the latest trends, 
                best practices, and emerging technologies. I regularly take courses, attend workshops, 
                and contribute to open-source projects to expand my skill set.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                {['React 18', 'Next.js 14', 'TypeScript 5', 'Node.js 20', 'Python 3.12'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white dark:bg-dark-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills