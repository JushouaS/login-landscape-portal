
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  showBackLink?: boolean;
  backLinkUrl?: string;
  backLinkText?: string;
  className?: string;
}

export function AuthLayout({
  children,
  title,
  subtitle,
  showBackLink = true,
  backLinkUrl = "/",
  backLinkText = "Back to home",
  className,
}: AuthLayoutProps) {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      {/* Header with logo */}
      <header className="py-4 px-6 bg-white shadow-sm">
        <div className="container mx-auto">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">S</div>
            <span className="text-xl font-bold text-blue-600">Sellmate</span>
          </Link>
        </div>
      </header>
      
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-2"></div>
          <div className="p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 animate-fade-in">
                <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
                {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
              </div>
              
              <div className="animate-fade-in">
                {children}
              </div>
              
              {showBackLink && (
                <Link 
                  to={backLinkUrl} 
                  className="flex items-center text-sm text-muted-foreground hover:text-blue-600 gap-1 transition-colors animate-fade-in"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>{backLinkText}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-4 text-center text-xs text-gray-500 bg-white border-t">
        <div className="container mx-auto">
          <div className="mb-2">© {new Date().getFullYear()} Sellmate. All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
            <Link to="/careers" className="hover:text-blue-600 transition-colors">Careers</Link>
            <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to="/security" className="hover:text-blue-600 transition-colors">Security</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
