
import { ArrowRight, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <Card className="p-12 bg-white/60 backdrop-blur-sm border-white/20 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 gradient-sage rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Wellness Journey?
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of people who have found support, understanding, and 
              growth through Lovable AI. Your mental health matters, and we're here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8">
                Get Started for Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Schedule a Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Completely Private
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Always Supportive
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
