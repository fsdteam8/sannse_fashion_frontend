"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //   CarouselNext,
  //   CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

interface SlideData {
  id: number;
  backgroundImage: string;
  title: string;
  subtitle: string;
  primaryButton: string;
  secondaryButton: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    backgroundImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2070&q=80",
    title: "Lorem ipsum dolor sit amet,\nconsectetur cras amet.",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur diam non sodales eleifend.",
    primaryButton: "Customize Product",
    secondaryButton: "Readymade Product",
  },
  {
    id: 2,
    backgroundImage:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=2071&q=80",
    title: "Discover Premium Quality\nFashion Collection",
    subtitle:
      "Explore our curated selection of premium clothing and accessories. Find pieces that express your unique style.",
    primaryButton: "Customize Product",
    secondaryButton: "Readymade Product",
  },
  {
    id: 3,
    backgroundImage:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2070&q=80",
    title: "Tailored to Perfection\nJust for You",
    subtitle:
      "Experience custom-tailored garments designed for your measurements. Every detail meets your expectations.",
    primaryButton: "Customize Product",
    secondaryButton: "Readymade Product",
  },
];

export default function Homehero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Carousel
        className="w-full h-full"
        plugins={[plugin.current]}
        setApi={setApi}
      >
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-screen">
              <div className="relative w-full h-full">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
                  style={{ backgroundImage: `url('${slide.backgroundImage}')` }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Text Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                  <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      {slide.title.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < slide.title.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <div>
                        <Link href="/customize-product">
                          <Button className="bg-red-600 h-[51px] w-[230px] hover:bg-red-700 text-lg font-semibold transition-transform hover:scale-105">
                            {slide.primaryButton}
                          </Button>
                        </Link>
                      </div>
                      <div>
                        <Link href="/products">
                          <Button
                            variant="outline"
                            className="border-2 h-[51px] border-red-600 w-[230px] text-red-600 hover:bg-red-600 hover:text-white text-lg font-semibold transition-transform hover:scale-105"
                          >
                            {slide.secondaryButton}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        {/* <CarouselPrevious className="left-4 hidden md:flex bg-white/20 border-white/30 text-white hover:bg-white/30 transition" />
        <CarouselNext className="right-4 hidden md:flex bg-white/20 border-white/30 text-white hover:bg-white/30 transition" /> */}
      </Carousel>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-red-600 scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
