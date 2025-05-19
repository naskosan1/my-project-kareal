import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function Services() {
  const services = [
    {
      title: "New Machine Die Manufacturing",
      description: "Precision manufacturing of custom machine dies.",
      details: [
        "Design consultation and engineering",
        "Material selection (steel, carbide, etc.)",
        "CNC machining and precision grinding",
        "Heat treatment and finishing",
        "Quality inspection and testing"
      ],
      image: "https://images.pexels.com/photos/380624/pexels-photo-380624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Die Repair and Sharpening",
      description: "Restoring worn or damaged dies to optimal condition.",
      details: [
        "Assessment and diagnosis of wear/damage",
        "Precision sharpening and grinding",
        "Repair of damaged sections",
        "Surface treatment and coating",
        "Functional testing"
      ],
      image: "https://images.pexels.com/photos/380669/pexels-photo-380669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Precision Tooling Solutions",
      description: "Comprehensive tooling services for various industries.",
      details: [
        "Jigs and fixtures",
        "Gauges and templates",
        "Specialized cutting tools",
        "Prototype tooling",
        "Tooling maintenance programs"
      ],
      image: "https://images.pexels.com/photos/380661/pexels-photo-380661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
     {
      title: "Consultation and Engineering",
      description: "Expert advice and engineering support for your tooling needs.",
      details: [
        "Process optimization consultation",
        "Material recommendations",
        "Tooling design review",
        "Troubleshooting and problem-solving",
        "Long-term tooling strategy"
      ],
      image: "https://images.pexels.com/photos/380658/pexels-photo-380658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 animate-fade-in-down">Our Services</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <Card key={index} className={`overflow-hidden shadow-lg animate-fade-in-${index % 2 === 0 ? 'left' : 'right'}`}>
            <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-16 text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-muted-foreground text-lg mb-8">
          If you have unique requirements, our team can design and manufacture custom tooling tailored to your exact specifications.
        </p>
        {/* Add a link or button to the custom request page */}
      </section>
    </div>
  );
}

export default Services;
