import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black text-gray-900 dark:text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                    <div>
                        <h3 className="text-2xl font-bold mb-8">TheHoracle</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            We combine creativity, code, and craftsmanship to bring ideas to life across web, mobile, and print.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors duration-300">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors duration-300">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors duration-300">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-bold mb-8">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">About Us</Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Services</Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Portfolio</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-bold mb-8">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="mr-4 text-orange-500 flex-shrink-0 mt-1" size={18} />
                                <span className="text-gray-600 dark:text-gray-400">123 Design Street, Creative City, 10001</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="mr-4 text-orange-500 flex-shrink-0" size={18} />
                                <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-4 text-orange-500 flex-shrink-0" size={18} />
                                <a href="mailto:info@thehoracle.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                                    info@thehoracle.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} TheHoracle. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 