
import { NavBar } from "@/components/NavBar";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How Middlemen Prevent Online Shopping Scams",
      excerpt: "Learn how trusted intermediaries can protect both buyers and sellers in high-value transactions.",
      author: "Sarah Johnson",
      date: "April 5, 2023",
      category: "Safety",
      image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "5 Things to Look for in a Reliable Middleman",
      excerpt: "Not all middlemen are created equal. Here's how to find one you can trust with your transaction.",
      author: "Michael Chen",
      date: "March 22, 2023",
      category: "Tips",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "The Rise of Escrow Services in Online Marketplaces",
      excerpt: "How digital platforms are incorporating third-party verification to build trust.",
      author: "Jessica Williams",
      date: "March 10, 2023",
      category: "Industry",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "From Seller to Middleman: My Career Change Story",
      excerpt: "How I built a successful business helping others trade safely online.",
      author: "David Rodriguez",
      date: "February 28, 2023",
      category: "Success Stories",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6">Sellmate Blog</h1>
              <p className="text-lg text-gray-600">
                Insights, tips, and stories about secure online transactions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {blogPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{post.category}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-3 w-3 mr-1" />
                        <span className="mr-3">{post.author}</span>
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 p-0">
                        Read more <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="#" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Load More Articles
              </Link>
            </div>
            
            <div className="mt-16 bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Subscribe to our newsletter</h2>
                  <p className="text-gray-600">Get the latest articles and updates delivered to your inbox</p>
                </div>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-3 rounded-l-lg border-y border-l border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </div>
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

export default BlogPage;
