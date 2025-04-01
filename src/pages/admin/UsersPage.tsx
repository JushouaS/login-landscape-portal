
import React from 'react';
import { NavBar } from "@/components/NavBar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ArrowLeft, Search, UserPlus, Edit, Trash2, Lock, Shield, Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'middleman' | 'admin';
  status: 'active' | 'suspended' | 'pending';
  registeredOn: string;
  lastActive: string;
  verified: boolean;
}

const UsersPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const users: User[] = [
    {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'buyer',
      status: 'active',
      registeredOn: '2023-06-15',
      lastActive: '2023-11-18',
      verified: true
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      role: 'buyer',
      status: 'active',
      registeredOn: '2023-07-22',
      lastActive: '2023-11-15',
      verified: true
    },
    {
      id: '3',
      name: 'Tech Shop Inc.',
      email: 'support@techshop.com',
      role: 'seller',
      status: 'active',
      registeredOn: '2023-05-10',
      lastActive: '2023-11-19',
      verified: true
    },
    {
      id: '4',
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      role: 'middleman',
      status: 'active',
      registeredOn: '2023-08-05',
      lastActive: '2023-11-17',
      verified: true
    },
    {
      id: '5',
      name: 'Emma Wilson',
      email: 'emma.wilson@example.com',
      role: 'buyer',
      status: 'suspended',
      registeredOn: '2023-09-12',
      lastActive: '2023-10-25',
      verified: true
    },
    {
      id: '6',
      name: 'Robert Davis',
      email: 'robert.davis@example.com',
      role: 'seller',
      status: 'pending',
      registeredOn: '2023-11-10',
      lastActive: '2023-11-10',
      verified: false
    },
    {
      id: '7',
      name: 'Admin User',
      email: 'admin@multiportal.com',
      role: 'admin',
      status: 'active',
      registeredOn: '2023-01-01',
      lastActive: '2023-11-19',
      verified: true
    }
  ];

  const handleGoBack = () => {
    navigate('/dashboard/admin');
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleBadge = (role: User['role']) => {
    switch (role) {
      case 'buyer': return <Badge className="bg-blue-100 text-blue-800">Buyer</Badge>;
      case 'seller': return <Badge className="bg-green-100 text-green-800">Seller</Badge>;
      case 'middleman': return <Badge className="bg-purple-100 text-purple-800">Middleman</Badge>;
      case 'admin': return <Badge className="bg-red-100 text-red-800">Admin</Badge>;
      default: return <Badge>Unknown</Badge>;
    }
  };

  const getStatusBadge = (status: User['status']) => {
    switch (status) {
      case 'active': return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'suspended': return <Badge className="bg-red-100 text-red-800">Suspended</Badge>;
      case 'pending': return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      default: return <Badge>Unknown</Badge>;
    }
  };

  const getStatusActions = (user: User) => {
    switch (user.status) {
      case 'active':
        return (
          <Button variant="outline" size="sm" className="text-yellow-600">
            <Lock className="h-4 w-4 mr-2" />
            Suspend
          </Button>
        );
      case 'suspended':
        return (
          <Button variant="outline" size="sm" className="text-green-600">
            <Check className="h-4 w-4 mr-2" />
            Reactivate
          </Button>
        );
      case 'pending':
        return (
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-green-600">
              <Check className="h-4 w-4 mr-2" />
              Approve
            </Button>
            <Button variant="outline" size="sm" className="text-red-600">
              <X className="h-4 w-4 mr-2" />
              Reject
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="page-container">
      <NavBar userType="admin" />
      <main className="flex-1 bg-red-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Button variant="ghost" onClick={handleGoBack} className="mr-2">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-3xl font-bold">User Management</h1>
            </div>
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Add New User
            </Button>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Users</CardTitle>
                  <CardDescription>
                    Manage all users in the system
                  </CardDescription>
                </div>
                <div className="relative w-full md:w-72">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search users..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All Users</TabsTrigger>
                  <TabsTrigger value="buyers">Buyers</TabsTrigger>
                  <TabsTrigger value="sellers">Sellers</TabsTrigger>
                  <TabsTrigger value="middlemen">Middlemen</TabsTrigger>
                  <TabsTrigger value="admins">Admins</TabsTrigger>
                  <TabsTrigger value="pending">Pending Approval</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-0">
                  <UsersTable 
                    users={filteredUsers} 
                    getRoleBadge={getRoleBadge} 
                    getStatusBadge={getStatusBadge}
                    getStatusActions={getStatusActions}
                  />
                </TabsContent>

                <TabsContent value="buyers" className="mt-0">
                  <UsersTable 
                    users={filteredUsers.filter(user => user.role === 'buyer')} 
                    getRoleBadge={getRoleBadge} 
                    getStatusBadge={getStatusBadge}
                    getStatusActions={getStatusActions}
                  />
                </TabsContent>

                <TabsContent value="sellers" className="mt-0">
                  <UsersTable 
                    users={filteredUsers.filter(user => user.role === 'seller')} 
                    getRoleBadge={getRoleBadge} 
                    getStatusBadge={getStatusBadge}
                    getStatusActions={getStatusActions}
                  />
                </TabsContent>

                <TabsContent value="middlemen" className="mt-0">
                  <UsersTable 
                    users={filteredUsers.filter(user => user.role === 'middleman')} 
                    getRoleBadge={getRoleBadge} 
                    getStatusBadge={getStatusBadge}
                    getStatusActions={getStatusActions}
                  />
                </TabsContent>

                <TabsContent value="admins" className="mt-0">
                  <UsersTable 
                    users={filteredUsers.filter(user => user.role === 'admin')} 
                    getRoleBadge={getRoleBadge} 
                    getStatusBadge={getStatusBadge}
                    getStatusActions={getStatusActions}
                  />
                </TabsContent>

                <TabsContent value="pending" className="mt-0">
                  <UsersTable 
                    users={filteredUsers.filter(user => user.status === 'pending')} 
                    getRoleBadge={getRoleBadge} 
                    getStatusBadge={getStatusBadge}
                    getStatusActions={getStatusActions}
                  />
                </TabsContent>
              </Tabs>
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

interface UsersTableProps {
  users: User[];
  getRoleBadge: (role: User['role']) => React.ReactNode;
  getStatusBadge: (status: User['status']) => React.ReactNode;
  getStatusActions: (user: User) => React.ReactNode;
}

const UsersTable = ({ users, getRoleBadge, getStatusBadge, getStatusActions }: UsersTableProps) => {
  if (users.length === 0) {
    return (
      <div className="text-center py-8">
        <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
        <p className="text-gray-500">No users found</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b text-sm text-gray-500">
            <th className="text-left py-3 px-4">Name</th>
            <th className="text-left py-3 px-4">Email</th>
            <th className="text-left py-3 px-4">Role</th>
            <th className="text-left py-3 px-4">Status</th>
            <th className="text-left py-3 px-4">Registered On</th>
            <th className="text-left py-3 px-4">Last Active</th>
            <th className="text-left py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">
                <div className="flex items-center">
                  {user.name}
                  {user.role === 'admin' && (
                    <Shield className="h-4 w-4 text-red-500 ml-2" />
                  )}
                </div>
              </td>
              <td className="py-3 px-4 text-gray-600">{user.email}</td>
              <td className="py-3 px-4">{getRoleBadge(user.role)}</td>
              <td className="py-3 px-4">{getStatusBadge(user.status)}</td>
              <td className="py-3 px-4 text-gray-600">{new Date(user.registeredOn).toLocaleDateString()}</td>
              <td className="py-3 px-4 text-gray-600">{new Date(user.lastActive).toLocaleDateString()}</td>
              <td className="py-3 px-4">
                <div className="flex gap-2">
                  {getStatusActions(user)}
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  {user.role !== 'admin' && (
                    <Button variant="outline" size="sm" className="text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
