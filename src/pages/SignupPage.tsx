
import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/AuthLayout";
import { AuthForm } from "@/components/AuthForm";

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
        subtitle="Create an account to get started."
      >
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-4">
            <Link to="/signup/buyer" className="block p-4 border rounded-md hover:bg-blue-50 transition-colors">
              Buyer Registration
            </Link>
            <Link to="/signup/seller" className="block p-4 border rounded-md hover:bg-green-50 transition-colors">
              Seller Registration
            </Link>
            <Link to="/signup/middleman" className="block p-4 border rounded-md hover:bg-purple-50 transition-colors">
              Middleman Registration
            </Link>
            <Link to="/signup/admin" className="block p-4 border rounded-md hover:bg-red-50 transition-colors">
              Admin Registration
            </Link>
          </div>
        </div>
      </AuthLayout>
    );
  }

  const formattedRole = role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <AuthLayout 
      title={`${formattedRole} Registration`} 
      subtitle={`Create your ${role} account to get started.`}
    >
      <AuthForm type="signup" role={role as "buyer" | "seller" | "middleman" | "admin"} />
      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link to={`/login/${role}`} className="text-primary hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignupPage;
