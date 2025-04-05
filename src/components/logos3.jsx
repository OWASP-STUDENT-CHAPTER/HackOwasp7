// This template requires the Embla Auto Scroll plugin to be installed:
// npm install embla-carousel-auto-scroll

"use client";;
import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { InfiniteSlider } from "./ui/infinite-slider";

const Logos3 = ({
  heading = "Trusted by these companies",

  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://shadcnblocks.com/images/block/logos/astro.svg",
      className: "h-15 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "https://shadcnblocks.com/images/block/logos/figma.svg",
      className: "h-15 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "https://shadcnblocks.com/images/block/logos/nextjs.svg",
      className: "h-15 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "https://shadcnblocks.com/images/block/logos/react.png",
      className: "h-15 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "https://shadcnblocks.com/images/block/logos/shadcn-ui.svg",
      className: "h-15 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "https://shadcnblocks.com/images/block/logos/supabase.svg",
      className: "h-15 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "https://shadcnblocks.com/images/block/logos/tailwind.svg",
      className: "h-4 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "https://shadcnblocks.com/images/block/logos/vercel.svg",
      className: "h-15 w-auto",
    },
  ]
}) => {
  return (
    <section className="">
      <div className="">
        {/* <div
          className="relative mx-auto flex items-center justify-center w-full overflow-hidden">
          <C25ousel opts={{ loop: true }} direction="ltr" plugins={[AutoScroll({ playOnInit: true })]}>
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                  <div className="mx-10 px-20 flex shrink-0 items-center justify-center">
                    <div>
                      <img src={logo.image} alt={logo.description} className={logo.className} />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </C25ousel>
        </div> */}
        <div
          className="relative mx-auto flex items-center justify-center w-full overflow-hidden">
          <InfiniteSlider gap={25} className="w-full h-fit">
            <img
              src="https://motion-primitives.com/apple_music_logo.svg"
              alt="Apple Music logo"
              className="h-[180px] w-auto px-15 bg-amber-800 shadow-md shadow-white rounded-3xl  my-5"
            />
            <img
              src="https://motion-primitives.com/chrome_logo.svg"
              alt="Chrome logo"
              className="h-[180px] w-auto px-15 bg-amber-800 shadow-md shadow-white rounded-3xl  my-5"
            />
            <img
              src="https://motion-primitives.com/strava_logo.svg"
              alt="Strava logo"
              className="h-[180px] w-auto px-15 bg-amber-800 shadow-md shadow-white rounded-3xl  my-5"
            />
            <img
              src="https://motion-primitives.com/nintendo_logo.svg"
              alt="Nintendo logo"
              className="h-[180px] w-auto px-15 bg-amber-800 shadow-md shadow-white rounded-3xl  my-5"
            />
            <img
              src="https://motion-primitives.com/jquery_logo.svg"
              alt="Jquery logo"
              className="h-[180px] w-auto px-15 bg-amber-800 shadow-md shadow-white rounded-3xl  my-5"
            />
            <img
              src="https://motion-primitives.com/prada_logo.svg"
              alt="Prada logo"
              className="h-[180px] w-auto px-15 bg-amber-800 shadow-md shadow-white rounded-3xl  my-5"
            />
          </InfiniteSlider>
        </div>
        <div
          className="relative mx-auto flex items-center justify-center w-full overflow-hidden">
          <InfiniteSlider gap={25} reverse className="w-full h-fit">
            <img
              src="https://motion-primitives.com/apple_music_logo.svg"
              alt="Apple Music logo"
              className="h-[150px] w-auto px-15 bg-amber-800 shadow-md shadow-white rounded-3xl  my-5"
            />
            <img
              src="https://motion-primitives.com/chrome_logo.svg"
              alt="Chrome logo"
              className="h-[150px] w-auto px-15 bg-amber-800 shadow-md shadow-white rounded-3xl  my-5"
            />
            <img
              src="https://motion-primitives.com/strava_logo.svg"
              alt="Strava logo"
              className="h-[150px] w-auto px-15 bg-amber-800 shadow-md shadow-white rounded-3xl  my-5"
            />
            <img
              src="https://motion-primitives.com/nintendo_logo.svg"
              alt="Nintendo logo"
              className="h-[150px] w-auto px-15 bg-amber-800 shadow-md shadow-white rounded-3xl  my-5"
            />
            <img
              src="https://motion-primitives.com/jquery_logo.svg"
              alt="Jquery logo"
              className="h-[150px] w-auto px-15 bg-amber-800 shadow-md shadow-white rounded-3xl  my-5"
            />
            <img
              src="https://motion-primitives.com/prada_logo.svg"
              alt="Prada logo"
              className="h-[150px] w-auto px-15 bg-amber-800 shadow-md shadow-white rounded-3xl  my-5"
            />
          </InfiniteSlider>
        </div>
        <div
          className="relative mx-auto flex items-center justify-center w-full overflow-hidden">
          <InfiniteSlider gap={25} className="w-full h-fit">
            <img
              src="https://motion-primitives.com/apple_music_logo.svg"
              alt="Apple Music logo"
              className="h-[100px] w-auto px-15 bg-amber-800 shadow-md shadow-white rounded-3xl  my-5"
            />
            <img
              src="https://motion-primitives.com/chrome_logo.svg"
              alt="Chrome logo"
              className="h-[100px] w-auto px-15 bg-amber-800 shadow-md shadow-white rounded-3xl  my-5"
            />
            <img
              src="https://motion-primitives.com/strava_logo.svg"
              alt="Strava logo"
              className="h-[100px] w-auto px-15 bg-amber-800 shadow-md shadow-white rounded-3xl  my-5"
            />
            <img
              src="https://motion-primitives.com/nintendo_logo.svg"
              alt="Nintendo logo"
              className="h-[100px] w-auto px-15 bg-amber-800 shadow-md shadow-white rounded-3xl  my-5"
            />
            <img
              src="https://motion-primitives.com/jquery_logo.svg"
              alt="Jquery logo"
              className="h-[100px] w-auto px-15 bg-amber-800 shadow-md shadow-white rounded-3xl  my-5"
            />
            <img
              src="https://motion-primitives.com/prada_logo.svg"
              alt="Prada logo"
              className="h-[100px] w-auto px-15 bg-amber-800 shadow-md shadow-white rounded-3xl  my-5"
            />
          </InfiniteSlider>
        </div>
        {/* <div
          className="relative mx-auto flex items-center justify-center w-full overflow-hidden">
          <C25ousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true })]}>
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                  <div className="mx-10 px-20 flex shrink-0 items-center justify-center">
                    <div>
                      <img src={logo.image} alt={logo.description} className={logo.className} />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </C25ousel>
        </div> */}
      </div>
    </section>
  );
};

export { Logos3 };
