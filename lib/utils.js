import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { BrickWall, Brush, Cpu, Home, Layers, RefreshCcw } from "lucide-react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const services = [
  {
    title: "Architecture Design",
    description:
      "We provide expert architecture design services for your home, office, or commercial space. Our team of architects will work with you to create a design that meets your needs and budget.",
    icon: Home,
  },
  {
    title: "Interior Work",
    description:
      "Our interior work services include everything from painting and flooring to lighting and furniture. We will help you create a beautiful and functional space that reflects your personal style.",
    icon: Layers,
  },
  {
    title: "Building Construction",
    description:
      "We specialize in building construction services for residential and commercial properties. Our team of experienced builders will work with you to create a custom design that meets your needs and budget.",
    icon: BrickWall,
  },
  {
    title: "Renovation",
    description:
      "Whether you are looking to renovate your kitchen, bathroom, or entire home, we can help. Our renovation services will help you create a space that is modern, functional, and beautiful.",
    icon: RefreshCcw,
  },
  {
    title: "Modeling",
    description:
      "Our modeling services include 3D modeling and virtual reality tours of your space. This will help you visualize the final result and make any changes before construction begins.",
    icon: Cpu,
  },
  {
    title: "Painting",
    description:
      "Our painting services include interior and exterior painting for residential and commercial properties. We use high-quality paints and materials to ensure a professional finish that will last for years to come.",
    icon: Brush,
  },
];
