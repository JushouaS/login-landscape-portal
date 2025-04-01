
import React, { useState } from 'react';
import { NavBar } from "@/components/NavBar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Star, UserCheck, CheckCircle2, BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Middleman {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  expertise: string[];
  description: string;
  transactions: number;
  successRate: string;
}

// Moved renderRatingStars function outside the components to make it accessible to both
const renderRatingStars = (rating: number) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
        />
      ))}
      <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
    </div>
  );
};

const BrowseMiddlemenPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const middlemen: Middleman[] = [
    {
      id: '1',
      name: 'Sofia Rodriguez',
      avatar: '',
      rating: 4.9,
      expertise: ['electronics', 'gadgets', 'technology'],
      description: 'Specializing in high-value electronic transactions with 6+ years of experience in the tech industry.',
      transactions: 328,
      successRate: '99.2%'
    },
    {
      id: '2',
      name: 'Marcus Kim',
      avatar: '',
      rating: 4.8,
      expertise: ['fashion', 'collectibles', 'luxury'],
      description: 'Expert in authenticating luxury items and collectibles. Former appraiser for a major auction house.',
      transactions: 251,
      successRate: '98.7%'
    },
    {
      id: '3',
      name: 'Priya Patel',
      avatar: '',
      rating: 4.7,
      expertise: ['real estate', 'furniture', 'home'],
      description: 'Licensed real estate agent specializing in property and high-value home goods transactions.',
      transactions: 183,
      successRate: '97.5%'
    },
    {
      id: '4',
      name: 'Daniel Jackson',
      avatar: '',
      rating: 4.9,
      expertise: ['automotive', 'vehicles', 'parts'],
      description: 'Certified mechanic and vehicle inspector with expertise in all automotive transactions.',
      transactions: 209,
      successRate: '99.5%'
    },
    {
      id: '5',
      name: 'Emma Wilson',
      avatar: '',
      rating: 4.8,
      expertise: ['art', 'antiques', 'collectibles'],
      description: 'Fine arts degree with specialization in authentication of artwork and antiques.',
      transactions: 176,
      successRate: '98.9%'
    },
    {
      id: '6',
      name: 'Jamal Ahmed',
      avatar: '',
      rating: 4.6,
      expertise: ['sports', 'memorabilia', 'equipment'],
      description: 'Former professional athlete specializing in sports equipment and memorabilia authentication.',
      transactions: 158,
      successRate: '97.1%'
    }
  ];

  const handleGoBack = () => {
    navigate('/dashboard/buyer');
  };

  const filteredMiddlemen = middlemen.filter(middleman => 
    middleman.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    middleman.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    middleman.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Removed renderRatingStars from here since it's now defined globally

  return (
    <div className="page-container">
      <NavBar userType="buyer" />
      <main className="flex-1 bg-blue-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-6">
            <Button variant="ghost" onClick={handleGoBack} className="mr-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-3xl font-bold">Browse Middlemen</h1>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Find Trusted Middlemen</CardTitle>
              <CardDescription>
                Browse experienced middlemen who can help secure your transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search by name, expertise, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 max-w-3xl"
                />
              </div>
              
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All Experts</TabsTrigger>
                  <TabsTrigger value="electronics">Electronics</TabsTrigger>
                  <TabsTrigger value="fashion">Fashion & Luxury</TabsTrigger>
                  <TabsTrigger value="home">Home & Living</TabsTrigger>
                  <TabsTrigger value="automotive">Automotive</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMiddlemen.map((middleman) => (
                      <MiddlemanCard key={middleman.id} middleman={middleman} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="electronics" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMiddlemen
                      .filter(middleman => middleman.expertise.includes('electronics') || 
                                         middleman.expertise.includes('technology') || 
                                         middleman.expertise.includes('gadgets'))
                      .map((middleman) => (
                        <MiddlemanCard key={middleman.id} middleman={middleman} />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="fashion" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMiddlemen
                      .filter(middleman => middleman.expertise.includes('fashion') || 
                                         middleman.expertise.includes('luxury') || 
                                         middleman.expertise.includes('collectibles'))
                      .map((middleman) => (
                        <MiddlemanCard key={middleman.id} middleman={middleman} />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="home" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMiddlemen
                      .filter(middleman => middleman.expertise.includes('home') || 
                                         middleman.expertise.includes('furniture') || 
                                         middleman.expertise.includes('real estate'))
                      .map((middleman) => (
                        <MiddlemanCard key={middleman.id} middleman={middleman} />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="automotive" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMiddlemen
                      .filter(middleman => middleman.expertise.includes('automotive') || 
                                         middleman.expertise.includes('vehicles') || 
                                         middleman.expertise.includes('parts'))
                      .map((middleman) => (
                        <MiddlemanCard key={middleman.id} middleman={middleman} />
                      ))}
                  </div>
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

const MiddlemanCard = ({ middleman }: { middleman: Middleman }) => {
  const { name, avatar, rating, expertise, description, transactions, successRate } = middleman;
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Avatar className="h-16 w-16 mr-4 border-2 border-blue-200">
            <AvatarImage src={avatar} />
            <AvatarFallback className="bg-blue-100 text-blue-800 text-lg">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center">
              <h3 className="font-bold text-lg mr-2">{name}</h3>
              <BadgeCheck className="h-5 w-5 text-blue-500" />
            </div>
            {renderRatingStars(rating)}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {expertise.map((skill, index) => (
            <Badge key={index} variant="secondary" className="capitalize">
              {skill}
            </Badge>
          ))}
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="flex justify-between items-center border-t pt-4 mt-2">
          <div className="flex items-center text-sm">
            <CheckCircle2 className="h-4 w-4 mr-1 text-green-500" />
            <span><strong>{successRate}</strong> Success</span>
          </div>
          <div className="flex items-center text-sm">
            <UserCheck className="h-4 w-4 mr-1 text-blue-500" />
            <span><strong>{transactions}</strong> Transactions</span>
          </div>
        </div>
        
        <div className="mt-4">
          <Button className="w-full">Contact Middleman</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BrowseMiddlemenPage;
