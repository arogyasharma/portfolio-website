'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Calendar, MapPin, Download, Award, GraduationCap, Briefcase } from 'lucide-react'
import { experience, education, certifications, personalInfo } from '@/data/portfolio'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState('experience')

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

  const TimelineItem = ({ item, index, type }: { item: any; index: number; type: string }) => (
    <motion.div
      variants={itemVariants}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-purple-500"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 w-3 h-3 bg-primary-600 rounded-full transform -translate-x-1/2 shadow-lg">
        <div className="absolute inset-0 bg-primary-600 rounded-full animate-ping opacity-75"></div>
      </div>

      {/* Content Card */}
      <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover ml-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {type === 'experience' ? item.position : item.degree}
            </h3>
            <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">
              {type === 'experience' ? item.company : item.institution}
            </h4>
          </div>
          <div className="flex flex-col sm:items-end text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1 mb-1">
              <Calendar size={14} />
              <span>{item.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>{item.location}</span>
            </div>
            {type === 'education' && item.gpa && (
              <div className="mt-1 text-primary-600 dark:text-primary-400 font-medium">
                GPA: {item.gpa}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-2 mb-4">
          {item.description.map((desc: string, i: number) => (
            <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
              <span className="text-primary-500 mr-2 mt-1.5 flex-shrink-0">•</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        {item.technologies && (
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )

  const CertificationCard = ({ cert, index }: { cert: any; index: number }) => (
    <motion.div
      variants={itemVariants}
      className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
          <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {cert.name}
          </h3>
          <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
            {cert.issuer}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
            <span>Issued: {cert.date}</span>
            <span className="font-mono text-xs">{cert.credentialId}</span>
          </div>
          {cert.logo && (
            <a
              href={cert.viewUrl}
              className="text-primary-600 dark:text-primary-400 underline inline-flex items-center space-x-2 mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Award size={16} />
              <span>View Certificate</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )

  const tabs = [
    { key: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
    { key: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
    { key: 'certifications', label: 'Certifications', icon: <Award size={20} /> },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-900">
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
              My <span className="gradient-text">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A timeline of my professional experience, education, and achievements
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {activeTab === 'experience' && (
              <div className="max-w-4xl mx-auto">
                {experience.map((exp, index) => (
                  <TimelineItem
                    key={exp.id}
                    item={exp}
                    index={index}
                    type="experience"
                  />
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="max-w-4xl mx-auto">
                {education.map((edu, index) => (
                  <TimelineItem
                    key={edu.id}
                    item={edu}
                    index={index}
                    type="education"
                  />
                ))}
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <CertificationCard key={cert.id} cert={cert} index={index} />
                ))}
              </div>
            )}
          </motion.div>

          {/* Resume Download CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Want the full details?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Download my complete resume to see my full work history, projects, and technical skills.
              </p>
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience