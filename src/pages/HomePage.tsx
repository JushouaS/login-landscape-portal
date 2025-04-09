
import { useNavigate } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { 
  FileText, 
  Users, 
  CheckCircle,
  Clock,
  Handshake,
  ArrowRight
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
      
      {/* Hero Section with animated background */}
      <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgxMDAsMTUwLDI1NSwwLjAzKSI+PC9yZWN0PjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSI+PC9yZWN0Pjwvc3ZnPg==')]"></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center z-10 relative">
          <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8 animate-fade-in">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full inline-block text-sm mb-4 shadow-lg transform hover:scale-105 transition-transform">The Premier Middleman Service</div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500">
              Secure Transactions with Trusted Middlemen
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg text-lg">
              Connect with verified experts to facilitate your transactions. 
              Our platform ensures your payments are protected 
              while you receive your purchased items safely.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full shadow-lg transform hover:scale-105 transition-all"
                onClick={handleGetStarted}
                size="lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full shadow-md"
                onClick={handleLearnMore}
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-float">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 opacity-30 blur-xl"></div>
            <div className="relative p-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
              <Handshake className="w-full h-64 text-blue-500" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9InJnYmEoMCwwLDI1NSwwLjAzKSI+PC9yZWN0PjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSI+PC9yZWN0Pjwvc3ZnPg==')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="rounded-full bg-blue-100 p-2 inline-block">
                <div className="rounded-full bg-blue-200 p-2">
                  <div className="rounded-full bg-blue-300 p-2">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500">How It Works</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-lg">
              Our platform connects buyers with verified middlemen for secure transactions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 transition-transform">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FileText className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-4 text-center">Post Your Request</h3>
              <p className="text-gray-600 text-center">
                Describe what you need help buying and set budget requirements.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 transition-transform">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-4 text-center">Choose a Middleman</h3>
              <p className="text-gray-600 text-center">
                Browse profiles, ratings, and select the ideal middleman.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 transition-transform">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-4 text-center">Complete Transaction</h3>
              <p className="text-gray-600 text-center">
                Fund escrow, receive your item, release payment when satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgxNSkiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiIGZpbGw9InJnYmEoMCw5MCwyNTUsMC4wNSkiPjwvY2lyY2xlPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSI+PC9yZWN0Pjwvc3ZnPg==')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500">
              Why Choose Sellmate
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              We've built a platform focused on security, trust, and hassle-free transactions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FileText className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="font-semibold text-center mb-3">Trusted Request</h3>
              <p className="text-gray-600 text-center text-sm">
                Describe what you're looking for, our verified team ensures trustworthy listings.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="font-semibold text-center mb-3">Expertise Tags</h3>
              <p className="text-gray-600 text-center text-sm">
                Search for exact expertise by category tags and select your ideal middleman.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FileText className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="font-semibold text-center mb-3">Secure Messaging</h3>
              <p className="text-gray-600 text-center text-sm">
                Private chat system keeps your transaction details safe and well-documented.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="font-semibold text-center mb-3">Real-time Updates</h3>
              <p className="text-gray-600 text-center text-sm">
                Track your order's progress with notifications and status updates in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0wIDEwIEw2MCAxMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPjxwYXRoIGQ9Ik0wIDMwIEw2MCAzMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPjxwYXRoIGQ9Ik0wIDUwIEw2MCA1MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSI+PC9yZWN0Pjwvc3ZnPg==')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="mb-8 max-w-lg mx-auto text-blue-100">
            Create an account now and experience secure transactions with verified middlemen.
          </p>
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              className="border-white border-2 text-white hover:bg-white hover:text-blue-600 px-8 rounded-full shadow-xl transform hover:scale-105 transition-all"
              size="lg"
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
              <h3 className="font-bold text-lg mb-4 text-blue-800">Sellmate</h3>
              <p className="text-gray-600 text-sm mb-4">
                The secure platform connecting buyers with trusted middlemen for safe transactions.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-800">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-800">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Security</a></li>
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
