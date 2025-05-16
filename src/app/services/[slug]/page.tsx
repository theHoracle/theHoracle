import { Metadata } from "next";
import Footer from "@/components/footer";
import MorphingNavbar from "@/components/nav/morphing-navbar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";

// This would typically come from a database or CMS
const servicesData = {
  "web-design": {
    title: "Web Design",
    description: "Beautiful, responsive websites that engage visitors and drive conversions.",
    longDescription: "Our web design services focus on creating visually stunning, user-friendly websites that not only look great but also perform exceptionally well. We combine aesthetic appeal with functional design to create websites that engage visitors and drive conversions. Each design is custom-tailored to reflect your brand identity and meet your specific business goals.",
    process: [
      {
        title: "Discovery",
        description: "We begin by understanding your business, target audience, and goals to inform our design approach."
      },
      {
        title: "Wireframing",
        description: "We create structural layouts that establish the information hierarchy and basic functionality."
      },
      {
        title: "Visual Design",
        description: "Our designers develop the visual elements, including color schemes, typography, and imagery."
      },
      {
        title: "Prototyping",
        description: "Interactive prototypes allow you to experience the website before development begins."
      },
      {
        title: "Development",
        description: "Our developers bring the designs to life with clean, efficient code."
      },
      {
        title: "Testing & Launch",
        description: "Rigorous testing ensures your website works flawlessly across all devices and browsers."
      }
    ],
    features: [
      "Custom design tailored to your brand",
      "Responsive layouts for all devices",
      "User experience optimization",
      "Interactive elements and animations",
      "Accessibility compliance",
      "SEO-friendly structure",
      "Fast loading speeds",
      "Cross-browser compatibility",
      "Content management system integration"
    ],
    faq: [
      {
        question: "How long does it take to design a website?",
        answer: "The timeline varies depending on the complexity of the project. A simple website typically takes 4-6 weeks, while more complex sites can take 8-12 weeks or more."
      },
      {
        question: "Do you provide website maintenance after launch?",
        answer: "Yes, we offer various maintenance packages to keep your website secure, updated, and performing optimally after launch."
      },
      {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely. All our websites are built with a responsive design approach, ensuring they look and function perfectly on all devices, from desktops to smartphones."
      },
      {
        question: "Can I update the website myself after it's built?",
        answer: "Yes, we typically build websites on user-friendly content management systems (CMS) that allow you to easily update content without technical knowledge."
      }
    ],
    relatedServices: ["ui-ux-design", "branding"],
    caseStudies: [
      {
        title: "Eco Marketplace Redesign",
        description: "Increased conversion rates by 43% through improved user experience and responsive design.",
        slug: "eco-marketplace"
      },
      {
        title: "Tech Conference Website",
        description: "Created an engaging event website that increased registrations by 35% compared to previous years.",
        slug: "tech-conference"
      }
    ]
  },
  "branding": {
    title: "Branding",
    description: "Strategic brand identity design that helps you stand out in your market.",
    longDescription: "Our branding services help businesses establish a strong, cohesive identity that resonates with their target audience. We develop comprehensive brand strategies and visual identities that differentiate your business in the marketplace and build lasting connections with customers. From logo design to brand guidelines, we create all the elements needed for a consistent brand presence.",
    process: [
      {
        title: "Brand Discovery",
        description: "We explore your business values, target audience, and market positioning."
      },
      {
        title: "Strategy Development",
        description: "We create a strategic framework that guides all brand decisions and communications."
      },
      {
        title: "Visual Identity",
        description: "Our designers develop logo concepts and visual elements that represent your brand."
      },
      {
        title: "Refinement",
        description: "We refine the selected concepts based on your feedback and strategic goals."
      },
      {
        title: "Brand Guidelines",
        description: "We create comprehensive guidelines for consistent brand application."
      },
      {
        title: "Implementation",
        description: "We apply the brand across various touchpoints and provide support for rollout."
      }
    ],
    features: [
      "Logo design and brand marks",
      "Color palette and typography",
      "Brand guidelines",
      "Marketing collateral",
      "Brand messaging and voice",
      "Brand strategy",
      "Competitive analysis",
      "Brand positioning",
      "Visual identity system"
    ],
    faq: [
      {
        question: "How long does the branding process take?",
        answer: "A comprehensive branding project typically takes 6-8 weeks, depending on the scope and complexity of the project."
      },
      {
        question: "Do I own the rights to my logo and brand assets?",
        answer: "Yes, once the project is complete and paid for, you own all rights to the brand assets we create for you."
      },
      {
        question: "How many logo concepts will I receive?",
        answer: "Our standard branding package includes 3-5 initial logo concepts, which we then refine based on your feedback."
      },
      {
        question: "Can you refresh my existing brand instead of creating a new one?",
        answer: "Absolutely. We offer brand refresh services that update your existing identity while maintaining brand recognition."
      }
    ],
    relatedServices: ["web-design", "printing"],
    caseStudies: [
      {
        title: "Artisan Coffee Branding",
        description: "Developed a distinctive brand identity that helped establish market presence and premium positioning.",
        slug: "artisan-coffee"
      },
      {
        title: "Organic Food Delivery",
        description: "Created a fresh, approachable brand that resonated with health-conscious consumers.",
        slug: "organic-food-delivery"
      }
    ]
  },
  "printing": {
    title: "Printing",
    description: "High-quality print materials that make a lasting impression.",
    longDescription: "Our printing services deliver high-quality physical materials that bring your brand to life in the tangible world. From business cards and brochures to packaging and signage, we ensure consistent quality and attention to detail across all printed materials. We work with premium printing partners to provide exceptional results that make a lasting impression.",
    process: [
      {
        title: "Requirements Gathering",
        description: "We discuss your printing needs, quantities, and specifications."
      },
      {
        title: "Design",
        description: "Our designers create print-ready designs that align with your brand."
      },
      {
        title: "Material Selection",
        description: "We help you select the right papers, finishes, and special treatments."
      },
      {
        title: "Proofing",
        description: "We provide digital and/or physical proofs for your approval."
      },
      {
        title: "Production",
        description: "Your materials are printed using high-quality processes and equipment."
      },
      {
        title: "Quality Control & Delivery",
        description: "We inspect the finished products and arrange delivery to your location."
      }
    ],
    features: [
      "Business cards and stationery",
      "Brochures and catalogs",
      "Packaging design",
      "Signage and banners",
      "Marketing materials",
      "Premium paper stocks",
      "Special finishes and treatments",
      "Sustainable printing options",
      "Print management services"
    ],
    faq: [
      {
        question: "What types of printing do you offer?",
        answer: "We offer digital printing for smaller quantities and offset printing for larger runs, as well as specialty printing like letterpress, foil stamping, and embossing."
      },
      {
        question: "How quickly can you deliver printed materials?",
        answer: "Standard turnaround times range from 5-10 business days, depending on the complexity and quantity. Rush services are available for an additional fee."
      },
      {
        question: "Do you offer eco-friendly printing options?",
        answer: "Yes, we offer a range of sustainable printing options, including recycled papers, vegetable-based inks, and energy-efficient production methods."
      },
      {
        question: "Can you help with distribution of printed materials?",
        answer: "Yes, we can arrange for direct mailing services or distribution to multiple locations as needed."
      }
    ],
    relatedServices: ["branding", "web-design"],
    caseStudies: [
      {
        title: "Artisan Coffee Packaging",
        description: "Created distinctive packaging that increased shelf presence and reinforced brand premium positioning.",
        slug: "artisan-coffee"
      },
      {
        title: "Travel Magazine",
        description: "Designed and produced a quarterly print magazine featuring high-quality photography and editorial design.",
        slug: "travel-magazine"
      }
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "User-centered design that enhances engagement and satisfaction.",
    longDescription: "Our UI/UX design services focus on creating intuitive, enjoyable digital experiences that meet user needs while achieving business objectives. We combine research, strategy, and creative design to develop interfaces that are not only visually appealing but also highly functional and user-friendly. Our approach ensures that every interaction with your digital product is seamless and satisfying.",
    process: [
      {
        title: "User Research",
        description: "We gather insights about your users' needs, behaviors, and pain points."
      },
      {
        title: "Information Architecture",
        description: "We organize content and functionality in a logical, intuitive structure."
      },
      {
        title: "Wireframing",
        description: "We create low-fidelity representations of interfaces to establish layout and functionality."
      },
      {
        title: "Prototyping",
        description: "We build interactive prototypes to test and refine the user experience."
      },
      {
        title: "Visual Design",
        description: "We develop the visual language and apply it to create polished interfaces."
      },
      {
        title: "Testing & Iteration",
        description: "We validate designs with users and refine based on feedback."
      }
    ],
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Usability testing",
      "Information architecture",
      "Interface design systems",
      "Interaction design",
      "Accessibility implementation",
      "Mobile and responsive design",
      "Design system creation"
    ],
    faq: [
      {
        question: "What's the difference between UI and UX design?",
        answer: "UX (User Experience) design focuses on the overall feel and usability of a product, while UI (User Interface) design focuses on the visual elements and interactions. We approach both holistically to create cohesive digital experiences."
      },
      {
        question: "Do you conduct user testing?",
        answer: "Yes, we incorporate user testing at various stages of the design process to validate assumptions and refine the experience based on real user feedback."
      },
      {
        question: "Can you work with our development team?",
        answer: "Absolutely. We collaborate closely with development teams to ensure designs are implemented accurately and efficiently."
      },
      {
        question: "Do you create design systems?",
        answer: "Yes, we create comprehensive design systems that document UI components, patterns, and guidelines to ensure consistency across your digital products."
      }
    ],
    relatedServices: ["web-design", "branding"],
    caseStudies: [
      {
        title: "Fitness App",
        description: "Designed an intuitive fitness application that achieved a 92% user satisfaction rating.",
        slug: "fitness-app"
      },
      {
        title: "Financial Dashboard",
        description: "Created a user-friendly financial analytics dashboard that increased user engagement by 45%.",
        slug: "financial-dashboard"
      }
    ]
  }
};


// pre render all services
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const service = servicesData[slug as keyof typeof servicesData];
  
  if (!service) {
    return {
      title: "Service Not Found | TheHoracle",
      description: "The requested service could not be found.",
    };
  }
  
  return {
    title: `${service.title} | TheHoracle Services`,
    description: service.description,
  };
}



export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const service = servicesData[slug as keyof typeof servicesData];
  
  if (!service) {
    notFound();
  }
  
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <MorphingNavbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <Link href="/services" className="text-orange-500 hover:text-orange-600 flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
            
            <h1 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
              {service.title}
            </h1>
            
            <div className="max-w-3xl mb-12">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {service.longDescription}
              </p>
            </div>
          </div>
          
          {/* Service Features */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-gray-600 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Service Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Our Process</h2>
            <div className="relative">
              {/* Connector line */}
              <div className="absolute left-[39px] top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700"></div>
              
              <div className="space-y-16">
                {service.process.map((step, index) => (
                  <div key={index} className="relative flex">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold z-10 relative">
                        {index + 1}
                      </div>
                    </div>
                    <div className="ml-8 pt-4">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* FAQ */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {service.faq.map((item, index) => (
                <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.question}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Case Studies */}
          {service.caseStudies && service.caseStudies.length > 0 && (
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.caseStudies.map((caseStudy, index) => (
                  <Link href={`/portfolio/${caseStudy.slug}`} key={index} className="group">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
                      <div className="aspect-[16/9] bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                        <div className="absolute inset-0 bg-orange-500 bg-opacity-0 group-hover:bg-opacity-90 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                          <span className="text-white font-bold text-lg">View Case Study</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                          {caseStudy.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {caseStudy.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Related Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.relatedServices.map((slug, index) => {
                const relatedService = servicesData[slug as keyof typeof servicesData];
                return (
                  <Link href={`/services/${slug}`} key={index} className="group">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                        {relatedService.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {relatedService.description}
                      </p>
                      <span className="text-orange-500 font-medium">Learn more →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          
          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your {service.title.toLowerCase()} project and how we can help bring your vision to life.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-orange-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors"
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