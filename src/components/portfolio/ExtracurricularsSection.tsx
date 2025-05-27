
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExtracurricularsSection = () => {
  const activities = [
    {
      organization: "Kalakar Society",
      role: "Actor",
      description: "Participated in theatre events and organized creative workshops.",
      icon: "🎭"
    },
    {
      organization: "Animal Welfare Society",
      role: "Volunteer",
      description: "Helped care for rescued animals and raised awareness for welfare.",
      icon: "🐾"
    }
  ];

  return (
    <section id="extracurriculars" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Extracurricular Activities</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {activities.map((activity, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{activity.icon}</div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {activity.organization}
                    </CardTitle>
                    <p className="text-blue-600 font-semibold">{activity.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularsSection;
