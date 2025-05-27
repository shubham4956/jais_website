
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Depression Detection",
      description: "Used logistic regression with SMOTE to balance data and improve recall for mental health prediction.",
      tech: ["Python", "Machine Learning", "SMOTE", "Logistic Regression"],
      github: "https://github.com/shubham4956/depression-prediction-model",
      live: null
    },
    {
      title: "Mental Health Companion",
      description: "Web app for scheduling mental health interviews with admin panel and real-time availability tracking.",
      tech: ["kvlang", "Python", "Firebase", "Real-time DB"],
      github: null,
      live: null
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and TailwindCSS, hosted on Vercel.",
      tech: ["React", "TailwindCSS", "Vercel", "TypeScript"],
      github: "https://github.com/shubham4956/jais55.git",
      live: "https://my-portfolio-site-lac-one.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in development and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
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
                      className="bg-blue-600 hover:bg-blue-700"
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
  );
};

export default ProjectsSection;
