
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const CareersPage = () => {
  const openings = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Community Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl font-bold text-blue-800">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us build the future of secure commerce and empower communities worldwide.
          </p>
        </div>

        {/* Job Openings */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {openings.map((job, index) => (
            <Card key={index} className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Department: {job.department}</p>
                  <p className="text-sm text-gray-600">Location: {job.location}</p>
                  <p className="text-sm text-gray-600">Type: {job.type}</p>
                </div>
                <Button 
                  className="w-full"
                  onClick={() => window.location.href = "mailto:careers@sellmate.com"}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How to Apply */}
        <Card className="border-blue-200 bg-white/50 backdrop-blur-sm animate-fade-in">
          <CardHeader>
            <CardTitle>How to Apply</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Send your resume and a brief introduction to{" "}
              <a href="mailto:careers@sellmate.com" className="text-blue-600 hover:underline">
                careers@sellmate.com
              </a>
            </p>
            <p className="text-gray-600">
              Please include the position you're applying for in the subject line.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CareersPage;
