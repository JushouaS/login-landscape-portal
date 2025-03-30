
import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/AuthLayout";
import { AuthForm } from "@/components/AuthForm";

const LoginPage = () => {
  const { role } = useParams<{ role?: string }>();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Validate role parameter
    if (role && !["buyer", "user", "middleman", "admin"].includes(role)) {
      navigate("/");
    }
  }, [role, navigate]);

  if (!role) {
    return (
      <AuthLayout 
        title="Login" 
        subtitle="Welcome back! Please enter your credentials to access your account."
      >
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-4">
            <Link to="/login/buyer" className="block p-4 border rounded-md hover:bg-blue-50 transition-colors">
              Buyer Login
            </Link>
            <Link to="/login/user" className="block p-4 border rounded-md hover:bg-green-50 transition-colors">
              User Login
            </Link>
            <Link to="/login/middleman" className="block p-4 border rounded-md hover:bg-purple-50 transition-colors">
              Middleman Login
            </Link>
            <Link to="/login/admin" className="block p-4 border rounded-md hover:bg-red-50 transition-colors">
              Admin Login
            </Link>
          </div>
        </div>
      </AuthLayout>
    );
  }

  const formattedRole = role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <AuthLayout 
      title={`${formattedRole} Login`} 
      subtitle={`Welcome back! Login to access your ${role} dashboard.`}
    >
      <AuthForm type="login" role={role as "buyer" | "user" | "middleman" | "admin"} />
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
