
import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/AuthLayout";
import { AuthForm } from "@/components/AuthForm";
import { ShoppingBag, Store, UserCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LoginPage = () => {
  const { role } = useParams<{ role?: string }>();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Validate role parameter
    if (role && !["buyer", "seller", "middleman"].includes(role)) {
      navigate("/");
    }
  }, [role, navigate]);

  if (!role) {
    return (
      <AuthLayout 
        title="Login" 
        subtitle="Welcome back! Please select your account type."
        className="bg-gradient-to-r from-blue-50 to-indigo-50"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 max-w-2xl mx-auto">
          <Link to="/login/buyer" className="hover:scale-105 transition-transform duration-200">
            <Card className="overflow-hidden border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all h-full">
              <div className="bg-blue-100 p-4 flex justify-center">
                <div className="bg-blue-500 text-white rounded-full p-3">
                  <ShoppingBag size={32} />
                </div>
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-xl font-semibold text-blue-600 mb-1">Buyer</h3>
                <p className="text-sm text-gray-600">Access your buyer account</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/login/seller" className="hover:scale-105 transition-transform duration-200">
            <Card className="overflow-hidden border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all h-full">
              <div className="bg-green-100 p-4 flex justify-center">
                <div className="bg-green-500 text-white rounded-full p-3">
                  <Store size={32} />
                </div>
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-xl font-semibold text-green-600 mb-1">Seller</h3>
                <p className="text-sm text-gray-600">Access your seller dashboard</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/login/middleman" className="hover:scale-105 transition-transform duration-200">
            <Card className="overflow-hidden border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all h-full">
              <div className="bg-purple-100 p-4 flex justify-center">
                <div className="bg-purple-500 text-white rounded-full p-3">
                  <UserCheck size={32} />
                </div>
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-xl font-semibold text-purple-600 mb-1 whitespace-nowrap">Middleman</h3>
                <p className="text-sm text-gray-600">Access your middleman account</p>
              </CardContent>
            </Card>
          </Link>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </div>
      </AuthLayout>
    );
  }

  const formattedRole = role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <AuthLayout 
      title={`${formattedRole} Login`} 
      subtitle={`Welcome back! Login to access your ${role} dashboard.`}
      className="bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <AuthForm type="login" role={role as "buyer" | "seller" | "middleman"} />
      <p className="text-center text-sm">
        Don't have an account?{" "}
        <Link to={`/signup/${role}`} className="text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
