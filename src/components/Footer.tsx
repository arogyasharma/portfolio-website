'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { personalInfo, socialLinks } from '@/data/portfolio'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={20} />
      case 'linkedin':
        return <Linkedin size={20} />
      case 'mail':
        return <Mail size={20} />
      default:
        return null
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              {personalInfo.title} passionate about creating innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' },
                { name: 'Resume', href: personalInfo.resumeUrl },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault()
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Connect
            </h3>
            <div className="space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <Mail size={16} />
                <span>{personalInfo.email}</span>
              </a>
              <p className="text-gray-600 dark:text-gray-400">
                {personalInfo.location}
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-dark-800 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 transform hover:scale-110"
                  aria-label={`Visit ${social.name}`}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="Back to top"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer