import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';

function Header() {
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="text-lg font-bold text-primary">
          K.A. Technology
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Reordered: Services */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/services" className="px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                  Services
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Reordered: Products */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/products" className="px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                  Products
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Reordered: Custom Request */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/request" className="px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                  Custom Request
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
             {/* Reordered: About Us */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/about" className="px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                  About Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 py-6">
              <Link to="/" className="text-lg font-semibold" onClick={() => { /* Close sheet */ }}>Home</Link>
              {/* Reordered: Services */}
              <Link to="/services" className="text-lg font-semibold" onClick={() => { /* Close sheet */ }}>Services</Link>
              {/* Reordered: Products */}
              <Link to="/products" className="text-lg font-semibold" onClick={() => { /* Close sheet */ }}>Products</Link>
              {/* Reordered: Custom Request */}
              <Link to="/request" className="text-lg font-semibold" onClick={() => { /* Close sheet */ }}>Custom Request</Link>
              {/* Reordered: About Us */}
              <Link to="/about" className="text-lg font-semibold" onClick={() => { /* Close sheet */ }}>About Us</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Header;
