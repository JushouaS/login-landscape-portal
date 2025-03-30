
import { NavBar } from "@/components/NavBar";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Package, CreditCard, Heart } from "lucide-react";

const BuyerDashboard = () => {
  const dashboardCards = [
    {
      title: "Browse Products",
      description: "Explore our catalog of products",
      icon: <ShoppingBag className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "My Orders",
      description: "Track and manage your orders",
      icon: <Package className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "Payment Methods",
      description: "Manage your payment information",
      icon: <CreditCard className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "Wishlist",
      description: "View and manage your saved items",
      icon: <Heart className="h-10 w-10 text-blue-500" />,
    },
  ];

  return (
    <div className="page-container">
      <NavBar userType="buyer" />
      <main className="flex-1 bg-blue-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Buyer Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {dashboardCards.map((card, index) => (
              <Card key={index} className="dashboard-card hover:border-blue-300">
                <div className="flex flex-col items-center text-center gap-4">
                  {card.icon}
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <Card className="p-6">
            <p className="text-gray-500 text-center py-8">No recent activity</p>
          </Card>
        </div>
      </main>
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} MultiPortal. All rights reserved.
      </footer>
    </div>
  );
};

export default BuyerDashboard;
