
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BuyerDashboard from "./pages/dashboards/BuyerDashboard";
import SellerDashboard from "./pages/dashboards/SellerDashboard";
import MiddlemanDashboard from "./pages/dashboards/MiddlemanDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import NotFound from "./pages/NotFound";

// Buyer Pages
import PaymentMethodsPage from "./pages/buyer/PaymentMethodsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/:role" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signup/:role" element={<SignupPage />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard/buyer" element={<BuyerDashboard />} />
          <Route path="/dashboard/seller" element={<SellerDashboard />} />
          <Route path="/dashboard/middleman" element={<MiddlemanDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          
          {/* Buyer Feature Routes */}
          <Route path="/dashboard/buyer/payment-methods" element={<PaymentMethodsPage />} />
          
          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
