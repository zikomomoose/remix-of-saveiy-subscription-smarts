import Seo from "@/components/Seo";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-muted flex flex-col">
      <Seo
        title="Page not found | Saveiy"
        description="The page you are looking for does not exist. Return to Saveiy home."
        noindex
        notFound
      />
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <div className="flex items-center justify-center gap-5">
            <Link to="/" className="text-primary underline hover:text-primary/90">Home</Link>
            <Link to="/blog" className="text-primary underline hover:text-primary/90">Blog</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
