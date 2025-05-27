
import { MessageCircle, BookOpen, Calendar, BarChart3, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Conversational AI Support",
      description: "Engage in meaningful conversations with our emotionally intelligent AI that understands context and provides supportive responses.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: BookOpen,
      title: "Smart Journaling",
      description: "AI-powered journaling prompts and mood tracking that help you reflect and understand your emotional patterns.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Calendar,
      title: "Professional Sessions",
      description: "Easy scheduling with licensed therapists and counselors for when you need professional support.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: BarChart3,
      title: "Mood Analytics",
      description: "Visual insights into your emotional well-being trends to help you identify patterns and progress.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with others on similar journeys through moderated, anonymous support groups.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: Zap,
      title: "Crisis Support",
      description: "Immediate resources and connections to crisis hotlines when you need urgent support.",
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Mental Health Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines AI technology with human expertise to provide 
            you with the tools and support you need for your mental wellness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 border-0 bg-gray-50/50">
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
