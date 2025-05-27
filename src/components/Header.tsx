
import { Brain, Calendar, MessageCircle, BookOpen, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl gradient-sage flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">Lovable AI</h1>
              <p className="text-xs text-gray-500">Your wellness companion</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-primary">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-primary">
              <BookOpen className="w-4 h-4 mr-2" />
              Journal
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-primary">
              <Calendar className="w-4 h-4 mr-2" />
              Sessions
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-primary">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </nav>

          <Button className="bg-primary text-white hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
