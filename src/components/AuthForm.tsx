
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Upload } from "lucide-react";
import { toast } from "sonner";

interface AuthFormProps {
  type: "login" | "signup";
  role: "buyer" | "seller" | "middleman";
}

export function AuthForm({ type, role }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [idDocument, setIdDocument] = useState<File | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

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

    if (type === "signup") {
      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        setIsLoading(false);
        return;
      }
      
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {type === "signup" && (
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Password</Label>
          {type === "login" && (
            <a href="#" className="text-xs text-primary hover:underline">
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
            required
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      
      {type === "signup" && (
        <>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {role === "middleman" && (
            <div className="space-y-2">
              <Label htmlFor="idDocument">Valid ID Document</Label>
              <div className="border border-input rounded-md p-2">
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => document.getElementById("idDocument")?.click()}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {idDocument ? 'Change File' : 'Upload ID'}
                  </Button>
                  {idDocument && (
                    <span className="text-xs text-gray-500 truncate max-w-[150px]">
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
                <p className="text-xs text-gray-500 mt-2">
                  Please upload a valid government-issued ID (passport, driver's license, national ID card)
                </p>
              </div>
            </div>
          )}
        </>
      )}
      
      <Button
        type="submit"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : type === "login" ? "Login" : "Create Account"}
      </Button>
    </form>
  );
}
