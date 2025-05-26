import { Metadata } from "next";
import Footer from "@/components/footer";
import MorphingNavbar from "@/components/nav/morphing-navbar";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | TheHoracle",
  description: "Explore our comprehensive range of web design, development, and branding services.",
};

const services = [
  {
    title: "Web Design",
    description: "Beautiful, responsive websites that engage visitors and drive conversions.",
    features: [
      "Custom design tailored to your brand",
      "Responsive layouts for all devices",
      "User experience optimization",
      "Interactive elements and animations",
      "Accessibility compliance"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    slug: "web-design"
  },
  {
    title: "Branding",
    description: "Strategic brand identity design that helps you stand out in your market.",
    features: [
      "Logo design and brand marks",
      "Color palette and typography",
      "Brand guidelines",
      "Marketing collateral",
      "Brand messaging and voice"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    slug: "branding"
  },
  {
    title: "Printing",
    description: "High-quality print materials that make a lasting impression.",
    features: [
      "Business cards and stationery",
      "Brochures and catalogs",
      "Packaging design",
      "Signage and banners",
      "Marketing materials"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    slug: "printing"
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that enhances engagement and satisfaction.",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Usability testing",
      "Information architecture",
      "Interface design systems"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    slug: "ui-ux-design"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <MorphingNavbar />
      <div className="py-10 md:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Our Services
          </h1>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We offer a comprehensive range of design and development services to help businesses establish a strong online presence and create memorable brand experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl group">
                <div className="text-orange-500 mb-6">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-orange-500 font-bold mr-2 text-lg leading-none">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-orange-500 font-medium group-hover:text-orange-600"
                  >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-lg mb-8">
                We believe in a collaborative approach to every project. Our process begins with understanding your business goals and target audience, followed by strategic planning, creative design, and meticulous implementation. Throughout the project, we maintain open communication and provide regular updates to ensure your vision is brought to life exactly as you imagined.
              </p>
              <Link 
                href="/about/process"
                className="inline-block bg-white text-orange-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors"
              >
                Learn About Our Process
              </Link>
            </div>
          </div>
          
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Ready to Start Your Project?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Contact us today to discuss how our services can help your business grow and succeed in the digital landscape.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 