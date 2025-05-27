
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const CertificationsSection = () => {
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

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-blue-600 font-medium">{cert.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
