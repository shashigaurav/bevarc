import { services } from "@/lib/utils";
import ServiceCard from "./service-card";
import Animation from "./animation";

const Services = () => {
  return (
    <section
      className="flex flex-col items-center gap-10 p-6 mt-10 scroll-mt-20"
      id="services"
    >
      <h1 className="text-4xl font-black">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6 sm:grid-cols-2 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {services.map((service, index) => (
          <Animation
            key={index}
            variant="pop"
            duration={0.7}
            delay={index * 0.1}
          >
            <ServiceCard service={service} />
          </Animation>
        ))}
      </div>
    </section>
  );
};

export default Services;
