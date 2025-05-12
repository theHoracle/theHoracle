import { cn } from "@/lib/utils"

const MaxWidthWrapper = ({ children, className }: { children: React.ReactNode, className?: string }  ) => {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
export default MaxWidthWrapper;