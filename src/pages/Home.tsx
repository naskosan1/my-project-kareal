import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center rounded-lg overflow-hidden mb-16" style={{ backgroundImage: 'url(https://images.pexels.com/photos/380669/pexels-photo-380669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-white text-center py-24 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Precision Machine Dies & Tooling</h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in-up animate-delay-200">
            Delivering quality, precision, and reliability for your manufacturing needs.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up animate-delay-400">
            <Button asChild size="lg" className="px-8 py-3 text-lg">
              <Link to="/services">Our Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-3 text-lg text-white border-white hover:bg-white hover:text-primary">
              <Link to="/request">Get a Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section Snippet */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="animate-fade-in-left">
          <h2 className="text-3xl font-bold mb-4">About K.A. Technology</h2>
          <p className="text-muted-foreground mb-6">
            With decades of experience, K.A. Technology is a trusted name in the manufacturing of high-quality machine dies and precision tooling. We are committed to delivering exceptional craftsmanship and reliable solutions that meet the stringent demands of modern industry.
          </p>
          <Button asChild>
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg animate-fade-in-right">
           <img src="https://images.pexels.com/photos/380624/pexels-photo-380624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Precision Manufacturing" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in-up">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="animate-fade-in-up animate-delay-200">
            <CardHeader>
              <CardTitle>New Die Manufacturing</CardTitle>
              <CardDescription>Custom design and manufacturing of precision machine dies.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We specialize in creating bespoke machine dies tailored to your specific requirements, ensuring optimal performance and longevity.
              </p>
            </CardContent>
          </Card>
          <Card className="animate-fade-in-up animate-delay-400">
            <CardHeader>
              <CardTitle>Die Repair & Sharpening</CardTitle>
              <CardDescription>Expert repair and maintenance to extend the life of your tools.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our skilled technicians can restore your worn or damaged dies to their original precision, saving you time and cost.
              </p>
            </CardContent>
          </Card>
          <Card className="animate-fade-in-up animate-delay-600">
            <CardHeader>
              <CardTitle>Precision Tooling</CardTitle>
              <CardDescription>High-quality tooling solutions for various applications.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Beyond dies, we offer a range of precision tooling services to support your entire manufacturing process.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8 animate-fade-in-up animate-delay-800">
          <Button asChild variant="outline">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* Call to Action for Products/Requests */}
      <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4">Need a Specific Product or Custom Solution?</h2>
        <p className="text-lg mb-8">
          Explore our available products or submit a request for a tailor-made machine die.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild variant="secondary" size="lg">
            <Link to="/products">Browse Products</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Link to="/request">Submit Custom Request</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;
