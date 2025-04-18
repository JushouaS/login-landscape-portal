
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ForgotPasswordFlow } from "./ForgotPasswordFlow";
import { PasswordInput } from "./auth/PasswordInput";
import { IdDocumentUpload } from "./auth/IdDocumentUpload";

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
      const validations = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password)
      };
      
      setPasswordValidations(validations);
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

    if (!email || !password) {
      toast.error("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    if (type === "login" && email === adminCredentials.email && password === adminCredentials.password) {
      setTimeout(() => {
        setIsLoading(false);
        toast.success("Admin logged in successfully");
        navigate("/dashboard/admin");
      }, 1500);
      return;
    }

    if (type === "signup") {
      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        setIsLoading(false);
        return;
      }
      
      if (passwordStrength < 60) {
        toast.error("Password does not meet minimum security requirements");
        setIsLoading(false);
        return;
      }

      if (role === "middleman" && !idDocument) {
        toast.error(`Valid ID document is required for ${role} registration`);
        setIsLoading(false);
        return;
      }
    }

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
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="link" className="text-sm text-primary hover:underline p-0 h-auto font-normal">
                  Forgot password?
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Reset Password</DialogTitle>
                  <DialogDescription>
                    Follow the steps below to reset your password securely.
                  </DialogDescription>
                </DialogHeader>
                <ForgotPasswordFlow />
              </DialogContent>
            </Dialog>
          )}
        </div>

        <PasswordInput
          password={password}
          onPasswordChange={setPassword}
          showValidation={type === "signup"}
          passwordStrength={passwordStrength}
          validations={passwordValidations}
        />
      </div>
      
      {type === "signup" && (
        <>
          <PasswordInput
            password={confirmPassword}
            onPasswordChange={setConfirmPassword}
            label="Confirm Password"
          />

          {role === "middleman" && (
            <IdDocumentUpload
              idDocument={idDocument}
              onFileChange={handleFileChange}
            />
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
