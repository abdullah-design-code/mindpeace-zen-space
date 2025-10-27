import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            MindPeace
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`transition-colors hover:text-primary ${
                isActive("/") ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className={`transition-colors hover:text-primary ${
                isActive("/blog") ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className={`transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              About
            </Link>
            <Link to="/contact">
              <Button variant={isActive("/contact") ? "default" : "outline"}>
                Contact
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center gap-2">
            <Link to="/blog">
              <Button variant="ghost" size="sm">Blog</Button>
            </Link>
            <Link to="/contact">
              <Button size="sm">Contact</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
