import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import Animation from "./animation";

const Hero = () => {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 items-center w-full h-auto min-h-[calc(100svh-108.5px)] gap-10">
      <div className="relative z-10 flex flex-col gap-10 items-center p-6 overflow-hidden">
        <Animation variant="fade" duration={0.3} delay={0.7}>
          <h1 className="text-4xl font-bold uppercase text-gray-400 hover:text-accent transition-colors text-center">
            Bevarc
          </h1>
        </Animation>
        <Animation variant="fade" duration={0.3} delay={0.8}>
          <p className="group text-lg text-gray-500 hover:text-foreground transition-colors text-center">
            Book professional construction services with ease! We specialize
            in&nbsp;
            <span className="inline-block transition-all capitalize cursor-default hover:underline group-hover:text-accent">
              architecture design
            </span>
            <span className="group-hover:text-foreground">,</span>&nbsp;
            <span className="inline-block transition-all capitalize cursor-default hover:underline group-hover:text-accent">
              interior work
            </span>
            <span className="group-hover:text-foreground">,</span>&nbsp;
            <span className="inline-block transition-all capitalize cursor-default hover:underline group-hover:text-accent">
              building construction
            </span>
            <span className="group-hover:text-foreground">,</span>&nbsp;
            <span className="inline-block transition-all capitalize cursor-default hover:underline group-hover:text-accent">
              renovation
            </span>
            <span className="group-hover:text-foreground">,</span>&nbsp;
            <span className="inline-block transition-all capitalize cursor-default hover:underline group-hover:text-accent">
              modeling
            </span>
            , and
            <span className="inline-block transition-all capitalize cursor-default hover:underline group-hover:text-accent">
              home painting
            </span>
            . Reliable, expert solutions tailored to your needs.
          </p>
        </Animation>
        <Animation variant="pop" duration={0.7} delay={0.9}>
          <Link href="/booking">
            <Button className="hover:bg-accent">Schedule today!</Button>
          </Link>
        </Animation>
      </div>

      <Animation variant="pop" duration={0.7}>
        <div className="md:flex items-center justify-center w-full h-full p-6 hidden">
          <Image
            src="/construction.svg"
            width={800}
            height={800}
            alt="Bevarc"
            className="w-full h-auto"
          />
        </div>
      </Animation>
      <Animation variant="fade" duration={1}>
        <div className="absolute bottom-0  bg-[url('/wave.svg')] w-full h-1/3 bg-cover hidden sm:block -z-0">
          <div className="relative w-full h-full bg-gradient-to-b from-transparent to-background/60" />
        </div>
      </Animation>
    </section>
  );
};

export default Hero;
