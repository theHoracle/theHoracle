import { Metadata } from "next";
import Footer from "@/components/footer";
import MorphingNavbar from "@/components/nav/morphing-navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | TheHoracle",
  description: "Our terms of service outline the rules and guidelines for using our website and services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <MorphingNavbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>Last updated: June 1, 2023</p>
            
            <h2>Introduction</h2>
            <p>
              Welcome to TheHoracle. These terms of service ("Terms") govern your use of our website and the services we provide. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access our website or use our services.
            </p>
            
            <h2>Use of Our Services</h2>
            <p>
              Our website and its content are intended for your general information and use. It is subject to change without notice. We reserve the right to modify or discontinue, temporarily or permanently, the website or any features or portions thereof without prior notice.
            </p>
            
            <h2>Intellectual Property Rights</h2>
            <p>
              Unless otherwise stated, we own the intellectual property rights for all material on our website. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these Terms.
            </p>
            <p>You must not:</p>
            <ul>
              <li>Republish material from this website</li>
              <li>Sell, rent, or sub-license material from the website</li>
              <li>Reproduce, duplicate, or copy material from the website</li>
              <li>Redistribute content from this website (unless content is specifically made for redistribution)</li>
            </ul>
            
            <h2>User Content</h2>
            <p>
              In these Terms, "User Content" means material (including without limitation text, images, audio material, video material, and audio-visual material) that you submit to our website, for whatever purpose.
            </p>
            <p>
              You grant to us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your User Content in any existing or future media. You also grant to us the right to sub-license these rights, and the right to bring an action for infringement of these rights.
            </p>
            <p>
              Your User Content must not be illegal or unlawful, must not infringe any third party's legal rights, and must not be capable of giving rise to legal action whether against you or us or a third party.
            </p>
            
            <h2>Limitation of Liability</h2>
            <p>
              In no event shall TheHoracle, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort, or otherwise, and TheHoracle shall not be liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
            </p>
            
            <h2>Indemnification</h2>
            <p>
              You hereby indemnify to the fullest extent TheHoracle from and against any and all liabilities, costs, demands, causes of action, damages, and expenses (including reasonable attorney's fees) arising out of or in any way related to your breach of any of the provisions of these Terms.
            </p>
            
            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such provisions shall be deleted without affecting the remaining provisions herein.
            </p>
            
            <h2>Variation of Terms</h2>
            <p>
              TheHoracle is permitted to revise these Terms at any time as it sees fit, and by using this website you are expected to review such Terms on a regular basis to ensure you understand all terms and conditions governing use of this website.
            </p>
            
            <h2>Assignment</h2>
            <p>
              TheHoracle shall be permitted to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification or consent required. However, you shall not be permitted to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
            </p>
            
            <h2>Entire Agreement</h2>
            <p>
              These Terms, including any legal notices and disclaimers contained on this website, constitute the entire agreement between TheHoracle and you in relation to your use of this website, and supersede all prior agreements and understandings with respect to the same.
            </p>
            
            <h2>Governing Law & Jurisdiction</h2>
            <p>
              These Terms will be governed by and construed in accordance with the laws of the United States, and you submit to the non-exclusive jurisdiction of the state and federal courts located in the United States for the resolution of any disputes.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:legal@thehoracle.com" className="text-orange-500 hover:text-orange-600">legal@thehoracle.com</a><br />
              Phone: +1 (234) 567-890<br />
              Address: 123 Design Street, Creative City, 10001
            </p>
          </div>
          
          <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
            <Link href="/privacy-policy" className="text-orange-500 hover:text-orange-600">
              View our Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 