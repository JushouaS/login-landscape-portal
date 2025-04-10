
import { NavBar } from "@/components/NavBar";
import { Info, Users, Globe, TrendingUp } from "lucide-react";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6">About Sellmate</h1>
              <p className="text-lg text-gray-600">
                Building trust in online transactions through secure middleman services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition-all hover:scale-105">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Info className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  Sellmate was founded with a simple mission: to make online transactions between strangers safe, 
                  secure, and trustworthy. We bring buyers and sellers together with qualified middlemen who ensure 
                  both parties are protected.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition-all hover:scale-105">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                <p className="text-gray-600">
                  We're a diverse team of developers, security experts, and customer support specialists. 
                  Our combined expertise in e-commerce, fintech, and customer experience allows us to build a 
                  platform that truly serves our users' needs.
                </p>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center">The Sellmate Story</h2>
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <p className="text-gray-600 mb-6">
                  Sellmate was born out of a personal experience. Our founder was scammed while trying to purchase a 
                  high-value item online. After losing money and receiving a counterfeit product, he realized there 
                  needed to be a better way to connect buyers and sellers without the risk.
                </p>
                <p className="text-gray-600 mb-6">
                  In 2022, we launched the first version of Sellmate with just a handful of trusted middlemen in major cities. 
                  Since then, we've grown to support thousands of transactions monthly across the country, saving our 
                  users from potential fraud and ensuring smooth transactions.
                </p>
                <p className="text-gray-600">
                  Today, Sellmate stands as a testament to our commitment to creating a safer online marketplace 
                  where trust is built into every transaction.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition-all hover:scale-105">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
                <p className="text-gray-600">
                  We've helped facilitate over $10 million in secure transactions, prevented thousands of potential 
                  scams, and built a community of highly-rated middlemen who ensure every transaction goes smoothly.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition-all hover:scale-105">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">Our Future</h2>
                <p className="text-gray-600">
                  We're constantly innovating to make Sellmate even more secure, accessible, and user-friendly. 
                  Our roadmap includes expanding to new regions, adding more verification options, and building 
                  specialized tools for high-value transactions.
                </p>
              </div>
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

export default AboutUsPage;
