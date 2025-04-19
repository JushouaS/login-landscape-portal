
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Article } from "lucide-react";

const BlogPage = () => {
  const articles = [
    {
      title: "How to Succeed as a SellMate Middleman",
      preview: "Learn the best practices and tips from our top-performing middlemen...",
      author: "Sarah Johnson",
      date: "2025-04-15",
      readTime: "5 min read"
    },
    {
      title: "Building Trust in Online Transactions",
      preview: "Discover how SellMate's secure platform is revolutionizing online commerce...",
      author: "Michael Chen",
      date: "2025-04-10",
      readTime: "4 min read"
    },
    {
      title: "From Local Seller to Global Entrepreneur",
      preview: "Read how Jane transformed her local business using SellMate's platform...",
      author: "David Williams",
      date: "2025-04-05",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl font-bold text-blue-800">SellMate Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stories, insights, and updates from the SellMate community
          </p>
        </div>

        {/* Featured Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {articles.map((article, index) => (
            <Card key={index} className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Article className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{article.preview}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contribute Section */}
        <Card className="border-blue-200 bg-white/50 backdrop-blur-sm animate-fade-in">
          <CardHeader>
            <CardTitle>Share Your Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Have an inspiring story or valuable insights to share with the SellMate community?
              We'd love to hear from you!
            </p>
            <Button 
              onClick={() => window.location.href = "mailto:blog@sellmate.com"}
              className="hover:bg-blue-700"
            >
              Submit Your Story
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogPage;
