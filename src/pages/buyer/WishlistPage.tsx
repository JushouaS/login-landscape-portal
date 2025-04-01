
import React from 'react';
import { NavBar } from "@/components/NavBar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft, Trash2, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  addedOn: string;
  inStock: boolean;
}

const WishlistPage = () => {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = React.useState<WishlistItem[]>([
    {
      id: '1',
      name: 'Premium Headphones',
      price: 299.99,
      image: '/lovable-uploads/e0f77b0f-875e-4f04-9508-7fd4610e69cf.png',
      addedOn: '2023-11-01',
      inStock: true
    },
    {
      id: '2',
      name: 'Designer T-shirt',
      price: 49.99,
      image: '/lovable-uploads/e0f77b0f-875e-4f04-9508-7fd4610e69cf.png',
      addedOn: '2023-11-05',
      inStock: true
    },
    {
      id: '3',
      name: 'Coffee Maker',
      price: 89.99,
      image: '/lovable-uploads/e0f77b0f-875e-4f04-9508-7fd4610e69cf.png',
      addedOn: '2023-11-10',
      inStock: false
    }
  ]);

  const handleGoBack = () => {
    navigate('/dashboard/buyer');
  };

  const removeFromWishlist = (id: string) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
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
            <h1 className="text-3xl font-bold">My Wishlist</h1>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Saved Items</CardTitle>
              <CardDescription>
                Keep track of products you're interested in
              </CardDescription>
            </CardHeader>
            <CardContent>
              {wishlistItems.length === 0 ? (
                <div className="text-center py-12">
                  <Heart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-medium mb-2">Your wishlist is empty</h3>
                  <p className="text-gray-500 mb-6">Save items you like to come back to them later</p>
                  <Button onClick={() => navigate('/dashboard/buyer/products')}>
                    Browse Products
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {wishlistItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="p-4 flex flex-col md:flex-row gap-4">
                        <div className="flex items-center justify-center bg-gray-100 rounded-md w-full md:w-32 h-32">
                          <Heart className="h-12 w-12 text-blue-500" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          <p className="text-blue-600 font-medium text-lg mb-1">${item.price.toFixed(2)}</p>
                          <p className="text-sm text-gray-500 mb-3">
                            Added on {new Date(item.addedOn).toLocaleDateString()}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            <Button 
                              variant="default" 
                              size="sm"
                              disabled={!item.inStock}
                            >
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => removeFromWishlist(item.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
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

export default WishlistPage;
