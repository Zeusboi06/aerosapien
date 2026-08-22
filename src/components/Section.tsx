import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

import { forwardRef } from "react";

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, id, containerClassName, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn("w-full py-16 md:py-24 lg:py-32", className)}
        {...props}
      >
        <div className={cn("container mx-auto px-4 md:px-6", containerClassName)}>
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";
export default Section;
