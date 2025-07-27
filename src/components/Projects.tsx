'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ExternalLink, Github, Filter } from 'lucide-react'
import { projects } from '@/data/portfolio'
import Image from 'next/image'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState('all')
  const [visibleProjects, setVisibleProjects] = useState(6)

  const categories = ['all', 'Full Stack', 'Team Project', 'API Integration', 'Personal']

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

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

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      variants={itemVariants}
      className="group bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">
            {project.category === 'Full Stack' ? '🚀' : 
             project.category === 'Team Project' ? '👥' : 
             project.category === 'API Integration' ? '🔗' : 
             project.category === 'Personal' ? '💼' : '💻'}
          </div>
        </div>
        
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
            aria-label="View source code"
          >
            <Github size={20} />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
            aria-label="View live demo"
          >
            <ExternalLink size={20} />
          </a>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full">
              Featured
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <Github size={16} />
            <span className="text-sm font-medium">Code</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <ExternalLink size={16} />
            <span className="text-sm font-medium">Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  filter === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-dark-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 shadow-md'
                }`}
              >
                <Filter size={16} />
                <span>{category === 'all' ? 'All Projects' : category}</span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.slice(0, visibleProjects).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* Load More Button */}
          {filteredProjects.length > visibleProjects && (
            <motion.div
              variants={itemVariants}
              className="text-center mt-12"
            >
              <button
                onClick={() => setVisibleProjects(prev => prev + 3)}
                className="btn-primary"
              >
                Load More Projects
              </button>
            </motion.div>
          )}

          {/* GitHub CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Want to see more?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Check out my GitHub profile for more projects, contributions, and code samples. 
                I'm always working on something new!
              </p>
              <a
                href="https://github.com/arogyasharma"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Github size={20} />
                <span>Visit GitHub Profile</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects