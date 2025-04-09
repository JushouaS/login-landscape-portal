
import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/AuthLayout";
import { AuthForm } from "@/components/AuthForm";
import { ShoppingBag, Store, UserCheck, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SignupPage = () => {
  const { role } = useParams<{ role?: string }>();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Validate role parameter
    if (role && !["buyer", "seller", "middleman", "admin"].includes(role)) {
      navigate("/");
    }
  }, [role, navigate]);

  if (!role) {
    return (
      <AuthLayout 
        title="Sign Up" 
        subtitle="Select your role to create an account"
        className="bg-gradient-to-r from-blue-50 to-indigo-50"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 max-w-2xl mx-auto">
          <Link to="/signup/buyer" className="hover:scale-105 transition-transform duration-200">
            <Card className="overflow-hidden border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all h-full">
              <div className="bg-blue-100 p-4 flex justify-center">
                <div className="bg-blue-500 text-white rounded-full p-3">
                  <ShoppingBag size={32} />
                </div>
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-xl font-semibold text-blue-600 mb-1">Buyer</h3>
                <p className="text-sm text-gray-600">Find trusted middlemen to help with your purchases</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/signup/seller" className="hover:scale-105 transition-transform duration-200">
            <Card className="overflow-hidden border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all h-full">
              <div className="bg-green-100 p-4 flex justify-center">
                <div className="bg-green-500 text-white rounded-full p-3">
                  <Store size={32} />
                </div>
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-xl font-semibold text-green-600 mb-1">Seller</h3>
                <p className="text-sm text-gray-600">Sell your products with secure transaction support</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/signup/middleman" className="hover:scale-105 transition-transform duration-200">
            <Card className="overflow-hidden border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all h-full">
              <div className="bg-purple-100 p-4 flex justify-center">
                <div className="bg-purple-500 text-white rounded-full p-3">
                  <UserCheck size={32} />
                </div>
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-xl font-semibold text-purple-600 mb-1">Middleman</h3>
                <p className="text-sm text-gray-600">Facilitate safe exchanges between buyers and sellers</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/signup/admin" className="hover:scale-105 transition-transform duration-200">
            <Card className="overflow-hidden border-2 border-red-200 hover:border-red-400 hover:shadow-lg transition-all h-full">
              <div className="bg-red-100 p-4 flex justify-center">
                <div className="bg-red-500 text-white rounded-full p-3">
                  <ShieldCheck size={32} />
                </div>
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-xl font-semibold text-red-600 mb-1">Admin</h3>
                <p className="text-sm text-gray-600">Manage and monitor all platform activities</p>
              </CardContent>
            </Card>
          </Link>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </div>
      </AuthLayout>
    );
  }

  const formattedRole = role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <AuthLayout 
      title={`${formattedRole} Registration`} 
      subtitle={`Create your ${role} account to get started.`}
      className="bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <AuthForm type="signup" role={role as "buyer" | "seller" | "middleman" | "admin"} />
      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link to={`/login/${role}`} className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignupPage;
