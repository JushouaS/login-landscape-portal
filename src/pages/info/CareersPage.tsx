
import { NavBar } from "@/components/NavBar";
import { Briefcase, MapPin, Clock, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const CareersPage = () => {
  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      location: "Remote",
      type: "Full-time",
      department: "Engineering",
      description: "Join our engineering team to build and scale our platform using React, Node.js, and AWS."
    },
    {
      title: "Product Manager",
      location: "New York, NY",
      type: "Full-time",
      department: "Product",
      description: "Lead our product strategy and roadmap to deliver exceptional user experiences."
    },
    {
      title: "Customer Support Specialist",
      location: "Remote",
      type: "Full-time",
      department: "Support",
      description: "Help our users navigate the platform and resolve any issues they encounter."
    },
    {
      title: "Security Engineer",
      location: "San Francisco, CA",
      type: "Full-time",
      department: "Engineering",
      description: "Ensure the security and integrity of our platform and user data."
    }
  ];

  const handleApply = (jobTitle: string) => {
    toast.success(`Your application for ${jobTitle} has been received!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
              <p className="text-lg text-gray-600">
                Help us build the future of secure online transactions
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 mb-16">
              <h2 className="text-2xl font-semibold mb-4">Why Work at Sellmate?</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Meaningful Impact</h3>
                    <p className="text-gray-600 text-sm">Help protect people from online scams every day</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Flexible Schedule</h3>
                    <p className="text-gray-600 text-sm">Work when and where you're most productive</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Remote First</h3>
                    <p className="text-gray-600 text-sm">Work from anywhere in the world</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <Briefcase className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Career Growth</h3>
                    <p className="text-gray-600 text-sm">Develop your skills in a fast-growing startup</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                At Sellmate, we're building a platform that makes online transactions safe and secure. 
                Our team is passionate about creating technology that helps people connect and conduct 
                business with confidence. We value innovation, integrity, and impact in everything we do.
              </p>
            </div>
            
            <h2 className="text-3xl font-semibold mb-8">Open Positions</h2>
            <div className="space-y-6 mb-16">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-xl font-medium mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center">
                          <MapPin className="h-3 w-3 mr-1" /> {job.location}
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                          <Clock className="h-3 w-3 mr-1" /> {job.type}
                        </span>
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full flex items-center">
                          <Briefcase className="h-3 w-3 mr-1" /> {job.department}
                        </span>
                      </div>
                      <p className="text-gray-600">{job.description}</p>
                    </div>
                    <div className="md:ml-4">
                      <Button onClick={() => handleApply(job.title)}>
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl shadow-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">Don't see the right role?</h2>
              <p className="mb-6">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future openings.
              </p>
              <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
                Send Open Application
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Sellmate. All rights reserved.
      </footer>
    </div>
  );
};

export default CareersPage;
