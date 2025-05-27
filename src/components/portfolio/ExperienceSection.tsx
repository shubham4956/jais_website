
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "AICTE-EduSkills",
      position: "Android Developer Intern",
      duration: "Oct 2024 – Mar 2025",
      location: "AWS AI-ML",
      description: "Built Android apps, integrated Firebase, contributed to production-ready solutions.",
      highlights: [
        "Developed mobile applications using Android Studio and Kotlin",
        "Integrated Firebase for authentication and real-time database",
        "Collaborated on production-ready solutions"
      ]
    },
    {
      company: "REMARKSKILL EDUCATION – IIT Hyderabad",
      position: "Java Programmer",
      duration: "Jun 2024 – Jul 2024",
      location: "Remote",
      description: "Built an online banking system and enhanced core coding skills.",
      highlights: [
        "Developed an online banking system using Java",
        "Enhanced problem-solving and coding skills",
        "Worked with database integration and security"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {exp.position}
                    </CardTitle>
                    <p className="text-lg font-semibold text-blue-600 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 font-medium">{exp.duration}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
