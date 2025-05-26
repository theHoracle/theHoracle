/* eslint-disable @next/next/no-img-element */

import { Metadata } from "next";
import Footer from "@/components/footer";
import MorphingNavbar from "@/components/nav/morphing-navbar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { payload } from "@/payload";
import { ArrowLeftIcon } from "lucide-react";
import { RichText } from "@/components/RichText";
import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Project } from "@/payload-types";
import Image from "next/image";


// pre render all portfolio items
export async function generateStaticParams() {
  const { docs: portfolioItems } = await payload.find({
    collection: "projects",
    limit: 100,
    depth: 1,
    populate: {
      projects: {
        slug: true,
      }
    }
  })
  return portfolioItems.map((item) => ({
    slug: item.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  
  const { docs: [project] } = await payload.find({
    collection: "projects",
    where: {
      slug: {
        equals: slug,
      }
    }
  })

  if (!project) {
    return {
      title: "Project Not Found | TheHoracle",
      description: "The requested project could not be found.",
    };
  }
  
  return {
    title: `${project.title} | TheHoracle Portfolio`,
    // description: project.shortDescription,
  };
}

export default async function PortfolioItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const { docs: [project] } = await payload.find({
    collection: "projects",
    where: {
      slug: {
        equals: slug,
      }
    },
    depth: 2,
    populate: {
      projects: {
        category: true,
      }
    }
  })
  
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
              <ArrowLeftIcon />
              Back to Portfolio
            </Link>
            
            <span className="text-orange-500 font-medium">{project.category && typeof project.category !== "number" && project.category.name}</span>
            <h1 className="text-5xl font-bold mt-2 mb-8 text-gray-900 dark:text-white">
              {project.title}
            </h1>
          </div>
          
          {/* Hero Image */}
          <div className="w-full aspect-[16/9] relative bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden mb-16">
            {project.featuredImage && typeof project.featuredImage !== "number" && (
              <Image src={project.featuredImage.url || ""} alt={project.featuredImage.alt || ""} fill className="object-cover object-center" />
            )}
          </div>
          
          <div className="grid grid-cols-1 relative lg:grid-cols-3 gap-16 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                <RichText data={project.projectOverview} />
              </p>
            </div>

            {project.projectDetails && (
              <div className="lg:col-span-1">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 sticky top-32">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Project Details</h3>
                  <RichText data={project.projectDetails} />
                </div>
              </div>
            )}
          </div>
          
          {/* Gallery */}
          {project.gallery &&  (
            <div className="mb-20">
              <GalleryGrid images={project.gallery} />
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


type GalleryImage = Project["gallery"]

export function GalleryGrid({className, images}: {className?: string, images: GalleryImage}) {
  return (
    <section id="photos" className="my-20">
      <div className="flex flex-col items-center justify-center gap-2 mb-10 capitalize">
      <h2 className="text-4xl text-center text-stone-950 items-center dark:text-stone-50 font-serif">
        Events Gallery
      </h2>
      <p className="text-center text-stone-500">Premium DJ Services in Action - Venues, Crowds & Unforgettable Nights</p>
      </div>

      <div className={cn("columns-2 gap-4 sm:columns-3", className)}>
        {images?.map((image, idx) => { 
          return  <BlurFade key={image.id} delay={0.25 + idx * 0.05} inView>
             {typeof image.image !== "number" && <img
              className="mb-4 size-full rounded-lg object-contain"
              src={image.image.url || ""}
              alt={image.caption || "Gallery Image"}
            />}
          </BlurFade>}

        )}
      </div>
    </section>
  );
}
