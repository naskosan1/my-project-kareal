import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCartIcon } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link

function Products() {
  // Placeholder product data
  const products = [
    {
      id: 1,
      name: "Standard Punch Die Set",
      description: "High-quality standard punch and die set for general use.",
      price: "$150.00",
      image: "https://images.pexels.com/photos/380658/pexels-photo-380658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Carbide Cutting Insert",
      description: "Durable carbide insert for precision cutting applications.",
      price: "$45.00",
      image: "https://images.pexels.com/photos/380661/pexels-photo-380661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "Sheet Metal Bending Die",
      description: "Specialized die for accurate sheet metal bending.",
      price: "$300.00",
      image: "https://images.pexels.com/photos/380669/pexels-photo-380669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
     {
      id: 4,
      name: "Stamping Die Component",
      description: "Replacement component for stamping die assemblies.",
      price: "$80.00",
      image: "https://images.pexels.com/photos/380624/pexels-photo-380624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
     {
      id: 5,
      name: "Die Maintenance Kit",
      description: "Essential tools and supplies for basic die maintenance.",
      price: "$75.00",
      image: "https://images.pexels.com/photos/380658/pexels-photo-380658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
     {
      id: 6,
      name: "Custom Die Request Consultation",
      description: "Schedule a consultation for your custom die needs.",
      price: "$0.00", // Consultation might be free
      image: "https://images.pexels.com/photos/380661/pexels-photo-380661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
    // Add more placeholder products as needed
  ];

  const handleAddToCart = (productId: number) => {
    console.log(`Product ${productId} added to cart (simulated)`);
    // In a real application, you would add logic here to manage a shopping cart state or send to a backend.
    alert(`"${products.find(p => p.id === productId)?.name}" added to cart! (Simulated)`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 animate-fade-in-down">Available Products</h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card key={product.id} className={`overflow-hidden shadow-lg flex flex-col animate-fade-in-up animate-delay-${index * 100}`}>
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <CardHeader className="flex-grow">
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold">{product.price}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => handleAddToCart(product.id)}>
                <ShoppingCartIcon className="mr-2 h-4 w-4" /> Add to Cart (Simulated)
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
       <section className="mt-16 text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4">Looking for Something Specific?</h2>
        <p className="text-muted-foreground text-lg mb-8">
          If you can't find what you need, request a custom machine die tailored to your exact specifications.
        </p>
        <Button asChild variant="outline">
          <Link to="/request">Submit Custom Request</Link>
        </Button>
      </section>
    </div>
  );
}

export default Products;
