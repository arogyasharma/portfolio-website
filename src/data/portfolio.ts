export const stats = [
  {
    value: "5+",
    label: "Software Projects"
  },
  {
    value: "2+",
    label: "Years Coding"
  },
  {
    value: "12+",
    label: "Technologies Mastered"
  },
  {
    value: "10K+",
    label: "Users Impacted"
  }
]
export const personalInfo = {
  name: "Arogya Sharma",
  title: "Software Engineer & Full-Stack Developer",
  tagline: "Crafting scalable software solutions with modern engineering practices.",
  email: "arogyasharma10@gmail.com",
  github: "https://github.com/arogyasharma10",
  linkedin: "https://www.linkedin.com/in/arogya-sharma-b029021a9/",
  location: "Chennai, India",
  bio: "Passionate Software Engineer specializing in full-stack development and system design. Currently pursuing Computer Science at VIT Chennai with hands-on experience in building production-grade applications. Proven track record of delivering scalable web solutions for government and enterprise clients, with expertise in modern development frameworks, database architecture, and cloud deployment strategies.",
  resumeUrl: "https://drive.google.com/file/d/1xcECEn_TGokqRbbHqG7SByHBAhKCeicn/view?usp=sharing",
  avatar: "/images/avatar.jpg"
}

export const skills = {
  "Programming Languages": [
    { name: "JavaScript", level: 95, icon: "🟨" },
    { name: "TypeScript", level: 85, icon: "🔷" },
    { name: "Python", level: 75, icon: "🐍" },
    { name: "C/C++", level: 70, icon: "💻" },
    { name: "Java", level: 70, icon: "☕" }
  ],
  "Frontend Development": [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "HTML5/CSS3", level: 95, icon: "🌐" },
    { name: "Responsive Design", level: 90, icon: "📱" },
    { name: "EJS Templates", level: 80, icon: "📄" }
  ],
  "Backend & APIs": [
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Express.js", level: 80, icon: "🚀" },
    { name: "REST APIs", level: 85, icon: "🔗" },
    { name: "API Design", level: 80, icon: "🔧" }
  ],
  "Database & Storage": [
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "MySQL", level: 75, icon: "🗄️" },
    { name: "Database Design", level: 75, icon: "🏗️" }
  ],
  "DevOps & Tools": [
    { name: "Git/GitHub", level: 90, icon: "📚" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Postman", level: 80, icon: "📬" },
    { name: "Deployment", level: 75, icon: "🚀" }
  ]
}

export const projects = [
  {
    id: 1,
    title: "Enterprise File Tracking System - Government of Sikkim",
    description: "Engineered a production-grade document management system serving 15+ government officials. Built with scalable architecture using Node.js microservices, MongoDB for data persistence, and EJS templating. Implemented real-time file tracking, role-based access control, and automated workflow management, resulting in 70% improvement in document processing efficiency.",
    image: "/images/projects/filetracking.jpg",
    technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Authentication"],
    githubUrl: "https://github.com/arogyasharma/file-tracking.git", 
    liveUrl: "https://file-tracking-q2nk.vercel.app/", 
    category: "Enterprise Software",
    featured: true
  },
  {
    id: 2,
    title: "Invest in Sikkim - Government Investment Portal",
    description: "Developed a high-performance government investment portal using modern web technologies. Architected responsive frontend with optimized JavaScript, implemented SEO best practices, and integrated analytics tracking. Successfully deployed to production servers, achieving 10,000+ unique visitors and serving as the primary investment gateway for the state government.",
    image: "/images/projects/investsikkim.jpg",
    technologies: ["JavaScript", "HTML5", "CSS3", "SEO", "Analytics"],
    githubUrl: "https://github.com/dece076/internship2k25.git", 
    liveUrl: "https://industries.sikkim.gov.in/visitors/investsikkim",
    category: "Government Software",
    featured: true
  },
  {
    id: 3,
    title: "AgroGuide (Hackathon Finalist)",
    description: "Platform connecting farmers and laborers for agricultural jobs, ranked top 15/120 in an inter-college hackathon. Contributed to frontend development using HTML, CSS, JavaScript, and EJS templates.",
    image: "/images/projects/agroguide.jpg",
    technologies: ["JavaScript", "EJS", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Nitin-singh03/Nexus-Project.git", // Add if available
    liveUrl: "",
    category: "Hackathon",
    featured: false
  },
  {
    id: 4,
    title: "Interactive Quiz Platform",
    description: "Built a full-stack quiz application with React.js frontend and Node.js backend. Implemented user authentication system, session management, and integrated external APIs for dynamic content. Features include real-time scoring, category-based filtering, and responsive design. Demonstrates proficiency in modern web development stack and API integration patterns.",
    image: "/images/projects/quiz.jpg", 
    technologies: ["React.js", "Node.js", "API Integration", "Authentication"],
    githubUrl: "https://github.com/arogyasharma/Quiz-master.git", 
    liveUrl: "https://web-project-2mtv.vercel.app/", 
    category: "Full Stack Application",
    featured: false
  },
  {
    id: 5,
    title: "Professional Portfolio Website",
    description: "Architected and developed a modern, responsive portfolio using React.js and TypeScript. Implemented component-based architecture, state management, and optimized performance with lazy loading. Features include dynamic content rendering, smooth animations, and mobile-first responsive design. Demonstrates advanced frontend engineering skills and modern development practices.",
    image: "/images/projects/portfolio.jpg",
    technologies: ["React.js", "TypeScript", "CSS3", "Component Architecture"],
    githubUrl: "https://github.com/arogyasharma10/portfolio-website.git",
    liveUrl: "https://your-portfolio-domain.com",
    category: "Frontend Engineering",
    featured: true
  }
]

export const experience = [
  {
    id: 1,
    company: "Government of Sikkim",
    position: "Software Engineer Intern",
    duration: "May 2025 – June 2025",
    location: "Gangtok, Sikkim",
    description: [
      "Architected and delivered two enterprise-grade web applications serving 10,000+ users and 15+ government officials.",
      "Engineered a scalable investment portal with optimized performance, SEO implementation, and analytics integration.",
      "Developed a comprehensive document management system with real-time tracking, role-based authentication, and automated workflows.",
      "Led full software development lifecycle from requirements analysis to production deployment on government infrastructure.",
      "Implemented robust database schemas, API endpoints, and security measures following government compliance standards."
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "JavaScript", "EJS", "System Architecture"]
  }
]

export const education = [
  {
    id: 1,
    institution: "Vellore Institute of Technology, Chennai",
    degree: "B. Tech in Computer Science (Cyber-Physical Systems)",
    duration: "Aug 2023 – 2027",
    location: "Chennai, India",
    description: [
      "CGPA: 8.24/10 - Strong academic performance in software engineering fundamentals",
      "Core Coursework: Data Structures & Algorithms, Software Engineering, Database Management Systems, Web Technologies, Object-Oriented Programming, System Design",
      "Specialized Focus: Cyber-Physical Systems, Embedded Software Development, IoT Applications"
    ],
    gpa: "8.24/10"
  },
  {
    id: 2,
    institution: "Holy Cross School, Tadong",
    degree: "Class XII (CBSE)",
    duration: "2023",
    location: "Tadong, Sikkim",
    description: [],
    gpa: ""
  },
  {
    id: 3,
    institution: "Holy Cross School, Tadong",
    degree: "Class X (CBSE)",
    duration: "2021",
    location: "Tadong, Sikkim",
    description: [],
    gpa: ""
  }
]

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "Senior Software Architect",
    company: "Government IT Department",
    content: "Arogya demonstrated exceptional software engineering skills during his internship. His ability to architect scalable solutions and implement clean, maintainable code impressed our entire development team. He delivered production-ready applications that are still being used by our department.",
    avatar: "/images/testimonials/rajesh.jpg"
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    position: "Technical Lead",
    company: "VIT Chennai",
    content: "As Arogya's mentor, I've witnessed his growth from a student to a skilled software engineer. His understanding of system design principles, database architecture, and modern development practices is remarkable for someone at his level. He consistently delivers well-engineered solutions.",
    avatar: "/images/testimonials/priya.jpg"
  }
]

export const certifications = [
  {
    id: 1,
    name: "Software Development Internship Certificate",
    issuer: "Government of Sikkim",
    date: "June 2025",
    credentialId: "",
    logo: "https://drive.google.com/uc?export=view&id=1qgVPfiNc3jqPQBBKjxPcuFCw1olNWS7m", // Direct image link for display
    viewUrl: "https://drive.google.com/file/d/130UFr0P5xbILnXmgoMh-O4HjawkwKcSL/view?usp=sharing", // Google Drive view link
    downloadUrl: "https://drive.google.com/file/d/130UFr0P5xbILnXmgoMh-O4HjawkwKcSL/view?usp=sharing" // Direct download link
  }
]

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/arogyasharma",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "http://www.linkedin.com/in/arogya-sharma-b029021a9",
    icon: "linkedin"
  },
  {
    name: "Email",
    url: "mailto:arogyasharma10@gmail.com",
    icon: "mail"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/arogyasharma",
    icon: "twitter"
  }
]
