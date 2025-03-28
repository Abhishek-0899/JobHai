// import { Carousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import Autoplay from "embla-carousel-autoplay";
import faqs from "../data/faq.json";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Item,
} from "@radix-ui/react-accordion";

const LandingPage = () => {
  const [openItems, setOpenItems] = useState({});
  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1
          className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl
        tracking-tight py-4 bg-white"
        >
          FInd your dream job{" "}
          <span className="flex items-center gap-2 sm:gap-6">
            and get {""}
            <img src="/logo.png" alt="hirrd" className="h-14 sm:h-24 lg:h-30" />
          </span>
        </h1>
        <p className="text-gray-400 sm:mt-4 text-xs sm:text-xl">
          Explore thousand of jobs listings or find the perfect candidate
        </p>
      </section>
      <div className="flex justify-center gap-6">
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to="/postjobs">
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>

      {/* {Carousel} */}

      <Carousel
        className="w-full py-10"
        plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center auto">
          {companies.map(({ name, path, id }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h-14 object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* banner */}
      <img src="/banner.jpeg" className="w-full" alt="" />

      {/* cards */}

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <Card>
          <CardHeader>
            <CardTitle>For Seekers</CardTitle>
            <CardDescription>
              Search and Apply for jobs, track application, and more...
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employeer</CardTitle>
            <CardDescription>
              Post jobs, manage applications, and find the best candidate
            </CardDescription>
          </CardHeader>
        </Card>
      </section>
      {/* accordium */}

      <Accordion type="multiple" className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="w-full"
          >
            <AccordionTrigger
              className="flex items-center justify-between p-4 text-lg font-bold w-full"
              onClick={() => toggleItem(index)}
            >
              <span>{faq.question}</span>
              {openItems[index] ? (
                <ChevronUpIcon className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
              )}
            </AccordionTrigger>
            <AccordionContent className="pl-4 pr-4 pb-2 text-gray-300">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;

// 43:45
