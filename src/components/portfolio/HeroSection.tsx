
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Shubham Kumar Jaiswal
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 font-light">
              Aspiring Android Developer & AI Enthusiast
            </p>
            <p className="text-lg text-gray-500 max-w-lg">
              B.Tech CSE student at KIIT University, passionate about building innovative mobile applications and exploring the frontiers of artificial intelligence.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => scrollToSection("#projects")}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
            >
              View My Projects
            </Button>
            <Button 
              onClick={() => scrollToSection("#contact")}
              variant="outline" 
              size="lg"
              className="border-gray-300 hover:bg-gray-50"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/shubham4956" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/shubham-kr-jaiswal-03605726a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:shubhambrwd@gmail.com"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="lg:flex justify-center hidden">
          <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
            <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
