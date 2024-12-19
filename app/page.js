import Contact from "@/components/contact";
import Hero from "@/components/hero";
import PageWrapper from "@/components/page-wrapper";
import Services from "@/components/services";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Services />
      <Contact />
    </PageWrapper>
  );
}
