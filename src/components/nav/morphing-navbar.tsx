"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

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
    const isMobile = useIsMobile();

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
        <Sheet>
            {/* Desktop Navigation */}
            {!isScrolled && <div className="h-5" />}
            <div 
                className={cn(
                    "z-30 transition-all duration-300  ease-in-out h-16 bg-white/95 dark:bg-black backdrop-blur-sm shadow-lg  text-gray-900 dark:text-white",
                    isScrolled 
                        ? "fixed top-0 left-0 right-0 w-full py-3  dark:border-b dark:border-orange-500/20" 
                        : "relative w-[95%] md:w-[80%] mx-auto border  border-orange-500/20  backdrop-blur-xs p-2 shadow-lg rounded-3xl "
                )}
                style={{ 
                    isolation: "isolate" // Creates a new stacking context
                }}
            >
                <div className="flex items-center w-full h-full px-2 md:px-6">
                    {/* Logo */}
                    <div className="text-xl font-bold">
                        <Link
                            href="/"
                            className="hover:text-orange-500 transition-colors"
                            >
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
                                                <NavigationMenuLink href="/" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                                                        <div className="mb-2 mt-4 text-lg font-medium">
                                                            TheHoracle
                                                        </div>
                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                            Beautifully designed branding designs built with love and care.
                                                        </p>
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
                                    <Link href="/portfolio"  passHref>
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
                        <Link href="/contact" className={cn(buttonVariants(), "bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full")}>
                                Contact Us
                        </Link>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="ml-auto md:hidden">
                        <SheetTrigger asChild>
                            <Menu className="h-6 w-6" />
                        </SheetTrigger>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMobile && (
                <SheetContent side="right" className=" dark:bg-black pt-16">
                    <div className="flex flex-col p-6 space-y-6">
                        <Link 
                            href="/about" 
                            className="text-xl font-medium text-gray-900 dark:text-white hover:text-orange-500 transition-colors"

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
                                    >
                                    {service.title}
                                </Link>
                            ))}
                        </div>
                        <div className="py-2 border-b border-gray-200 dark:border-gray-800"></div>
                        
                        <Link 
                            href="/portfolio" 
                            className="text-xl font-medium text-gray-900 dark:text-white hover:text-orange-500 transition-colors"

                        >
                            Portfolio
                        </Link>
                        <div className="py-2 border-b border-gray-200 dark:border-gray-800"></div>
                        
                        <Link href="/contact" className={cn(buttonVariants({}) , "bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full w-full mt-4")}>
                                Contact Us
                        </Link>
                    </div>
                </SheetContent>
            )}
        </Sheet>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
  )
})
ListItem.displayName = "ListItem"
