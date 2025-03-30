
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
    <div className={cn("auth-layout", className)}>
      <div className="auth-form-container">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
            {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
          </div>
          {children}
          
          {showBackLink && (
            <Link 
              to={backLinkUrl} 
              className="flex items-center text-sm text-muted-foreground hover:text-primary gap-1"
            >
              <ArrowLeft className="h-3 w-3" />
              <span>{backLinkText}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
