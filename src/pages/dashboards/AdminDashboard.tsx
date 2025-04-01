
import { NavBar } from "@/components/NavBar";
import { Card } from "@/components/ui/card";
import { Shield, Users, BarChart, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const dashboardCards = [
    {
      title: "System Overview",
      description: "Monitor system health and status",
      icon: <Shield className="h-10 w-10 text-red-500" />,
      link: "/dashboard/admin/overview"
    },
    {
      title: "User Management",
      description: "Manage all users and their permissions",
      icon: <Users className="h-10 w-10 text-red-500" />,
      link: "/dashboard/admin/users"
    },
    {
      title: "Analytics",
      description: "View system analytics and reports",
      icon: <BarChart className="h-10 w-10 text-red-500" />,
      link: "/dashboard/admin/analytics"
    },
    {
      title: "System Settings",
      description: "Configure and customize the system",
      icon: <Settings className="h-10 w-10 text-red-500" />,
      link: "/dashboard/admin/settings"
    },
  ];

  return (
    <div className="page-container">
      <NavBar userType="admin" />
      <main className="flex-1 bg-red-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {dashboardCards.map((card, index) => (
              <Link to={card.link} key={index}>
                <Card className="dashboard-card hover:border-red-300 transition-all hover:shadow-md cursor-pointer">
                  <div className="flex flex-col items-center text-center gap-4 p-6">
                    {card.icon}
                    <h2 className="text-xl font-semibold">{card.title}</h2>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
              <p className="text-gray-500 text-center py-8">No recent activity</p>
            </Card>
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">System Status</h2>
              <p className="text-gray-500 text-center py-8">All systems operational</p>
            </Card>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} MultiPortal. All rights reserved.
      </footer>
    </div>
  );
};

export default AdminDashboard;
