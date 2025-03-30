
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserCircle, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavBarProps {
  userType?: "buyer" | "user" | "middleman" | "admin";
}

export function NavBar({ userType }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getNavColorClass = () => {
    switch (userType) {
      case "buyer":
        return "bg-blue-50 border-blue-100";
      case "user":
        return "bg-green-50 border-green-100";
      case "middleman":
        return "bg-purple-50 border-purple-100";
      case "admin":
        return "bg-red-50 border-red-100";
      default:
        return "bg-white border-gray-100";
    }
  };

  const isLoggedIn = userType !== undefined;
  const isAuthPage = location.pathname.includes("/login") || location.pathname.includes("/signup");

  if (isAuthPage) {
    return null;
  }

  return (
    <nav className={`border-b ${getNavColorClass()} sticky top-0 z-50`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Multi<span className="text-primary">Portal</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <span className="text-sm capitalize">{userType} Dashboard</span>
                <Link to="/">
                  <Button variant="ghost" size="sm">
                    Logout
                  </Button>
                </Link>
                <Button size="sm" variant="ghost">
                  <UserCircle className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="default" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2">
            {isLoggedIn ? (
              <>
                <p className="text-sm capitalize px-2">{userType} Dashboard</p>
                <Link to="/" className="block px-2 py-1 hover:bg-gray-100 rounded">
                  Logout
                </Link>
                <Link to="/profile" className="block px-2 py-1 hover:bg-gray-100 rounded">
                  Profile
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-2 py-1 hover:bg-gray-100 rounded">
                  Login
                </Link>
                <Link to="/signup" className="block px-2 py-1 hover:bg-gray-100 rounded">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
