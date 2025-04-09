
import { useNavigate } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { 
  ShoppingBag, 
  Users, 
  UserCheck, 
  ShieldCheck 
} from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  const roleCards = [
    {
      title: "Buyer",
      description: "Access the buyer portal to browse and purchase products",
      icon: <ShoppingBag className="h-10 w-10 text-blue-500" />,
      className: "role-card buyer",
      path: "/login/buyer"
    },
    {
      title: "Seller",
      description: "Sellers can list and manage their products for sale",
      icon: <Users className="h-10 w-10 text-green-500" />,
      className: "role-card seller",
      path: "/login/seller"
    },
    {
      title: "Middleman",
      description: "Middlemen can facilitate transactions between buyers and sellers",
      icon: <UserCheck className="h-10 w-10 text-purple-500" />,
      className: "role-card middleman",
      path: "/login/middleman"
    },
    {
      title: "Admin",
      description: "Administrators have full access to system management",
      icon: <ShieldCheck className="h-10 w-10 text-red-500" />,
      className: "role-card admin",
      path: "/login/admin"
    }
  ];

  return (
    <div className="page-container">
      <NavBar />
      <main className="flex-1 gradient-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Welcome to Sellmate</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select your role to continue to the appropriate portal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roleCards.map((card, index) => (
              <div
                key={index}
                className={card.className}
                onClick={() => navigate(card.path)}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  {card.icon}
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Sellmate. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
