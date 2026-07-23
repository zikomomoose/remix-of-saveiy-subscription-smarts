import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate, useParams } from "react-router-dom";
import { seoRedirectSlugs } from "./data/seoRedirects";

const seoRedirectSet = new Set(seoRedirectSlugs);
const SlugRedirect = () => {
  const { slug } = useParams();
  if (slug && seoRedirectSet.has(slug)) return <Navigate to="/" replace />;
  return <NotFound />;
};
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Product from "./pages/Product.tsx";
import HowItWorks from "./pages/HowItWorks.tsx";
import About from "./pages/About.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Waitlist from "./pages/Waitlist.tsx";
import DeleteAccount from "./pages/DeleteAccount.tsx";
import AlternativesPage from "./pages/AlternativesPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/delete" element={<DeleteAccount />} />
          <Route path="/alternatives/:slug" element={<AlternativesPage />} />
          <Route path="/:slug" element={<SlugRedirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
