
import { NavBar } from "@/components/NavBar";
import { Card } from "@/components/ui/card";
import { UserCircle, Settings, Bell, MessageSquare } from "lucide-react";

const UserDashboard = () => {
  const dashboardCards = [
    {
      title: "My Profile",
      description: "View and edit your profile information",
      icon: <UserCircle className="h-10 w-10 text-green-500" />,
    },
    {
      title: "Account Settings",
      description: "Manage your account preferences",
      icon: <Settings className="h-10 w-10 text-green-500" />,
    },
    {
      title: "Notifications",
      description: "View your notifications and alerts",
      icon: <Bell className="h-10 w-10 text-green-500" />,
    },
    {
      title: "Messages",
      description: "Access your inbox and conversations",
      icon: <MessageSquare className="h-10 w-10 text-green-500" />,
    },
  ];

  return (
    <div className="page-container">
      <NavBar userType="user" />
      <main className="flex-1 bg-green-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {dashboardCards.map((card, index) => (
              <Card key={index} className="dashboard-card hover:border-green-300">
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

export default UserDashboard;
