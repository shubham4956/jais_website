
import { Github, Linkedin, Mail } from "lucide-react";

const PortfolioFooter = () => {
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
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-lg">
              Built with ❤️ by <span className="text-blue-400 font-semibold">Shubham Kumar Jaiswal</span>
            </p>
            <p className="text-gray-400">
              Copyright © 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
