import React from "react";
import ContactForm from "./contact-form";
import Image from "next/image";
import Animation from "./animation";

const Contact = () => {
  return (
    <section
      className="flex flex-col items-center gap-10 p-6 mt-10 scroll-mt-20"
      id="contact"
    >
      <h1 className="text-4xl font-black">Contact Us</h1>
      <div className="grid md:grid-cols-2 w-full items-center">
        <Animation variant="fade" duration={0.3} delay={0.7}>
          <ContactForm />
        </Animation>
        <Animation variant="pop" duration={0.7} delay={0.2}>
          <div className="p-6 relative md:flex items-center justify-center hidden">
            <Image
              src={"/contact.svg"}
              width={800}
              height={800}
              objectFit="contain"
              alt="Contact us"
            />
          </div>
        </Animation>
      </div>
    </section>
  );
};

export default Contact;
