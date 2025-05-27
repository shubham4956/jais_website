
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Moon, Sun, Menu, X, GraduationCap, Award } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const skills = {
    "Languages": ["Python", "Java", "C++", "SQL"],
    "Technologies/Tools": ["Android Studio", "Kotlin", "React", "HTML5", "VS Code", "Firebase"],
    "Libraries/Concepts": ["Jetpack Compose", "Firebase Auth", "SMOTE", "Logistic Regression"],
    "Other": ["Canva", "UI/UX", "Analytical Thinking"]
  };

  const projects = [
    {
      title: "Depression Detection",
      tech: ["Python", "Machine Learning"],
      description: "Used logistic regression with SMOTE to balance data and improve recall for mental health prediction.",
      github: "https://github.com/shubham4956/depression-prediction-model",
      live: null
    },
    {
      title: "Mental Health Companion",
      tech: ["kvlang", "Python", "Firebase"],
      description: "Web app for scheduling mental health interviews with admin panel and real-time availability tracking.",
      github: "https://github.com/shubham4956/jais55.git",
      live: null
    },
    {
      title: "Portfolio Website",
      tech: ["React", "TailwindCSS", "Vercel"],
      description: "Modern, responsive portfolio website built with React and TailwindCSS, hosted on Vercel.",
      github: "https://github.com/shubham4956/jais55.git",
      live: "https://my-portfolio-site-lac-one.vercel.app/"
    }
  ];

  const experiences = [
    {
      company: "AICTE-EduSkills",
      role: "Android Developer Intern",
      duration: "Oct 2024 – Mar 2025",
      location: "AWS AI-ML",
      description: "Built Android apps, integrated Firebase, and contributed to production-ready solutions."
    },
    {
      company: "REMARKSKILL EDUCATION – IIT Hyderabad",
      role: "Java Programmer",
      duration: "Jun 2024 – Jul 2024",
      location: "Remote",
      description: "Built an online banking system and enhanced core coding skills."
    }
  ];

  const certifications = [
    {
      title: "AWS AI-ML",
      issuer: "FedKIIT",
      icon: "🏆"
    },
    {
      title: "Data Science, ML, NLP Bootcamp",
      issuer: "Udemy",
      icon: "📊"
    },
    {
      title: "Google Prompting Essentials",
      issuer: "Coursera",
      icon: "🤖"
    },
    {
      title: "Ethical Decision Making",
      issuer: "Coursera",
      icon: "⚖️"
    }
  ];

  const extracurriculars = [
    {
      title: "Kalakar Society",
      role: "Actor",
      description: "Participated in theatre events and organized creative workshops.",
      icon: "🎭"
    },
    {
      title: "Animal Welfare Society",
      role: "Volunteer",
      description: "Helped care for rescued animals and raised awareness for welfare.",
      icon: "🐾"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/shubham4956",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/shubham-kr-jaiswal-03605726a",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:shubhambrwd@gmail.com",
      label: "Email"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-pink-50 to-rose-50'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-pink-100 dark:border-gray-700 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              Shubham Kumar Jaiswal
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-pink-600 hover:bg-pink-700 text-white"
              >
                Hire Me
              </Button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-pink-100 dark:bg-gray-800 text-pink-600 dark:text-pink-400 hover:bg-pink-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-pink-100 dark:bg-gray-800 text-pink-600 dark:text-pink-400"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 dark:text-gray-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-pink-100 dark:border-gray-700 pt-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium text-left"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium text-left"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium text-left"
                >
                  Contact
                </button>
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="bg-pink-600 hover:bg-pink-700 text-white w-fit"
                >
                  Hire Me
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Shubham Kumar Jaiswal
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light">
                Aspiring Android Developer & AI Enthusiast
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg">
                B.Tech CSE student at KIIT University, passionate about building innovative mobile applications and exploring the frontiers of artificial intelligence.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-pink-600 hover:bg-pink-700 text-white"
              >
                View My Projects
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline" 
                size="lg"
                className="border-pink-300 text-pink-600 hover:bg-pink-50 dark:border-pink-600 dark:text-pink-400 dark:hover:bg-pink-900/20"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex items-center space-x-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:flex justify-center hidden">
            <div className="w-80 h-80 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center animate-fade-in">
              <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a Computer Science Engineering student at KIIT University with interests in Android development, machine learning, and creative problem-solving. I've interned with EduSkills and IIT Hyderabad, and I enjoy building apps that make an impact. When I'm not coding, I'm active in theatre and social work.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Personal Info</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
                  <div><strong>Location:</strong> Morabadi, Ranchi</div>
                  <div><strong>Email:</strong> shubhambrwd@gmail.com</div>
                  <div><strong>Phone:</strong> +91-7209399713</div>
                  <div><strong>University:</strong> KIIT University</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Skills Snapshot</h3>
              <div className="grid gap-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <Card key={category} className="p-6 hover:shadow-lg transition-shadow dark:bg-gray-700 dark:shadow-gray-900/20">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 rounded-full text-sm font-medium hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-600 mx-auto"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in development and problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg dark:bg-gray-700 dark:shadow-gray-900/20">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-pink-300 text-pink-600 hover:bg-pink-50 dark:border-pink-600 dark:text-pink-400 dark:hover:bg-pink-900/20"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        size="sm"
                        asChild
                        className="bg-pink-600 hover:bg-pink-700 text-white"
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md dark:bg-gray-700 dark:shadow-gray-900/20">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </CardTitle>
                      <p className="text-lg font-semibold text-pink-600 dark:text-pink-400 mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 dark:text-gray-300 font-medium">{exp.duration}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-600 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md dark:bg-gray-700 dark:shadow-gray-900/20">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-pink-600 dark:text-pink-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                      KIIT University
                    </CardTitle>
                    <p className="text-lg font-semibold text-pink-600 dark:text-pink-400 mt-1">
                      B.Tech in Computer Science Engineering
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">2022 – Present</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">6.80</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Current CGPA</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">(as of 2025)</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Pursuing Bachelor of Technology in Computer Science Engineering with focus on 
                  software development, machine learning, and mobile application development. 
                  Active participant in various technical and cultural activities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md dark:bg-gray-700 dark:shadow-gray-900/20">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
                  <p className="text-pink-600 dark:text-pink-400 font-medium">{cert.issuer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurriculars Section */}
      <section id="extracurriculars" className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Extracurricular Activities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {extracurriculars.map((activity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md dark:bg-gray-700 dark:shadow-gray-900/20">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{activity.icon}</div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                        {activity.title}
                      </CardTitle>
                      <p className="text-pink-600 dark:text-pink-400 font-semibold">{activity.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-rose-600 mx-auto"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's connect and create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center">
                      <Mail className="text-pink-600 dark:text-pink-400" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Email</p>
                      <a 
                        href="mailto:shubhambrwd@gmail.com" 
                        className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                      >
                        shubhambrwd@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center">
                      <Phone className="text-pink-600 dark:text-pink-400" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                      <a 
                        href="tel:+917209399713" 
                        className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                      >
                        +91-7209399713
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center">
                      <MapPin className="text-pink-600 dark:text-pink-400" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">Morabadi, Ranchi</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/shubham4956"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-700 hover:bg-pink-600 hover:text-white rounded-lg flex items-center justify-center transition-all"
                    title="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shubham-kr-jaiswal-03605726a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-700 hover:bg-pink-600 hover:text-white rounded-lg flex items-center justify-center transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://leetcode.com/u/shubhamjais/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-700 hover:bg-pink-600 hover:text-white rounded-lg flex items-center justify-center transition-all"
                    title="LeetCode"
                  >
                    <div className="text-sm font-bold">LC</div>
                  </a>
                  <a
                    href="https://www.geeksforgeeks.org/user/herojax1im/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-700 hover:bg-pink-600 hover:text-white rounded-lg flex items-center justify-center transition-all"
                    title="GeeksforGeeks"
                  >
                    <div className="text-sm font-bold">GFG</div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-lg dark:bg-gray-700 dark:shadow-gray-900/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="dark:text-gray-300">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      placeholder="Your name"
                      className="dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="dark:text-gray-300">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      placeholder="your.email@example.com"
                      className="dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="dark:text-gray-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      placeholder="Your message here..."
                      className="min-h-[120px] dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/shubham4956"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-kr-jaiswal-03605726a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:shubhambrwd@gmail.com"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                title="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://leetcode.com/u/shubhamjais/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                title="LeetCode"
              >
                <div className="text-sm font-bold">LC</div>
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/herojax1im/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                title="GeeksforGeeks"
              >
                <div className="text-sm font-bold">GFG</div>
              </a>
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-lg">
                Built with ❤️ by <span className="text-pink-400 font-semibold">Shubham Kumar Jaiswal</span>
              </p>
              <p className="text-gray-400">
                Copyright © 2025. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
