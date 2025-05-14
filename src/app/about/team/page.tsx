import { Metadata } from "next";
import Footer from "@/components/footer";
import MorphingNavbar from "@/components/nav/morphing-navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team | TheHoracle",
  description: "Meet the talented team behind TheHoracle - designers, developers, and creative professionals.",
};

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & Creative Director",
    bio: "Alex founded TheHoracle with a vision to create a design agency that combines technical excellence with creative innovation. With over 15 years of experience in design and development, Alex leads our creative direction.",
    image: "/team-placeholder.jpg"
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    bio: "Sarah oversees all development projects, ensuring they're built with clean, efficient code. Her expertise in modern frameworks and performance optimization has been crucial to our technical success.",
    image: "/team-placeholder.jpg"
  },
  {
    name: "Marcus Williams",
    role: "Design Lead",
    bio: "Marcus brings over a decade of design experience to the team. His keen eye for aesthetics and user-centered approach has shaped our design philosophy and visual language.",
    image: "/team-placeholder.jpg"
  },
  {
    name: "Priya Patel",
    role: "UI/UX Specialist",
    bio: "Priya specializes in creating intuitive, accessible user experiences. She conducts user research and testing to ensure our designs not only look great but work beautifully for all users.",
    image: "/team-placeholder.jpg"
  },
  {
    name: "David Kim",
    role: "Frontend Developer",
    bio: "David transforms designs into responsive, interactive interfaces. His attention to detail ensures pixel-perfect implementation of designs across all devices and browsers.",
    image: "/team-placeholder.jpg"
  },
  {
    name: "Olivia Martinez",
    role: "Project Manager",
    bio: "Olivia ensures projects run smoothly from kickoff to delivery. Her organizational skills and client communication keep our projects on track and our clients happy.",
    image: "/team-placeholder.jpg"
  },
  {
    name: "James Wilson",
    role: "Backend Developer",
    bio: "James builds robust, scalable backend systems that power our web applications. His expertise in database design and API development is essential to our technical infrastructure.",
    image: "/team-placeholder.jpg"
  },
  {
    name: "Emma Thompson",
    role: "Content Strategist",
    bio: "Emma helps clients develop compelling content strategies. She works closely with our design team to ensure content and design work together to tell a cohesive story.",
    image: "/team-placeholder.jpg"
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <MorphingNavbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <Link href="/about" className="text-orange-500 hover:text-orange-600 flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to About
            </Link>
            
            <h1 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
              Our Team
            </h1>
            
            <div className="max-w-3xl mb-16">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Meet the talented individuals who make TheHoracle what it is today. Our diverse team brings together expertise across design, development, and strategy.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden group">
                <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700"></div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                    {member.name}
                  </h2>
                  <p className="text-orange-500 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Join Our Team</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              We're always looking for talented individuals who are passionate about design, development, and creating exceptional digital experiences. If you think you'd be a good fit for our team, we'd love to hear from you.
            </p>
            <Link href="/careers" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
              View Open Positions
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 