
import { Card } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    {
      number: "95%",
      label: "User Satisfaction",
      description: "Report feeling more supported after using our platform"
    },
    {
      number: "24/7",
      label: "Always Available",
      description: "AI support whenever you need it, day or night"
    },
    {
      number: "100K+",
      label: "Conversations",
      description: "Meaningful interactions helping people feel less alone"
    },
    {
      number: "500+",
      label: "Licensed Professionals",
      description: "Therapists and counselors ready to help"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Making Real Impact on Mental Wellness
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform has helped thousands of people find the support they need 
            and build healthier relationships with their mental health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-blue-50/30">
              <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
