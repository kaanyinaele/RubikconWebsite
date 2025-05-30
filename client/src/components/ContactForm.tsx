import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { ArrowRight } from "lucide-react";

export function ContactForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const submitContact = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    submitContact.mutate(data);
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
      <h3 className="text-2xl font-bold mb-6">Let's Get in Touch with You</h3>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Input
            {...form.register("name")}
            placeholder="Name"
            className="w-full bg-transparent border-0 border-b border-gray-500 rounded-none py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-0"
          />
          {form.formState.errors.name && (
            <p className="text-red-400 text-sm mt-1">{form.formState.errors.name.message}</p>
          )}
        </div>
        
        <div>
          <Input
            {...form.register("email")}
            type="email"
            placeholder="Email Address"
            className="w-full bg-transparent border-0 border-b border-gray-500 rounded-none py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-0"
          />
          {form.formState.errors.email && (
            <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>
          )}
        </div>
        
        <div>
          <Textarea
            {...form.register("message")}
            placeholder="Message (Optional)"
            rows={4}
            className="w-full bg-transparent border-0 border-b border-gray-500 rounded-none py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-0 resize-none"
          />
          {form.formState.errors.message && (
            <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>
          )}
        </div>
        
        <Button
          type="submit"
          disabled={submitContact.isPending}
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold btn-hover-scale btn-gradient-hover btn-glow-hover flex items-center space-x-2"
        >
          <span>{submitContact.isPending ? "Sending..." : "Send"}</span>
          <ArrowRight size={16} />
        </Button>
      </form>
    </div>
  );
}
