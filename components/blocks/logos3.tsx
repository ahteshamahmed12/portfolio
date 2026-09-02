// This component requires the Embla Auto Scroll plugin:
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
  title?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  logosLine1?: Logo[];
  logosLine2?: Logo[];
  className?: string;
}

const defaultLogosLine1: Logo[] = [
  {
    id: "logo-1",
    description: "Next.js",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
    className: "h-7 w-auto brightness-0 invert opacity-60",
  },
  {
    id: "logo-2",
    description: "React",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg",
    className: "h-7 w-auto brightness-0 invert opacity-60",
  },
  {
    id: "logo-3",
    description: "Tailwind CSS",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
    className: "h-4 w-auto brightness-0 invert opacity-60",
  },
  {
    id: "logo-4",
    description: "Supabase",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
    className: "h-7 w-auto brightness-0 invert opacity-60",
  },
  {
    id: "logo-5",
    description: "shadcn/ui",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
    className: "h-7 w-auto brightness-0 invert opacity-60",
  },
  {
    id: "logo-6",
    description: "Astro",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
    className: "h-7 w-auto brightness-0 invert opacity-60",
  },
  {
    id: "logo-7",
    description: "Figma",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
    className: "h-7 w-auto brightness-0 invert opacity-60",
  },
  {
    id: "logo-8",
    description: "Vercel",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
    className: "h-7 w-auto brightness-0 invert opacity-60",
  },
  {
    id: "logo-9",
    description: "VS Code",
    title: "VS Code",
    image: "https://api.iconify.design/simple-icons:visualstudiocode.svg?color=white",
    className: "h-6 w-6 opacity-70",
  },
];

const defaultLogosLine2: Logo[] = [
  {
    id: "logo-10",
    description: "Python",
    title: "Python",
    image: "https://cdn.simpleicons.org/python/white",
    className: "h-6 w-6 opacity-70",
  },
  {
    id: "logo-11",
    description: "FastAPI",
    title: "FastAPI",
    image: "https://cdn.simpleicons.org/fastapi/white",
    className: "h-6 w-6 opacity-70",
  },
  {
    id: "logo-12",
    description: "Docker",
    title: "Docker",
    image: "https://cdn.simpleicons.org/docker/white",
    className: "h-6 w-6 opacity-70",
  },
  {
    id: "logo-13",
    description: "Kubernetes",
    title: "Kubernetes",
    image: "https://cdn.simpleicons.org/kubernetes/white",
    className: "h-6 w-6 opacity-70",
  },
  {
    id: "logo-14",
    description: "n8n",
    title: "n8n",
    image: "https://cdn.simpleicons.org/n8n/white",
    className: "h-6 w-6 opacity-70",
  },
  {
    id: "logo-15",
    description: "LangGraph",
    title: "LangGraph",
    image: "https://cdn.simpleicons.org/langchain/white",
    className: "h-6 w-6 opacity-70",
  },
  {
    id: "logo-16",
    description: "OpenAI Agent SDK",
    title: "OpenAI Agent SDK",
    image: "https://api.iconify.design/simple-icons:openai.svg?color=white",
    className: "h-6 w-6 opacity-70",
  },
  {
    id: "logo-17",
    description: "Claude",
    title: "Claude",
    image: "https://cdn.simpleicons.org/claude/white",
    className: "h-6 w-6 opacity-70",
  },
];

const Logos3 = ({
  heading = "Trusted by these companies",
  logos,
  logosLine1,
  logosLine2,
}: Logos3Props) => {
  const line1 =
    logosLine1 ??
    (logos ? logos.slice(0, Math.ceil(logos.length / 2)) : defaultLogosLine1);
  const line2 =
    logosLine2 ??
    (logos ? logos.slice(Math.ceil(logos.length / 2)) : defaultLogosLine2);

  const displayLine1 = [...line1, ...line1, ...line1];
  const displayLine2 = [...line2, ...line2, ...line2];

  return (
    <section className="py-20">
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          {heading}
        </h2>
      </div>

      <div className="pt-10 md:pt-16 lg:pt-20 space-y-8">
        {/* Line 1 */}
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl overflow-hidden">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          >
            <CarouselContent className="ml-0">
              {displayLine1.map((logo, index) => (
                <CarouselItem
                  key={`${logo.id}-l1-${index}`}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-6 flex shrink-0 items-center justify-center gap-2.5">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                    />
                    {logo.title && (
                      <span className="text-sm font-medium text-neutral-300 whitespace-nowrap">
                        {logo.title}
                      </span>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Edge fade overlays */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>

        {/* Line 2 */}
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl overflow-hidden">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 0.8 })]}
          >
            <CarouselContent className="ml-0">
              {displayLine2.map((logo, index) => (
                <CarouselItem
                  key={`${logo.id}-l2-${index}`}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-6 flex shrink-0 items-center justify-center gap-2.5">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                    />
                    {logo.title && (
                      <span className="text-sm font-medium text-neutral-300 whitespace-nowrap">
                        {logo.title}
                      </span>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Edge fade overlays */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
