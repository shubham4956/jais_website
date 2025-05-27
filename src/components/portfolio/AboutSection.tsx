
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const skills = {
    "Languages": ["Python", "Java", "C++", "SQL"],
    "Technologies/Tools": ["Android Studio", "Kotlin", "React", "HTML5", "VS Code", "Firebase"],
    "Libraries/Concepts": ["Jetpack Compose", "Firebase Auth", "SMOTE", "Logistic Regression"],
    "Other": ["Canva", "UI/UX", "Analytical Thinking"]
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a Computer Science Engineering student at KIIT University with interests in Android development, machine learning, and creative problem-solving. I've interned with EduSkills and IIT Hyderabad, and I enjoy building apps that make an impact. When I'm not coding, I'm active in theatre and social work.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Personal Info</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                <div><strong>Location:</strong> Morabadi, Ranchi</div>
                <div><strong>Email:</strong> shubhambrwd@gmail.com</div>
                <div><strong>Phone:</strong> +91-7209399713</div>
                <div><strong>University:</strong> KIIT University</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Skills Snapshot</h3>
            <div className="grid gap-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
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
  );
};

export default AboutSection;
