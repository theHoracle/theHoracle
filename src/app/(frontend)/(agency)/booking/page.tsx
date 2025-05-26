"use client"
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import MorphingNavbar from "@/components/nav/morphing-navbar";
import { useTheme } from "next-themes";

const BookingPage = () => {
    const theme = useTheme();
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
    return (
        <div>
                <MorphingNavbar />
            <div className="flex flex-col items-center justify-center py-10 md:py-14 lg:py-20">
                <h1 className="flex flex-col items-center  text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl w-full" >
                <span className="flex-row">Book a</span>
                <LineShadowText shadowColor={shadowColor} className="flex-row italic">15mins</LineShadowText>
                <span className="flex-row">call</span>
                </h1>
            </div>

        </div>
    )
}

export default BookingPage;