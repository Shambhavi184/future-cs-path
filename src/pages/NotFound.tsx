import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/button";
import { Brain, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center gradient-subtle">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <div className="w-24 h-24 mx-auto gradient-primary rounded-full flex items-center justify-center shadow-lg glow">
            <Brain className="h-12 w-12 text-white" />
          </div>
          
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Button asChild className="mt-8">
          <Link to="/">
            <Home className="h-4 w-4 mr-2" />
            Return to Curriculum
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
