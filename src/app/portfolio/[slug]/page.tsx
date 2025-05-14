import { Metadata } from "next";
import Footer from "@/components/footer";
import MorphingNavbar from "@/components/nav/morphing-navbar";
import Link from "next/link";
import { notFound } from "next/navigation";

// This would typically come from a database or CMS
const portfolioItems = [
  {
    title: "Eco Marketplace",
    category: "Web Design & Development",
    description: "A sustainable products marketplace with advanced filtering, user accounts, and secure checkout.",
    fullDescription: "We designed and developed a comprehensive e-commerce platform for a client focused on sustainable and eco-friendly products. The marketplace features advanced filtering options, user accounts with personalized recommendations, and a secure checkout process. Built with Next.js and a headless CMS, the site achieves excellent performance metrics and conversion rates.",
    client: "EcoGoods Inc.",
    date: "2023",
    services: ["Web Design", "Web Development", "UX Research", "E-commerce Strategy"],
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "Sanity CMS"],
    image: "/portfolio-placeholder.jpg",
    results: [
      "43% increase in conversion rate",
      "2.5x improvement in page load speed",
      "68% increase in average order value"
    ],
    testimonial: {
      quote: "TheHoracle transformed our online presence with a beautiful, functional marketplace that our customers love. The attention to detail and focus on user experience has directly translated to increased sales and customer satisfaction.",
      author: "Jane Smith",
      role: "CEO, EcoGoods Inc."
    },
    slug: "eco-marketplace",
    gallery: ["/portfolio-placeholder.jpg", "/portfolio-placeholder.jpg", "/portfolio-placeholder.jpg"]
  },
  {
    title: "Fitness App",
    category: "UI/UX Design",
    description: "A mobile fitness application with workout tracking, nutrition planning, and progress visualization.",
    fullDescription: "We designed a comprehensive mobile fitness application that helps users track workouts, plan nutrition, and visualize their progress over time. The app features an intuitive interface that makes it easy for users of all fitness levels to set goals, follow workout plans, and stay motivated through personalized insights and achievements.",
    client: "FitLife Technologies",
    date: "2022",
    services: ["UI Design", "UX Research", "Prototyping", "User Testing"],
    technologies: ["Figma", "Protopie", "Adobe XD"],
    image: "/portfolio-placeholder.jpg",
    results: [
      "92% user satisfaction rating",
      "4.8/5 stars on app stores",
      "35% higher retention than industry average"
    ],
    testimonial: {
      quote: "The design team at TheHoracle created an interface that perfectly balances functionality with simplicity. Our users consistently praise how intuitive and enjoyable the app is to use.",
      author: "Michael Johnson",
      role: "Product Manager, FitLife Technologies"
    },
    slug: "fitness-app",
    gallery: ["/portfolio-placeholder.jpg", "/portfolio-placeholder.jpg", "/portfolio-placeholder.jpg"]
  },
  // Additional portfolio items would be defined here
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = portfolioItems.find(async (item) => item.slug === (await params).slug);
  
  if (!project) {
    return {
      title: "Project Not Found | TheHoracle",
      description: "The requested project could not be found.",
    };
  }
  
  return {
    title: `${project.title} | TheHoracle Portfolio`,
    description: project.description,
  };
}

export default function PortfolioItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = portfolioItems.find(async (item) => item.slug === (await params).slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <MorphingNavbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Link href="/portfolio" className="text-orange-500 hover:text-orange-600 flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>
            
            <span className="text-orange-500 font-medium">{project.category}</span>
            <h1 className="text-5xl font-bold mt-2 mb-8 text-gray-900 dark:text-white">
              {project.title}
            </h1>
          </div>
          
          {/* Hero Image */}
          <div className="w-full aspect-[16/9] bg-gray-200 dark:bg-gray-700 rounded-2xl mb-16"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                {project.fullDescription}
              </p>
              
              {project.results && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Results</h3>
                  <ul className="space-y-3">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-500 font-bold mr-2 text-2xl leading-none">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.testimonial && (
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 mb-8 relative">
                  <svg className="absolute text-orange-500 h-12 w-12 top-6 left-6 opacity-20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <div className="relative z-10 pl-12">
                    <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                      "{project.testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">{project.testimonial.author}</p>
                      <p className="text-gray-500 dark:text-gray-400">{project.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 sticky top-32">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Project Details</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 mb-2">Client</h4>
                    <p className="text-gray-900 dark:text-white font-medium">{project.client}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 mb-2">Date</h4>
                    <p className="text-gray-900 dark:text-white font-medium">{project.date}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 mb-2">Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => (
                        <span key={index} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Gallery */}
          {project.gallery && (
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.gallery.map((image, index) => (
                  <div key={index} className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
                ))}
              </div>
            </div>
          )}
          
          {/* Next/Prev Projects */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-12">
            <div className="flex flex-col md:flex-row justify-between">
              <Link href="/portfolio" className="mb-8 md:mb-0">
                <div className="group">
                  <span className="text-sm text-gray-500 dark:text-gray-400 block mb-2">Previous Project</span>
                  <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                    ← View All Projects
                  </span>
                </div>
              </Link>
              
              <Link href="/contact">
                <div className="group text-right">
                  <span className="text-sm text-gray-500 dark:text-gray-400 block mb-2">Like what you see?</span>
                  <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                    Start Your Project →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 