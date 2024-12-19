import { cn } from "@/lib/utils";

const PageWrapper = ({ children, className }) => {
  return (
    <main
      className={cn(
        "container min-h-[calc(100svh-84.5px)] mx-auto md:p-4 p-2 bg-background",
        className
      )}
    >
      {children}
    </main>
  );
};

export default PageWrapper;
