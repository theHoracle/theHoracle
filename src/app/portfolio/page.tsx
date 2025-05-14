"use client"
import { useState, useEffect } from "react";
import { Metadata } from "next";
import Footer from "@/components/footer";
import MorphingNavbar from "@/components/nav/morphing-navbar";
import Link from "next/link";
import { getProjectDetails } from "@/lib/utils/project-details";

const categories = ["All", "Web Design & Development", "UI/UX Design", "Branding", "Print Design", "Mobile Development"];

const hardcodedProjects = [
  {
    title: "Artisan Coffee",
    category: "Branding",
    description: "Complete brand identity for a specialty coffee roaster, including logo, packaging, and marketing materials.",
    image: "/portfolio-placeholder.jpg",
    slug: "artisan-coffee"
  },
  {
    title: "Travel Magazine",
    category: "Print Design",
    description: "Editorial design for a quarterly travel magazine featuring photography, articles, and city guides.",
    image: "/portfolio-placeholder.jpg",
    slug: "travel-magazine"
  },
  {
    title: "Organic Food Delivery",
    category: "Branding & Web Design",
    description: "Brand identity and e-commerce website for a local organic food delivery service.",
    image: "/portfolio-placeholder.jpg",
    slug: "organic-food-delivery"
  },
  // ...add other non-website projects as needed
];

// export const metadata: Metadata = {
//   title: "Portfolio | TheHoracle",
//   description: "Explore our portfolio of web design, branding, and digital projects for clients across various industries.",
// };

export default function PortfolioPage() {
  type PortfolioProject = {
    title: string;
    category: string;
    description: string;
    image: string;
    slug: string;
  };
  const [websiteProjects, setWebsiteProjects] = useState<PortfolioProject[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // Static website projects for instant display
  const staticWebsiteProjects: PortfolioProject[] = [
    {
      title: "Morgan and Sons Store",
      category: "Web Design & Development",
      description: "An E-commerce app built with Nextjs and PayloadCMS on Vercel, with instant cart updates and management with secure payments.",
      image: "/portfolio-placeholder.jpg",
      slug: "morgan-and-sons-store"
    },
    {
      title: "Donner Foundation Website",
      category: "Web Design & Development",
      description: "Charity organiation website with admin panel, to manage events, donations and blog content easily. Includes a payment provider (Paystack) to recieve donations.",
      image: "/portfolio-placeholder.jpg",
      slug: "donner-foundation-website"
    },
    {
      title: "Latunji Photography Portfolio",
      category: "Web Design & Development",
      description: "A photography portfolio site, allowing the photographer to showcase projects, manage images, and update content easily. Includes a pricing section with default rates and flexible contact options for custom quotes.",
      image: "/portfolio-placeholder.jpg",
      slug: "latunji-photography-portfolio"
    },
    {
      title: "Hope Chapel",
      category: "Web Design & Development",
      description: "Web app that enables church staff to manage content, send newsletters to subscribers, and oversee team information and media uploads. Focused on easy updates and streamlined communication for the church community.",
      image: "/portfolio-placeholder.jpg",
      slug: "hope-chapel"
    },
  ];

  // Show static website projects immediately
  const [displayedWebsiteProjects, setDisplayedWebsiteProjects] = useState(staticWebsiteProjects);

  useEffect(() => {
    getProjectDetails().then((websiteProjectsRaw) => {
      const websiteProjects = websiteProjectsRaw
        .filter((project) => project.homepage)
        .map((p) => ({
          title: p.title,
          category: "Web Design & Development",
          description: p.description,
          image: p.imageUrl || "/portfolio-placeholder.jpg",
          slug: p.title.toLowerCase().replace(/\s+/g, "-"),
        }));
      setWebsiteProjects(websiteProjects);
      setDisplayedWebsiteProjects(websiteProjects.length ? websiteProjects : staticWebsiteProjects);
      setLoading(false);
    });
  }, []);

  const allProjects = [...hardcodedProjects, ...displayedWebsiteProjects];
  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((item) => item.category === activeCategory);

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
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Responsive grid for Portfolio Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {loading ? (
              <div className="col-span-3 text-center text-gray-500 dark:text-gray-400">Loading...</div>
            ) : filteredProjects.length === 0 ? (
              <div className="col-span-3 text-center text-gray-500 dark:text-gray-400">No projects found.</div>
            ) : (
              filteredProjects.map((item, index) => (
                <Link href={`/portfolio/${item.slug}`} key={index} className="group relative rounded-2xl overflow-hidden shadow-md bg-gray-100 dark:bg-gray-800 transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-orange-500">
                  {/* Project Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  {/* Overlay with Project Name on Hover */}
                  <div className="absolute top-0 left-0 w-full px-4 py-3 bg-gradient-to-b from-black/80 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 z-10 flex items-start">
                    <h2 className="text-lg font-bold text-white drop-shadow-lg">{item.title}</h2>
                  </div>
                  {/* Optionally, show category at the bottom right */}
                  <div className="absolute bottom-3 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg opacity-90 pointer-events-none">
                    {item.category}
                  </div>
                </Link>
              ))
            )}
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