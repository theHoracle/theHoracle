import { Metadata } from "next";
import Footer from "@/components/footer";
import MorphingNavbar from "@/components/nav/morphing-navbar";
import Link from "next/link";
import { payload } from "@/payload";
import PortfolioPage from "@/components/pages/portfolio-page";


export const metadata: Metadata = {
  title: "Portfolio | TheHoracle",
  description: "Explore our portfolio of web design, branding, and digital projects for clients across various industries.",
};

export default async function Portfolio() {
const [categoryDocs, projectDocs] = await Promise.allSettled([
  await payload.find({
  collection: "categories",
  limit: 100,
  depth: 1,
}),
 await payload.find({
  collection: "projects",
  limit: 100,
  depth: 1,
  sort: "-createdAt",
  populate: {
    projects: {
      category: true,
      featuredImage: true,
      title: true
    },
  }
})]);

const categories = categoryDocs.status === "fulfilled" ? categoryDocs.value.docs : [];
const projects = projectDocs.status === "fulfilled" ? projectDocs.value.docs : [];
  
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <MorphingNavbar />
      
      <div className="py-10 md:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Our Portfolio
          </h1>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore our latest work across web design, branding, and digital experiences. Each project represents our commitment to quality, creativity, and results.
            </p>
          </div>

          <PortfolioPage categories={categories} projects={projects}  />
          
          
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