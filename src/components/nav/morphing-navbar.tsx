"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

const services: { title: string; href: string; description: string }[] = [
    {
        title: "Web Design",
        href: "/services/web-design",
        description: "Beautifully designed websites that are easy to use and navigate.",
    },
    {
        title: "Branding",
        href: "/services/branding",
        description: "Unique branding designs that stand out from the crowd.",
    },
    {
        title: "Printing",
        href: "/services/printing",
        description: "High-quality printing for all your marketing needs.",
    },
    {
        title: "UI/UX Design",
        href: "/services/ui-ux-design",
        description: "User-friendly designs that enhance the user experience.",
    }
];

const MorphingNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navigation */}
            <div 
                className={cn(
                    "z-[9999] transition-all duration-300 ease-in-out",
                    isScrolled 
                        ? "fixed top-0 left-0 right-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-lg py-3 text-gray-900 dark:text-white dark:border-b dark:border-orange-500/20" 
                        : "relative w-full md:w-[80%] mx-auto bg-slate-200 dark:bg-black backdrop-blur-xs p-2 shadow-lg rounded-3xl h-16"
                )}
                style={{ 
                    isolation: "isolate" // Creates a new stacking context
                }}
            >
                <div className="flex items-center w-full h-full px-2 md:px-6">
                    {/* Logo */}
                    <div className="text-xl font-bold">
                        <Link href="/" className="hover:text-orange-500 transition-colors">
                            {"<TheHoracle />"}
                        </Link>
                    </div>
                    
                    {/* Desktop Menu - Hidden on mobile */}
                    <div className="flex-1 hidden md:flex items-center justify-center">
                        <NavigationMenu className="w-full">
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-none dark:hover:bg-gray-800 dark:data-[state=open]:bg-gray-800">About</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] dark:bg-black">
                                            <li className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                        href="/"
                                                    >
                                                        <div className="mb-2 mt-4 text-lg font-medium">
                                                            TheHoracle
                                                        </div>
                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                            Beautifully designed branding designs built with love and care.
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <ListItem href="/about" title="Our Story">
                                                Learn about our journey and mission.
                                            </ListItem>
                                            <ListItem href="/about/team" title="Our Team">
                                                Meet the talented people behind our work.
                                            </ListItem>
                                            <ListItem href="/about/process" title="Our Process">
                                                How we approach projects and deliver results.
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="dark:hover:bg-gray-800 dark:data-[state=open]:bg-gray-800">Services</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] dark:bg-black">
                                            {services.map((service) => (
                                                <ListItem
                                                    key={service.title}
                                                    title={service.title}
                                                    href={service.href}
                                                >
                                                    {service.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                
                                <NavigationMenuItem>
                                    <Link href="/portfolio" legacyBehavior passHref>
                                        <NavigationMenuLink className="font-medium dark:hover:bg-gray-800 dark:hover:text-white">
                                            Portfolio
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Contact Button - Hidden on mobile */}
                    <div className="hidden md:block">
                        <Link href="/contact">
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="ml-auto md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-gray-900 dark:text-white focus:outline-none"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[9998] bg-white dark:bg-black pt-16">
                    <div className="flex flex-col p-6 space-y-6">
                        <Link 
                            href="/about" 
                            className="text-xl font-medium text-gray-900 dark:text-white hover:text-orange-500 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <div className="py-2 border-b border-gray-200 dark:border-gray-800"></div>
                        
                        <div className="space-y-3">
                            <h3 className="text-lg font-medium text-orange-500">Services</h3>
                            {services.map((service) => (
                                <Link
                                    key={service.title}
                                    href={service.href}
                                    className="block py-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {service.title}
                                </Link>
                            ))}
                        </div>
                        <div className="py-2 border-b border-gray-200 dark:border-gray-800"></div>
                        
                        <Link 
                            href="/portfolio" 
                            className="text-xl font-medium text-gray-900 dark:text-white hover:text-orange-500 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Portfolio
                        </Link>
                        <div className="py-2 border-b border-gray-200 dark:border-gray-800"></div>
                        
                        <Link 
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Button 
                                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full w-full mt-4"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default MorphingNavbar;

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:hover:bg-gray-800 dark:hover:text-white",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem"; 