import { Metadata } from "next";
import Footer from "@/components/footer";
import MorphingNavbar from "@/components/nav/morphing-navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Process | TheHoracle",
  description: "Learn about our project workflow and how we approach design and development projects.",
};

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, and target audience. This phase includes stakeholder interviews, competitor analysis, and defining project objectives.",
    details: [
      "Stakeholder interviews",
      "User research",
      "Competitor analysis",
      "Project goals definition",
      "Technical requirements gathering"
    ]
  },
  {
    number: "02",
    title: "Strategy",
    description: "Based on our findings, we develop a comprehensive strategy that outlines the approach, timeline, and deliverables for your project.",
    details: [
      "Content strategy",
      "Technical approach",
      "Project roadmap",
      "Success metrics definition",
      "Resource planning"
    ]
  },
  {
    number: "03",
    title: "Design",
    description: "Our design team creates wireframes, mockups, and prototypes that bring your vision to life while ensuring a great user experience.",
    details: [
      "Wireframing",
      "Visual design",
      "Prototyping",
      "User testing",
      "Design system creation"
    ]
  },
  {
    number: "04",
    title: "Development",
    description: "Our developers transform the approved designs into functional, responsive, and performant code using modern technologies and best practices.",
    details: [
      "Frontend development",
      "Backend implementation",
      "CMS integration",
      "Responsive testing",
      "Performance optimization"
    ]
  },
  {
    number: "05",
    title: "Testing & Launch",
    description: "We thoroughly test all aspects of your project before launch to ensure everything works flawlessly across devices and browsers.",
    details: [
      "Quality assurance",
      "Cross-browser testing",
      "Accessibility validation",
      "Performance benchmarking",
      "Launch preparation"
    ]
  },
  {
    number: "06",
    title: "Support & Growth",
    description: "Our relationship doesn't end at launch. We provide ongoing support and help you evolve your digital presence as your business grows.",
    details: [
      "Maintenance plans",
      "Analytics monitoring",
      "Iterative improvements",
      "Performance reporting",
      "Growth strategy consulting"
    ]
  }
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <MorphingNavbar />
      
      <div className="py-10 md:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <Link href="/about" className="text-orange-500 hover:text-orange-600 flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to About
            </Link>
            
            <h1 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
              Our Process
            </h1>
            
            <div className="max-w-3xl mb-16">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                We follow a structured yet flexible approach to ensure every project is delivered on time, on budget, and exceeds expectations.
              </p>
            </div>
          </div>
          
          <div className="space-y-24 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-[39px] top-[80px] bottom-[-80px] w-1 bg-gray-200 dark:bg-gray-700"></div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
                  <div className="md:col-span-4 flex items-start">
                    <div className="w-20 h-20 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold z-10">
                      {step.number}
                    </div>
                    <div className="ml-6">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{step.title}</h2>
                    </div>
                  </div>
                  <div className="md:col-span-8 md:pl-8">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8">
                      <p className="text-gray-600 dark:text-gray-300 mb-8">
                        {step.description}
                      </p>
                      <h3 className="font-medium text-gray-900 dark:text-white mb-4">What happens in this phase:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                            <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24 bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">Ready to Start Your Project?</h2>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                We'd love to hear about your project and discuss how our process can be tailored to meet your specific needs.
              </p>
              <div className="flex justify-center">
                <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 