import { Metadata } from "next";
import Footer from "@/components/footer";
import MorphingNavbar from "@/components/nav/morphing-navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story | TheHoracle",
  description: "Learn about the journey and history of TheHoracle web development and design company.",
};

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <MorphingNavbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <Link href="/about" className="text-orange-500 hover:text-orange-600 flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to About
            </Link>
            
            <h1 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
              Our Story
            </h1>
            
            <div className="max-w-3xl mb-16">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                From humble beginnings to becoming a leading web development and design company. This is our journey.
              </p>
            </div>
          </div>
          
          <div className="space-y-24 max-w-4xl mx-auto">
            {/* Timeline Item */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <div className="sticky top-32">
                  <span className="text-orange-500 font-medium">2015</span>
                  <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">The Beginning</h2>
                  <div className="w-16 h-1 bg-orange-500"></div>
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 mb-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    TheHoracle started as a small freelance operation run by our founder from a tiny apartment. With just a laptop and a vision, the first projects were simple websites for local businesses who needed an online presence.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Despite the modest setup, there was an unwavering commitment to quality and attention to detail that would become the hallmark of our work for years to come.
                  </p>
                </div>
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
              </div>
            </div>
            
            {/* Timeline Item */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <div className="sticky top-32">
                  <span className="text-orange-500 font-medium">2017</span>
                  <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">Growing the Team</h2>
                  <div className="w-16 h-1 bg-orange-500"></div>
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-2xl mb-8"></div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    As our client base grew, so did our team. We brought on our first full-time designer and developer, moving into a small office space that would soon become too cramped for our expanding operations.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    This period marked our transition from a freelance operation to a proper agency, with processes and workflows that allowed us to take on larger, more complex projects while maintaining our high standards.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Timeline Item */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <div className="sticky top-32">
                  <span className="text-orange-500 font-medium">2019</span>
                  <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">Expanding Services</h2>
                  <div className="w-16 h-1 bg-orange-500"></div>
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 mb-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    With a growing reputation for quality web development, we began to expand our service offerings to include branding, print design, and specialized UI/UX services. This holistic approach allowed us to serve clients from concept to completion.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our team doubled in size as we brought on specialists in each area, creating dedicated departments that could collaborate seamlessly on comprehensive projects.
                  </p>
                </div>
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
              </div>
            </div>
            
            {/* Timeline Item */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <div className="sticky top-32">
                  <span className="text-orange-500 font-medium">Today</span>
                  <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">Where We Are Now</h2>
                  <div className="w-16 h-1 bg-orange-500"></div>
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-2xl mb-8"></div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Today, TheHoracle is a full-service digital agency with a team of 20+ talented professionals working with clients across the globe. Our portfolio spans from small local businesses to international brands, all receiving the same level of care and attention.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    We've established ourselves as leaders in creating digital experiences that not only look beautiful but drive real business results. Our commitment to quality, innovation, and client satisfaction remains as strong as ever.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    As we look to the future, we're excited to continue growing, learning, and pushing the boundaries of what's possible in digital design and development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 