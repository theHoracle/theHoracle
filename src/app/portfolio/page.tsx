import { Metadata } from "next";
import Footer from "@/components/footer";
import MorphingNavbar from "@/components/nav/morphing-navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | TheHoracle",
  description: "Explore our portfolio of web design, branding, and digital projects for clients across various industries.",
};

const portfolioItems = [
  {
    title: "Eco Marketplace",
    category: "Web Design & Development",
    description: "A sustainable products marketplace with advanced filtering, user accounts, and secure checkout.",
    image: "/portfolio-placeholder.jpg",
    slug: "eco-marketplace"
  },
  {
    title: "Fitness App",
    category: "UI/UX Design",
    description: "A mobile fitness application with workout tracking, nutrition planning, and progress visualization.",
    image: "/portfolio-placeholder.jpg",
    slug: "fitness-app"
  },
  {
    title: "Artisan Coffee",
    category: "Branding",
    description: "Complete brand identity for a specialty coffee roaster, including logo, packaging, and marketing materials.",
    image: "/portfolio-placeholder.jpg",
    slug: "artisan-coffee"
  },
  {
    title: "Tech Conference",
    category: "Web Design & Development",
    description: "Event website with schedule builder, speaker profiles, and ticket purchasing functionality.",
    image: "/portfolio-placeholder.jpg",
    slug: "tech-conference"
  },
  {
    title: "Real Estate Platform",
    category: "Web Development",
    description: "Property listing platform with advanced search, virtual tours, and agent communication tools.",
    image: "/portfolio-placeholder.jpg",
    slug: "real-estate-platform"
  },
  {
    title: "Organic Food Delivery",
    category: "Branding & Web Design",
    description: "Brand identity and e-commerce website for a local organic food delivery service.",
    image: "/portfolio-placeholder.jpg",
    slug: "organic-food-delivery"
  },
  {
    title: "Financial Dashboard",
    category: "UI/UX Design",
    description: "User-friendly financial analytics dashboard with customizable widgets and data visualization.",
    image: "/portfolio-placeholder.jpg",
    slug: "financial-dashboard"
  },
  {
    title: "Travel Magazine",
    category: "Print Design",
    description: "Editorial design for a quarterly travel magazine featuring photography, articles, and city guides.",
    image: "/portfolio-placeholder.jpg",
    slug: "travel-magazine"
  },
  {
    title: "Healthcare App",
    category: "Mobile Development",
    description: "Patient-centered healthcare application for appointment scheduling, medication reminders, and telehealth.",
    image: "/portfolio-placeholder.jpg",
    slug: "healthcare-app"
  }
];

const categories = ["All", "Web Design & Development", "UI/UX Design", "Branding", "Print Design", "Mobile Development"];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <MorphingNavbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Our Portfolio
          </h1>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore our latest work across web design, branding, and digital experiences. Each project represents our commitment to quality, creativity, and results.
            </p>
          </div>
          
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Link href={`/portfolio/${item.slug}`} key={index} className="group">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
                  <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-orange-500 bg-opacity-0 group-hover:bg-opacity-90 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <span className="text-white font-bold text-lg">View Project</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-orange-500 text-sm font-medium">{item.category}</span>
                    <h2 className="text-xl font-bold mt-1 mb-3 text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-20 bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Ready to Start Your Project?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              We'd love to add your success story to our portfolio. Get in touch to discuss how we can help bring your vision to life.
            </p>
            <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 