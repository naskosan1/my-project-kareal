import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-8 border-t">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">K.A. Technology</h3>
          <p className="text-sm text-muted-foreground">
            Your partner in precision machine dies and tooling.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/request" className="hover:underline">Custom Request</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <address className="not-italic text-sm text-muted-foreground space-y-2">
            <p>K.A. Technology</p>
            <p>123 Industrial Way</p>
            <p>Tooltown, CA 91234</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@katechnology.net</p>
          </address>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} K.A. Technology. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
