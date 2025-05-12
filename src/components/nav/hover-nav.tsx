import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"
import { cn } from "@/lib/utils"
import React from "react"
import { Button } from "../ui/button"

const HoverNav = () => {
    const services:{ title: string; href: string; description: string }[] = [
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
    ]


    return <div className="relative w-screen z-20 bg-slate-200 dark:bg-black backdrop-blur-xs p-2 shadow-lg md:w-[80%] mx-auto rounded-3xl h-16">
        <div className="absolute flex items-center w-full h-full px-6 inset-0">

        <div className="">{"<TheHoracle />"}</div>
            
        <div className="flex-1 flex items-center justify-center">
        <NavigationMenu className="w-full ">
                <NavigationMenuList>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-none">About</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
                                Beautifully designed branding designs built with love and
                                care.
                                </p>
                            </a>
                            </NavigationMenuLink>
                        </li>
                        <ListItem href="/docs" title="Introduction">
                            Re-usable components built using Radix UI and Tailwind CSS.
                        </ListItem>
                        <ListItem href="/docs/installation" title="Installation">
                            How to install dependencies and structure your app.
                        </ListItem>
                        <ListItem href="/docs/primitives/typography" title="Typography">
                            Styles for headings, paragraphs, lists...etc
                        </ListItem>
                        </ul>
                    </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/*  */}
                    <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
                    </NavigationMenuList>
                    </NavigationMenu>
        </div>

        {/*  */}
        <Button className="justify-end bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">           
                contact us 
        </Button>
        </div>
    </div>
}

export default HoverNav


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
