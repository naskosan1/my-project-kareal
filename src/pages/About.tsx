import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 animate-fade-in-down">About K.A. Technology</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="rounded-lg overflow-hidden shadow-lg animate-fade-in-left">
          <img src="https://images.pexels.com/photos/380661/pexels-photo-380661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Workshop" className="w-full h-auto object-cover" />
        </div>
        <div className="animate-fade-in-right">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded with a passion for precision engineering, K.A. Technology has grown to become a trusted leader in the machine die and tooling industry. Our journey began with a commitment to quality and a deep understanding of the intricate needs of manufacturing processes. Over the years, we have built a reputation for excellence, innovation, and unwavering dedication to our clients.
          </p>
          <p className="text-muted-foreground">
            We combine traditional craftsmanship with modern technology to produce tooling that stands the test of time and delivers consistent, high-quality results. Our experienced team is the backbone of our success, bringing expertise and meticulous attention to detail to every project.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in-up">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="animate-fade-in-up animate-delay-200">
            <CardHeader>
              <CardTitle>Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We are committed to the highest standards of quality in every die and tool we produce. Precision and durability are paramount.
              </p>
            </CardContent>
          </Card>
          <Card className="animate-fade-in-up animate-delay-400">
            <CardHeader>
              <CardTitle>Reliability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our clients trust us for reliable tooling that performs consistently, reducing downtime and increasing productivity.
              </p>
            </CardContent>
          </Card>
          <Card className="animate-fade-in-up animate-delay-600">
            <CardHeader>
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We continuously explore new techniques and technologies to improve our processes and offer cutting-edge solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Our dedicated team of engineers and craftsmen are ready to assist you.
        </p>
        {/* Placeholder for team section - could add team photos/bios here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Team Member Card */}
            <Card>
                <CardContent className="flex flex-col items-center p-6">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team Member" className="w-24 h-24 rounded-full object-cover mb-4" />
                    <h3 className="text-lg font-semibold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">Lead Engineer</p>
                </CardContent>
            </Card>
             <Card>
                <CardContent className="flex flex-col items-center p-6">
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team Member" className="w-24 h-24 rounded-full object-cover mb-4" />
                    <h3 className="text-lg font-semibold">Jane Smith</h3>
                    <p className="text-sm text-muted-foreground">Master Craftsman</p>
                </CardContent>
            </Card>
             <Card>
                <CardContent className="flex flex-col items-center p-6">
                    <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team Member" className="w-24 h-24 rounded-full object-cover mb-4" />
                    <h3 className="text-lg font-semibold">Peter Jones</h3>
                    <p className="text-sm text-muted-foreground">Production Manager</p>
                </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}

export default About;
