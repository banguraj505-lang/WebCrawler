import { useState } from "react";
import { GraduationCap, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertRegistrationAssistanceSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertRegistrationAssistance } from "@shared/schema";

export default function EducationServices() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isScratchCardModalOpen, setIsScratchCardModalOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertRegistrationAssistance>({
    resolver: zodResolver(insertRegistrationAssistanceSchema),
    defaultValues: {
      studentName: "",
      email: "",
      phone: "",
      university: "",
      program: "",
      assistanceType: "",
      documents: "",
    },
  });

  const registrationMutation = useMutation({
    mutationFn: (data: InsertRegistrationAssistance) =>
      apiRequest("POST", "/api/registration-assistance", data),
    onSuccess: () => {
      toast({
        title: "Registration Assistance Request Submitted",
        description: "We'll contact you within 24 hours to discuss your university registration needs.",
      });
      setIsRegistrationModalOpen(false);
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/registration-assistance"] });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "Failed to submit registration assistance request. Please try again.",
      });
    },
  });

  const onSubmit = (data: InsertRegistrationAssistance) => {
    registrationMutation.mutate(data);
  };

  return (
    <>
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">Education & Digital Services</h2>
              <p className="text-xl text-gray-600 mb-8">
                Supporting your educational journey and digital needs with comprehensive assistance and online services.
              </p>

              {/* University Registration */}
              <div className="bg-neutral-light rounded-xl p-6 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-dark mb-2">University Registration Assistance</h3>
                    <p className="text-gray-600 mb-4">Complete support for university applications, document preparation, and registration processes.</p>
                    <ul className="space-y-1 text-sm text-gray-600 mb-4">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                        Application Form Completion
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                        Document Verification
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                        Submission Assistance
                      </li>
                    </ul>
                    <Button 
                      onClick={() => setIsRegistrationModalOpen(true)}
                      className="bg-primary text-white hover:bg-blue-700"
                    >
                      Get Assistance
                    </Button>
                  </div>
                </div>
              </div>

              {/* Scratch Card System */}
              <div className="bg-neutral-light rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Ticket className="text-secondary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-dark mb-2">Online Scratch Card Purchase</h3>
                    <p className="text-gray-600 mb-4">Convenient online scratch card purchasing system for various services and utilities.</p>
                    <ul className="space-y-1 text-sm text-gray-600 mb-4">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                        Instant Digital Delivery
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                        Multiple Denominations
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                        Secure Payment Processing
                      </li>
                    </ul>
                    <Button 
                      onClick={() => setIsScratchCardModalOpen(true)}
                      className="bg-secondary text-white hover:bg-green-700"
                    >
                      Purchase Cards
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Students working together on educational projects" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registration Assistance Modal */}
      <Dialog open={isRegistrationModalOpen} onOpenChange={setIsRegistrationModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>University Registration Assistance</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="studentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Student Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Email address" {...field} />
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
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="university"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>University</FormLabel>
                      <FormControl>
                        <Input placeholder="University name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="program"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Program</FormLabel>
                      <FormControl>
                        <Input placeholder="Degree program" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="assistanceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assistance Needed</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select assistance type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="application-form">Application Form Completion</SelectItem>
                        <SelectItem value="document-verification">Document Verification</SelectItem>
                        <SelectItem value="submission-assistance">Submission Assistance</SelectItem>
                        <SelectItem value="full-support">Complete Registration Support</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="documents"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Documents Available (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="List any documents you already have..."
                        className="resize-none"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full"
                disabled={registrationMutation.isPending}
              >
                {registrationMutation.isPending ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Scratch Card Portal Modal */}
      <Dialog open={isScratchCardModalOpen} onOpenChange={setIsScratchCardModalOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Scratch Card Purchase</DialogTitle>
          </DialogHeader>
          <div className="text-center py-8">
            <Ticket className="mx-auto mb-4 text-secondary" size={64} />
            <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
            <p className="text-gray-600 mb-4">
              Our online scratch card purchase system is currently under development. 
              Please visit our office or call us for immediate assistance.
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <p>📍 Downtown Business District</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>🕒 Mon-Fri: 8AM-6PM</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
