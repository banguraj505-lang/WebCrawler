import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertServiceRequestSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertServiceRequest } from "@shared/schema";

interface ServiceFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: string;
}

export default function ServiceFormModal({ isOpen, onClose, serviceType }: ServiceFormModalProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const getServiceDisplayName = (type: string) => {
    switch (type) {
      case "printing":
        return "Printing & Copying";
      case "laminating":
        return "Laminating Services";
      case "business-support":
        return "Business Support";
      default:
        return "Service Request";
    }
  };

  const form = useForm<InsertServiceRequest>({
    resolver: zodResolver(insertServiceRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: serviceType,
      details: "",
      urgency: "normal",
    },
  });

  const serviceMutation = useMutation({
    mutationFn: (data: InsertServiceRequest) =>
      apiRequest("POST", "/api/service-requests", data),
    onSuccess: () => {
      toast({
        title: "Service Request Submitted",
        description: "We've received your request and will contact you within 24 hours.",
      });
      onClose();
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/service-requests"] });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "Failed to submit service request. Please try again.",
      });
    },
  });

  const onSubmit = (data: InsertServiceRequest) => {
    serviceMutation.mutate({
      ...data,
      serviceType: serviceType,
    });
  };

  const handleClose = () => {
    onClose();
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{getServiceDisplayName(serviceType)} Request</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
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
                    <FormLabel>Phone (Optional)</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Phone number" {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="urgency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Urgency</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="low">Low - Within a week</SelectItem>
                      <SelectItem value="normal">Normal - Within 2-3 days</SelectItem>
                      <SelectItem value="high">High - Within 24 hours</SelectItem>
                      <SelectItem value="urgent">Urgent - Same day</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Details</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Please describe your requirements in detail..."
                      className="resize-none"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex space-x-4">
              <Button 
                type="button" 
                variant="outline"
                onClick={handleClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="flex-1"
                disabled={serviceMutation.isPending}
              >
                {serviceMutation.isPending ? "Submitting..." : "Submit Request"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
