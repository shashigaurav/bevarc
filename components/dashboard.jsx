"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const Dashboard = ({ queries, bookings }) => {
  const [activeTab, setActiveTab] = useState("Bookings");

  const tabs = [
    {
      title: "Bookings",
      description: "Access all bookings.",
      icon: Calendar,
    },
    {
      title: "Queries",
      description: "Access all Queries.",
      icon: Mail,
    },
  ];

  return (
    <section className="flex flex-col gap-10 mt-10 scroll-mt-20">
      <div className="grid grid-cols-2 gap-4 sm:gap-10">
        {tabs.map((tab, index) => (
          <Card
            key={index}
            onClick={() => setActiveTab(tab.title)}
            className={`w-full h-full p-2 sm:p-6 hover:border-accent transition-colors cursor-pointer ${
              activeTab === tab.title
                ? "bg-accent text-black"
                : "group hover:border-accent transition-colors"
            }`}
          >
            <CardContent className="py-2 flex justify-center sm:py-0">
              <tab.icon className="group-hover:text-accent transition-colors w-10 h-10" />
            </CardContent>
            <CardHeader className="p-0 sm:pt-6 pt-2 text-center ">
              <CardTitle className="group-hover:text-accent transition-colors ">
                {tab.title}
              </CardTitle>
              <CardDescription className="md:block hidden">
                {tab.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {activeTab === "Bookings"
          ? JSON.parse(bookings).map((booking, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>{booking.name}</CardTitle>
                  <CardDescription>{booking.address}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                    {booking.services.map((service, index) => (
                      <li className="capitalize" key={index}>
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`tel:+91${booking.mobile}`}
                    className="flex items-center gap-2 text-sm text-accent w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full hover:text-black"
                    >
                      <Phone className="w-4 h-4" /> Call Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))
          : JSON.parse(queries).map((query, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>{query.name}</CardTitle>
                  <CardDescription>{query.email}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                    {query.messages.map((message, index) => (
                      <li className="capitalize" key={index}>
                        {message}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex-1">
                  <Link
                    href={`tel:+91${query.mobile}`}
                    className="flex items-center gap-2 text-sm text-accent w-full mt-auto"
                  >
                    <Button
                      variant="outline"
                      className="w-full hover:text-black"
                    >
                      <Phone className="w-4 h-4" /> Call Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
      </div>
    </section>
  );
};

export default Dashboard;
