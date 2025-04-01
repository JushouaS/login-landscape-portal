
import React, { useState } from 'react';
import { NavBar } from "@/components/NavBar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const PaymentMethodsPage = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [selectedAccount, setSelectedAccount] = useState<string>("");

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'gcash',
      name: 'GCash',
      icon: '/lovable-uploads/e0f77b0f-875e-4f04-9508-7fd4610e69cf.png',
      description: 'Pay using your GCash account'
    },
    {
      id: 'maya',
      name: 'Maya',
      icon: '/lovable-uploads/e0f77b0f-875e-4f04-9508-7fd4610e69cf.png',
      description: 'Pay using your Maya account'
    },
    {
      id: 'credit-card',
      name: 'Credit Card',
      icon: '/lovable-uploads/e0f77b0f-875e-4f04-9508-7fd4610e69cf.png',
      description: 'Pay using your credit or debit card'
    },
    {
      id: 'bank-transfer',
      name: 'Bank Transfer',
      icon: '/lovable-uploads/e0f77b0f-875e-4f04-9508-7fd4610e69cf.png',
      description: 'Pay via bank transfer'
    }
  ];

  const handleGoBack = () => {
    navigate('/dashboard/buyer');
  };

  const handleSelectMethod = (methodId: string) => {
    setSelectedMethod(methodId);
  };

  const accounts = {
    gcash: ['GCash Personal', 'GCash Business'],
    maya: ['Maya Personal', 'Maya Business'],
    'credit-card': ['Visa', 'Mastercard', 'American Express'],
    'bank-transfer': ['BDO', 'BPI', 'Metrobank', 'Union Bank']
  };

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
            <h1 className="text-3xl font-bold">Payment Methods</h1>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Select Your Preferred Payment Method</CardTitle>
              <CardDescription>
                Choose from our available payment options to complete your transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All Methods</TabsTrigger>
                  <TabsTrigger value="e-wallet">E-Wallet</TabsTrigger>
                  <TabsTrigger value="cards">Cards</TabsTrigger>
                  <TabsTrigger value="banks">Banks</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {paymentMethods.map((method) => (
                      <Card 
                        key={method.id}
                        className={`cursor-pointer transition-all hover:shadow-md ${selectedMethod === method.id ? 'border-blue-500 ring-2 ring-blue-300' : 'hover:border-blue-300'}`}
                        onClick={() => handleSelectMethod(method.id)}
                      >
                        <div className="p-6 flex flex-col items-center text-center gap-4">
                          <div className="relative">
                            <CreditCard className="h-10 w-10 text-blue-500" />
                            {selectedMethod === method.id && (
                              <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full p-1">
                                <Check className="h-3 w-3" />
                              </div>
                            )}
                          </div>
                          <h2 className="text-xl font-semibold">{method.name}</h2>
                          <p className="text-gray-600 text-sm">{method.description}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="e-wallet" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {paymentMethods.filter(m => ['gcash', 'maya'].includes(m.id)).map((method) => (
                      <Card 
                        key={method.id}
                        className={`cursor-pointer transition-all hover:shadow-md ${selectedMethod === method.id ? 'border-blue-500 ring-2 ring-blue-300' : 'hover:border-blue-300'}`}
                        onClick={() => handleSelectMethod(method.id)}
                      >
                        <div className="p-6 flex flex-col items-center text-center gap-4">
                          <div className="relative">
                            <CreditCard className="h-10 w-10 text-blue-500" />
                            {selectedMethod === method.id && (
                              <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full p-1">
                                <Check className="h-3 w-3" />
                              </div>
                            )}
                          </div>
                          <h2 className="text-xl font-semibold">{method.name}</h2>
                          <p className="text-gray-600 text-sm">{method.description}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="cards" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {paymentMethods.filter(m => ['credit-card'].includes(m.id)).map((method) => (
                      <Card 
                        key={method.id}
                        className={`cursor-pointer transition-all hover:shadow-md ${selectedMethod === method.id ? 'border-blue-500 ring-2 ring-blue-300' : 'hover:border-blue-300'}`}
                        onClick={() => handleSelectMethod(method.id)}
                      >
                        <div className="p-6 flex flex-col items-center text-center gap-4">
                          <div className="relative">
                            <CreditCard className="h-10 w-10 text-blue-500" />
                            {selectedMethod === method.id && (
                              <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full p-1">
                                <Check className="h-3 w-3" />
                              </div>
                            )}
                          </div>
                          <h2 className="text-xl font-semibold">{method.name}</h2>
                          <p className="text-gray-600 text-sm">{method.description}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="banks" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {paymentMethods.filter(m => ['bank-transfer'].includes(m.id)).map((method) => (
                      <Card 
                        key={method.id}
                        className={`cursor-pointer transition-all hover:shadow-md ${selectedMethod === method.id ? 'border-blue-500 ring-2 ring-blue-300' : 'hover:border-blue-300'}`}
                        onClick={() => handleSelectMethod(method.id)}
                      >
                        <div className="p-6 flex flex-col items-center text-center gap-4">
                          <div className="relative">
                            <CreditCard className="h-10 w-10 text-blue-500" />
                            {selectedMethod === method.id && (
                              <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full p-1">
                                <Check className="h-3 w-3" />
                              </div>
                            )}
                          </div>
                          <h2 className="text-xl font-semibold">{method.name}</h2>
                          <p className="text-gray-600 text-sm">{method.description}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {selectedMethod && (
            <Card>
              <CardHeader>
                <CardTitle>Choose Your {paymentMethods.find(m => m.id === selectedMethod)?.name} Account</CardTitle>
                <CardDescription>
                  Select the specific account you want to use for this payment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Select value={selectedAccount} onValueChange={setSelectedAccount}>
                    <SelectTrigger className="w-full md:w-80">
                      <SelectValue placeholder="Select an account" />
                    </SelectTrigger>
                    <SelectContent>
                      {accounts[selectedMethod as keyof typeof accounts].map((account) => (
                        <SelectItem key={account} value={account}>{account}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Button className="mt-4" disabled={!selectedAccount}>
                    Set as Default Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} MultiPortal. All rights reserved.
      </footer>
    </div>
  );
};

export default PaymentMethodsPage;
