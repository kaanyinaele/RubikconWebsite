import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import blockgigsImg from "../assets/images/blog1.png";
import HeroBg from "../assets/images/ProductsHero.png"
import CardGame1 from "../assets/images/CardGame1.webp";
import CardGame2 from "../assets/images/CardGame2.webp";
import CardGame3 from "../assets/images/CardGame3.jpg";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import readyToBuildBg from "../assets/images/hero-3.jpg";

export default function Products() {
  const gameImages = [CardGame1, CardGame2, CardGame3];
  return (
    <div className="text-black">
      {/* Hero Section */}
      <div 
        className="products-hero text-white py-40 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold">Products</h1>
          <p className="mt-4 text-xl text-gray-200 max-w-3xl mx-auto">
            From conception to execution, explore our innovative solutions built with technical expertise
          </p>
        </div>
      </div>

      {/* Blockgigs Section */}
      <div className="py-20 product-section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                This is a job platform that revolutionizes hiring processes by leveraging web3 technology. It promotes the adoption of stablecoins payments like USDC, USDT, ensuring secure and borderless transactions.
              </p>
              <Button asChild className="bg-black text-white rounded-full px-6 py-3 hover:bg-gray-800">
                <a href="#">Go to Blockgigs →</a>
              </Button>
            </div>
            <div className="text-right">
              <span className="product-pill product-pill-one">PRODUCT ONE</span>
              <h2 className="text-4xl font-bold mt-2">Blockgigs - Future of Work on Web3</h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            <div className="flex justify-center">
              <img src={blockgigsImg} alt="Blockgigs platform" className="rounded-xl shadow-2xl" />
            </div>
            <div className="space-y-8">
              <div>
                <span className="product-pill product-pill-feature">MAIN FEATURE #ONE</span>
                <p className="mt-2 text-gray-700">
                  By focusing on skills-based pseudonym profiles, this platform eliminates hiring biases, allowing employers to assess candidates purely on merit.
                </p>
              </div>
              <div>
                <span className="product-pill product-pill-feature">MAIN FEATURE #TWO</span>
                <p className="mt-2 text-gray-700">
                  Payment challenges (either with-held pays or scam talents) are as well tackled with its milestone-based automated payment system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rubikcon's Games Section */}
      <div className="py-20 product-section-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="product-games-pill">Rubikcon's Games - The Fun of Web3</span>
              <p className="mt-6 text-gray-300">
                Our games introduce players to the web3 ecosystem in a fun and engaging way, simplifying complex blockchain concepts. The games are designed for both solo and multi-players experience. We have a variety of both physical (cards) and online games.
              </p>
              <Button asChild className="mt-6 bg-yellow-500 text-black rounded-full px-6 py-3 font-semibold hover:bg-yellow-400">
                <a href="#">Visit Game Shop →</a>
              </Button>
            </div>
            <div className="flex justify-center h-64 w-full">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 5000,
                  }),
                ]}
                className="w-full max-w-xs"
              >
                <CarouselContent>
                  {gameImages.map((img, index) => (
                    <CarouselItem key={index}>
                      <img src={img} alt={`Rubikcon Games ${index + 1}`} className="rounded-xl shadow-2xl" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Build Section */}
      <div 
        className="py-20 ready-to-build-section text-black"
        style={{ backgroundImage: `url(${readyToBuildBg})` }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build or Refine your Product?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Rubikcon handles all from paperwork to execution with our experienced technical & management team - all while ensuring business goals are met
          </p>
          <Link href="/contact">
            <Button className="bg-black text-white rounded-full px-8 py-3 font-semibold hover:bg-gray-800">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
