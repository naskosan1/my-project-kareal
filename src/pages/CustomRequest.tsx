import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

// Define the schema for the form using Zod
const requestFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  company: z.string().optional(),
  specifications: z.string().min(10, {
    message: "Please provide detailed specifications for your request.",
  }),
  // In a real app, you'd handle file uploads properly
  // file: z.any().optional(), // Placeholder for file input
});

type RequestFormValues = z.infer<typeof requestFormSchema>;

function CustomRequest() {
  const form = useForm<RequestFormValues>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      specifications: "",
      // file: undefined,
    },
  });

  function onSubmit(values: RequestFormValues) {
    console.log("Custom Request Submitted:", values);
    // In a real application, you would send this data to a backend API.
    // For this example, we'll just show a success toast.
    toast("Request Submitted", {
      description: "Thank you for your custom request. We will contact you shortly.",
    });
    form.reset(); // Reset the form after submission
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <Card className="animate-fade-in-up">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Request a Custom Machine Die</CardTitle>
          <CardDescription>
            Please fill out the form below with details about your required machine die.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number (Optional)</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="(123) 456-7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Company Inc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="specifications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specifications</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe your requirements, dimensions, material, quantity, etc." rows={6} {...field} />
                    </FormControl>
                    <FormDescription>
                      Please provide as much detail as possible.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* File Upload Field (Placeholder) */}
              {/*
              <FormField
                control={form.control}
                name="file"
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel>Upload Drawings/Files (Optional)</FormLabel>
                    <FormControl>
                       <Input
                        {...fieldProps}
                        type="file"
                        onChange={(event) => onChange(event.target.files?.[0])}
                      />
                    </FormControl>
                    <FormDescription>
                      Accepted formats: PDF, DWG, DXF, STEP, etc.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              */}

              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CustomRequest;
