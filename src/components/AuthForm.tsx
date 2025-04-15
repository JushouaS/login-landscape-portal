
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Upload, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

interface AuthFormProps {
  type: "login" | "signup";
  role: "buyer" | "seller" | "middleman" | "admin";
}

export function AuthForm({ type, role }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [idDocument, setIdDocument] = useState<File | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });
  
  const navigate = useNavigate();

  // Admin credentials
  const adminCredentials = {
    email: "admin@sellmate.com",
    password: "Admin@123"
  };

  useEffect(() => {
    if (role === "admin" && type === "signup") {
      navigate("/login/admin");
    }
  }, [role, type, navigate]);

  useEffect(() => {
    if (password) {
      // Check password requirements
      const validations = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password)
      };
      
      setPasswordValidations(validations);
      
      // Calculate password strength (0-100)
      const validCount = Object.values(validations).filter(Boolean).length;
      setPasswordStrength(validCount * 20);
    } else {
      setPasswordStrength(0);
      setPasswordValidations({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false
      });
    }
  }, [password]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIdDocument(e.target.files[0]);
      toast.success(`File "${e.target.files[0].name}" uploaded successfully`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple validation
    if (!email || !password) {
      toast.error("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    if (role === "admin" && type === "login") {
      // Check against admin credentials
      if (email === adminCredentials.email && password === adminCredentials.password) {
        setTimeout(() => {
          setIsLoading(false);
          toast.success("Admin logged in successfully");
          navigate("/dashboard/admin");
        }, 1500);
      } else {
        setIsLoading(false);
        toast.error("Invalid admin credentials");
      }
      return;
    }

    if (type === "signup") {
      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        setIsLoading(false);
        return;
      }
      
      // Check password strength for signup
      if (passwordStrength < 60) {
        toast.error("Password does not meet minimum security requirements");
        setIsLoading(false);
        return;
      }

      // Check for ID document requirement for middleman
      if (role === "middleman" && !idDocument && type === "signup") {
        toast.error(`Valid ID document is required for ${role} registration`);
        setIsLoading(false);
        return;
      }
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      if (type === "login") {
        toast.success("Logged in successfully");
      } else {
        toast.success("Account created successfully");
      }
      
      navigate(`/dashboard/${role}`);
    }, 1500);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 40) return "bg-red-500";
    if (passwordStrength < 60) return "bg-yellow-500";
    if (passwordStrength < 80) return "bg-blue-500";
    return "bg-green-500";
  };

  const handleContactMiddleman = () => {
    toast.success("Contact request sent to middleman. They will respond shortly.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {type === "signup" && (
        <div className="space-y-3">
          <Label htmlFor="name" className="text-base">Full Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 text-base px-4"
          />
        </div>
      )}
      
      <div className="space-y-3">
        <Label htmlFor="email" className="text-base">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 text-base px-4"
          required
        />
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <Label htmlFor="password" className="text-base">Password</Label>
          {type === "login" && (
            <a href="#" className="text-sm text-primary hover:underline" onClick={(e) => {
              e.preventDefault();
              toast.info("Password reset link sent to your email");
            }}>
              Forgot password?
            </a>
          )}
        </div>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 text-base px-4"
            required
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-4"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </Button>
        </div>

        {type === "signup" && (
          <div className="mt-3 space-y-3">
            <div className="space-y-2">
              <Progress value={passwordStrength} className={`h-2 ${getPasswordStrengthColor()}`} />
              <p className="text-sm text-gray-500">Password strength: {passwordStrength < 40 ? 'Weak' : passwordStrength < 60 ? 'Fair' : passwordStrength < 80 ? 'Good' : 'Strong'}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              <div className="flex items-center gap-2 text-sm">
                {passwordValidations.length ? 
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> : 
                  <XCircle className="h-4 w-4 text-red-500" />}
                <span>At least 8 characters</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                {passwordValidations.uppercase ? 
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> : 
                  <XCircle className="h-4 w-4 text-red-500" />}
                <span>Uppercase letter</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                {passwordValidations.lowercase ? 
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> : 
                  <XCircle className="h-4 w-4 text-red-500" />}
                <span>Lowercase letter</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                {passwordValidations.number ? 
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> : 
                  <XCircle className="h-4 w-4 text-red-500" />}
                <span>At least 1 number</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                {passwordValidations.special ? 
                  <CheckCircle2 className="h-4 w-4 text-green-500" /> : 
                  <XCircle className="h-4 w-4 text-red-500" />}
                <span>Special character</span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {type === "signup" && (
        <>
          <div className="space-y-3">
            <Label htmlFor="confirmPassword" className="text-base">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-12 text-base px-4"
                required
              />
            </div>
          </div>

          {role === "middleman" && (
            <div className="space-y-3">
              <Label htmlFor="idDocument" className="text-base">Valid ID Document</Label>
              <div className="border border-input rounded-md p-4">
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-12 text-base"
                    onClick={() => document.getElementById("idDocument")?.click()}
                  >
                    <Upload className="h-5 w-5 mr-2" />
                    {idDocument ? 'Change File' : 'Upload ID'}
                  </Button>
                  {idDocument && (
                    <span className="text-sm text-gray-500 truncate max-w-[200px]">
                      {idDocument.name}
                    </span>
                  )}
                </div>
                <Input
                  id="idDocument"
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <p className="text-sm text-gray-500 mt-3">
                  Please upload a valid government-issued ID (passport, driver's license, national ID card)
                </p>
              </div>
            </div>
          )}
        </>
      )}
      
      <Button
        type="submit"
        className="w-full h-12 text-base font-semibold"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : type === "login" ? "Login" : "Create Account"}
      </Button>
    </form>
  );
}
