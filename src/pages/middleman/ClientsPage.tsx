
import React from 'react';
import { NavBar } from "@/components/NavBar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ArrowLeft, Search, UserPlus, MessageSquare, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'buyer' | 'seller';
  status: 'active' | 'inactive';
  transactions: number;
  lastActivity: string;
}

const ClientsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const clients: Client[] = [
    {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '(555) 123-4567',
      type: 'buyer',
      status: 'active',
      transactions: 5,
      lastActivity: '2023-11-15'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      phone: '(555) 234-5678',
      type: 'buyer',
      status: 'active',
      transactions: 3,
      lastActivity: '2023-11-12'
    },
    {
      id: '3',
      name: 'Tech Shop Inc.',
      email: 'support@techshop.com',
      phone: '(555) 345-6789',
      type: 'seller',
      status: 'active',
      transactions: 8,
      lastActivity: '2023-11-18'
    },
    {
      id: '4',
      name: 'Home Goods Store',
      email: 'contact@homegoods.com',
      phone: '(555) 456-7890',
      type: 'seller',
      status: 'active',
      transactions: 6,
      lastActivity: '2023-11-10'
    },
    {
      id: '5',
      name: 'Emma Wilson',
      email: 'emma.wilson@example.com',
      phone: '(555) 567-8901',
      type: 'buyer',
      status: 'inactive',
      transactions: 1,
      lastActivity: '2023-10-05'
    },
    {
      id: '6',
      name: 'Luxury Jewelers',
      email: 'info@luxuryjewelers.com',
      phone: '(555) 678-9012',
      type: 'seller',
      status: 'inactive',
      transactions: 2,
      lastActivity: '2023-09-20'
    }
  ];

  const handleGoBack = () => {
    navigate('/dashboard/middleman');
  };

  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: Client['status']) => {
    switch (status) {
      case 'active': return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'inactive': return <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>;
      default: return <Badge>Unknown</Badge>;
    }
  };

  const getTypeBadge = (type: Client['type']) => {
    switch (type) {
      case 'buyer': return <Badge className="bg-blue-100 text-blue-800">Buyer</Badge>;
      case 'seller': return <Badge className="bg-purple-100 text-purple-800">Seller</Badge>;
      default: return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="page-container">
      <NavBar userType="middleman" />
      <main className="flex-1 bg-purple-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Button variant="ghost" onClick={handleGoBack} className="mr-2">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-3xl font-bold">Clients</h1>
            </div>
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Add New Client
            </Button>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Client Directory</CardTitle>
                  <CardDescription>
                    Manage your buyers and sellers
                  </CardDescription>
                </div>
                <div className="relative w-full md:w-72">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search clients..."
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
                  <TabsTrigger value="all">All Clients</TabsTrigger>
                  <TabsTrigger value="buyers">Buyers</TabsTrigger>
                  <TabsTrigger value="sellers">Sellers</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="inactive">Inactive</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-0">
                  <ClientsList clients={filteredClients} getStatusBadge={getStatusBadge} getTypeBadge={getTypeBadge} />
                </TabsContent>

                <TabsContent value="buyers" className="mt-0">
                  <ClientsList 
                    clients={filteredClients.filter(client => client.type === 'buyer')} 
                    getStatusBadge={getStatusBadge} 
                    getTypeBadge={getTypeBadge} 
                  />
                </TabsContent>

                <TabsContent value="sellers" className="mt-0">
                  <ClientsList 
                    clients={filteredClients.filter(client => client.type === 'seller')} 
                    getStatusBadge={getStatusBadge} 
                    getTypeBadge={getTypeBadge} 
                  />
                </TabsContent>

                <TabsContent value="active" className="mt-0">
                  <ClientsList 
                    clients={filteredClients.filter(client => client.status === 'active')} 
                    getStatusBadge={getStatusBadge} 
                    getTypeBadge={getTypeBadge} 
                  />
                </TabsContent>

                <TabsContent value="inactive" className="mt-0">
                  <ClientsList 
                    clients={filteredClients.filter(client => client.status === 'inactive')} 
                    getStatusBadge={getStatusBadge} 
                    getTypeBadge={getTypeBadge} 
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

interface ClientsListProps {
  clients: Client[];
  getStatusBadge: (status: Client['status']) => React.ReactNode;
  getTypeBadge: (type: Client['type']) => React.ReactNode;
}

const ClientsList = ({ clients, getStatusBadge, getTypeBadge }: ClientsListProps) => {
  if (clients.length === 0) {
    return (
      <div className="text-center py-8">
        <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
        <p className="text-gray-500">No clients found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {clients.map((client) => (
        <Card key={client.id} className="hover:shadow-md transition-shadow">
          <div className="p-4">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <User className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{client.name}</h3>
                  <p className="text-sm text-gray-600">{client.email}</p>
                </div>
              </div>
              {getStatusBadge(client.status)}
            </div>
            
            <div className="mt-4 mb-2">
              {getTypeBadge(client.type)}
            </div>
            
            <div className="text-sm text-gray-600 mb-3">
              <p>Phone: {client.phone}</p>
              <p>Transactions: {client.transactions}</p>
              <p>Last Activity: {new Date(client.lastActivity).toLocaleDateString()}</p>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                View Profile
              </Button>
              <Button variant="outline" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ClientsPage;
