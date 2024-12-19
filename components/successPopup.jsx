import { Check, Home } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Animation from "./animation";

const SuccessPopup = ({ title, description, className, isHome = true }) => {
  return (
    <Card className={cn("flex flex-col items-center", className)}>
      <CardContent className="p-6">
        <Animation variant="pop" duration={0.7}>
          <div className="p-6 rounded-full bg-secondary flex items-center justify-center w-min">
            <Check className="w-16 h-16 text-green-400" />
          </div>
        </Animation>
      </CardContent>
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        {isHome ? (
          <Link href={"/"}>
            <Button variant="outline" className="hover:text-black">
              <Home className="w-4 h-4" />
              <span>Go Home</span>
            </Button>
          </Link>
        ) : null}
      </CardFooter>
    </Card>
  );
};

export default SuccessPopup;
