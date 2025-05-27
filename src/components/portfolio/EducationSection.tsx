
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    KIIT University
                  </CardTitle>
                  <p className="text-lg font-semibold text-blue-600 mt-1">
                    B.Tech in Computer Science Engineering
                  </p>
                  <p className="text-gray-600 mt-2">2022 – Present</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">6.80</p>
                  <p className="text-sm text-gray-600">Current CGPA</p>
                  <p className="text-xs text-gray-500">(as of 2025)</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Pursuing Bachelor of Technology in Computer Science Engineering with focus on 
                software development, machine learning, and mobile application development. 
                Active participant in various technical and cultural activities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
