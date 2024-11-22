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
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

function ContactMe() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { toast } = useToast();

  const formSchema = z.object({
    name: z
      .string()
      .min(2, { message: "Min length 2 is required for description" }),
    email: z.string().email(),
    message: z
      .string()
      .min(2, { message: "Min length 2 is required for description" }),
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
    const result = await axios.post("/api/send-mail", values);
    setIsSubmitting(false);
    form.reset();

    toast({
      title: "Message sent successfully",
      description: "Will reach out to you soon"
    })
  }

  return (
    <div className="w-full h-full flex grid-cls-2">
      <div className="flex items-center justify-center w-1/3 text-green-500 font-bold text-4xl">
        Like my work?
      </div>
      <div className="flex justify-center p-10 w-2/3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-1/2"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-xl">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
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
                      className="w-full "
                      placeholder="Your Email"
                      {...field}
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
                  <FormLabel className="font-bold text-xl">
                    Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="w-full h-48 bg-black"
                      placeholder="Your Message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!isSubmitting ? (
              <Button type="submit">Submit</Button>
            ) : (
              <Button disabled>
                <Loader2 className="animate-spin" />
                Please wait
              </Button>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}

export default ContactMe;
