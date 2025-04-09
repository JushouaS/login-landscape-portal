
import { useNavigate } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { 
  FileText, 
  Users, 
  CheckCircle,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const handleLearnMore = () => {
    window.scrollTo({
      top: document.getElementById("how-it-works")?.offsetTop || 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Secure Transactions with Trusted Middlemen
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg">
              Connect with verified experts to facilitate your transactions. 
              Our platform ensures your payments are protected 
              while you receive your purchased items safely.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                onClick={handleGetStarted}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600"
                onClick={handleLearnMore}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/c2a2e6e3-a4d0-4a2a-9f5a-9c20ecd67adc.png" 
              alt="Secure Transaction Handshake" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-12">
            Our platform connects buyers with verified middlemen for secure transactions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-blue-600 h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Post Your Request</h3>
              <p className="text-gray-600 text-sm">
                Describe what you need help buying and set budget requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-blue-600 h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Choose a Middleman</h3>
              <p className="text-gray-600 text-sm">
                Browse profiles, ratings, and select the ideal middleman.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-blue-600 h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Complete Transaction</h3>
              <p className="text-gray-600 text-sm">
                Fund escrow, receive your item, release payment when satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Choose Sellmate
          </h2>
          <p className="text-gray-600 text-center mb-12">
            We've built a platform focused on security, trust, and hassle-free transactions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-blue-600 h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-2">Trusted Request</h3>
              <p className="text-gray-600 text-xs">
                Describe what you're looking for, our verified team ensures trustworthy listings.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-blue-600 h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-2">Expertise Tags</h3>
              <p className="text-gray-600 text-xs">
                Search for exact expertise by category tags and select your ideal middleman.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-blue-600 h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-2">Secure Messaging</h3>
              <p className="text-gray-600 text-xs">
                Private chat system keeps your transaction details safe and well-documented.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-blue-600 h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-2">Real-time Updates</h3>
              <p className="text-gray-600 text-xs">
                Track your order's progress with notifications and status updates in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-8 max-w-lg mx-auto">
            Create an account now and experience secure transactions with verified middlemen.
          </p>
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8"
              onClick={() => navigate("/signup")}
            >
              Sign Up Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Sellmate</h3>
              <p className="text-gray-600 text-sm mb-4">
                The secure platform connecting buyers with trusted middlemen for safe transactions.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center">
            <p className="text-gray-500 text-sm">© 2025 Sellmate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
