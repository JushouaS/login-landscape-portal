
import React from 'react';
import { NavBar } from "@/components/NavBar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft, Users, ShoppingBag, UserCheck, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const OverviewPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/dashboard/admin');
  };

  // Data for the dashboard widgets
  const systemStats = {
    totalUsers: 1254,
    activeUsers: 876,
    totalProducts: 3678,
    pendingApprovals: 23
  };

  // Data for registration chart
  const registrationData = [
    { name: 'Jun', buyers: 45, sellers: 15, middlemen: 5 },
    { name: 'Jul', buyers: 52, sellers: 18, middlemen: 3 },
    { name: 'Aug', buyers: 58, sellers: 21, middlemen: 4 },
    { name: 'Sep', buyers: 65, sellers: 25, middlemen: 6 },
    { name: 'Oct', buyers: 72, sellers: 28, middlemen: 5 },
    { name: 'Nov', buyers: 80, sellers: 32, middlemen: 7 },
  ];

  // Data for user distribution
  const userDistributionData = [
    { name: 'Buyers', value: 65 },
    { name: 'Sellers', value: 25 },
    { name: 'Middlemen', value: 8 },
    { name: 'Admins', value: 2 },
  ];

  const COLORS = ['#3b82f6', '#10b981', '#a855f7', '#ef4444'];

  // Data for system alerts
  const systemAlerts = [
    {
      id: '1',
      title: 'Server Performance',
      status: 'normal',
      message: 'All systems operating normally'
    },
    {
      id: '2',
      title: 'Database Backup',
      status: 'warning',
      message: 'Last backup completed 48 hours ago'
    },
    {
      id: '3',
      title: 'Payment Gateway',
      status: 'normal',
      message: 'Processing transactions normally'
    },
    {
      id: '4',
      title: 'Security Scan',
      status: 'critical',
      message: 'Scheduled security scan skipped'
    }
  ];

  const getAlertStatusIcon = (status: 'normal' | 'warning' | 'critical') => {
    switch (status) {
      case 'normal':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'critical':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="page-container">
      <NavBar userType="admin" />
      <main className="flex-1 bg-red-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-6">
            <Button variant="ghost" onClick={handleGoBack} className="mr-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-3xl font-bold">System Overview</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Users</p>
                    <h3 className="text-2xl font-bold mt-1">{systemStats.totalUsers}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {systemStats.activeUsers} active
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Products</p>
                    <h3 className="text-2xl font-bold mt-1">{systemStats.totalProducts}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Across all sellers
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-full">
                    <ShoppingBag className="h-8 w-8 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Pending Approvals</p>
                    <h3 className="text-2xl font-bold mt-1">{systemStats.pendingApprovals}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Require action
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-full">
                    <UserCheck className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">System Health</p>
                    <h3 className="text-2xl font-bold mt-1">Good</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      1 warning, 1 critical
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-full">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>User Registration Trends</CardTitle>
                <CardDescription>
                  Monthly registration trends by user type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={registrationData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="buyers" name="Buyers" fill="#3b82f6" />
                      <Bar dataKey="sellers" name="Sellers" fill="#10b981" />
                      <Bar dataKey="middlemen" name="Middlemen" fill="#a855f7" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Distribution</CardTitle>
                <CardDescription>
                  Breakdown of user types in the system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={userDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {userDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
              <CardDescription>
                Current system status and alerts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemAlerts.map((alert) => (
                  <Card key={alert.id} className="hover:shadow-md transition-shadow">
                    <div className="p-4 flex items-center">
                      {getAlertStatusIcon(alert.status)}
                      <div className="ml-4">
                        <h3 className="font-medium">{alert.title}</h3>
                        <p className="text-sm text-gray-600">{alert.message}</p>
                      </div>
                      <div className="ml-auto">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} MultiPortal. All rights reserved.
      </footer>
    </div>
  );
};

export default OverviewPage;
