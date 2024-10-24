"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

function Contact() {
  return <section id="contact">
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-stone-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Make Inquiry
        </h2>
      </div>
      <div className="relative group mb-5">
      <div className="absolute -inset-x-4 border  -inset-y-4 -z-10 hidden rounded-md transition motion-reduce:transition-none lg:-inset-6 lg:block lg:group-hover:bg-stone-800/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
    <InquiryForm />
      </div>
  </section>;
}

export default Contact;

const formSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10).max(500),
})

function InquiryForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    
    console.log(values)
  }

  return  <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="horacle@mail.com" type="text" {...field} />
          </FormControl>
          <FormDescription>
            Email is required for us to get back to you.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Message</FormLabel>
          <FormControl>
            <Textarea placeholder="Hi, how are you doing today?" {...field} />
          </FormControl>
          <FormDescription>
            Send a message, we will be sure to get back to you.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    <button type="submit"
    className="button-gradient w-24"
    
    >
      <div className="fancy-button flex items-center justify-center">
        <span className="relative z-10">
          Submit
        </span>
      </div>
      </button>
  </form>
</Form>

}
