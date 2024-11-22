"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { Loader2, Mails, Phone, PhoneOutgoing } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

function ContactMe() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, { message: "Min length 2 is required for name" }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(2, { message: "Min length 2 is required for message" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      await axios.post("/api/send-mail", values);
      toast({
        title: "Message sent successfully",
        description: "Will reach out to you soon",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <div className="flex flex-col items-center gap-y-4 justify-center w-full md:w-1/3 text-white-500 font-bold">
        <div className="text-4xl text-green-700">Like my work?</div>
        <div className="text-2xl flex" aria-label="Phone number">
          <PhoneOutgoing className="mr-2 mt-1" />: +919262348758
        </div>
        <div className="flex text-2xl ml-6" aria-label="Email address">
          <Mails className="mr-2 mt-1" />: rajtilakpandey01@gmail.com
        </div>
      </div>
      <div className="flex justify-center p-10 w-full md:w-2/3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full max-w-md"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-xl">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} aria-label="Name" />
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
                  <FormLabel className="font-bold text-xl">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder="Your Email"
                      {...field}
                      aria-label="Email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-xl">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="w-full h-48 bg-black"
                      placeholder="Your Message"
                      {...field}
                      aria-label="Message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting} className="transition duration-200 ease-in-out hover:bg-green-600">
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin mr-2" />
                  Please wait
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default ContactMe;
