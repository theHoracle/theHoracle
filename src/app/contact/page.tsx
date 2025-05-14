import { Metadata } from "next";
import Footer from "@/components/footer";
import MorphingNavbar from "@/components/nav/morphing-navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | TheHoracle",
  description: "Get in touch with TheHoracle for your web design, development, and branding needs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <MorphingNavbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Contact Us
          </h1>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Have a project in mind or want to learn more about our services? We'd love to hear from you. Fill out the form below or use our contact information to get in touch.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="w-full bg-white dark:bg-gray-900"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="w-full bg-white dark:bg-gray-900"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      required
                      className="w-full bg-white dark:bg-gray-900"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us about your project or inquiry..."
                      required
                      className="w-full bg-white dark:bg-gray-900"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="services" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Services You're Interested In
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {["Web Design", "Web Development", "Branding", "UI/UX Design", "Print Design", "Other"].map((service) => (
                        <div key={service} className="flex items-center">
                          <input
                            id={`service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                            name="services[]"
                            value={service}
                            type="checkbox"
                            className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor={`service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                            className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                          >
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900 dark:text-white">Address</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Design Street<br />
                        Creative City, 10001<br />
                        United States
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        <a href="tel:+1234567890" className="hover:text-orange-500 transition-colors">
                          +1 (234) 567-890
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        <a href="mailto:info@thehoracle.com" className="hover:text-orange-500 transition-colors">
                          info@thehoracle.com
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900 dark:text-white">Business Hours</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Monday - Friday: 9am - 6pm<br />
                        Saturday: By appointment<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-orange-500 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Let's Start Something Great</h2>
                <p className="mb-6">
                  Whether you have a specific project in mind or just want to explore possibilities, we're here to help turn your ideas into reality.
                </p>
                <p className="font-medium">
                  We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
          
          {/* Map placeholder */}
          <div className="mt-16 w-full aspect-[21/9] bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 