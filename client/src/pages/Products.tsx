import { HeroSection } from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Products() {
  return (
    <div>
      <HeroSection 
        title="Products"
        subtitle="From conceptual ideas to real-world applicable and accessible solutions with technical expertise"
      />

      {/* Product Spotlight */}
      <div className="py-20 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
              PRODUCT SPOTLIGHT
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6">Blockgigs - Future of Work on Web3</h2>
              <p className="text-gray-600 mb-8">
                My focusing on skills instead of just qualifications, this platform diminishes hiring 
                biases, allowing employers to assess candidates purely on merit.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                  MAIN FEATURE INFO
                </Button>
                <Button variant="outline" className="border-2 border-green-500 text-green-500 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors">
                  FRONT FEATURE FEED
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=250" alt="Freelancer working" className="rounded-lg" />
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=250" alt="Job platform interface" className="rounded-lg" />
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-600">
              Highlight challenges with our current payment system, plus we gain talent with more control 
              with its milestone-based automated payment system.
            </p>
          </div>
        </div>
      </div>

      {/* Blockchain Games Section */}
      <div className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-yellow-400">Blockchain Games - The Fun of Web3</h2>
              <p className="text-gray-300 mb-8">
                Get a seamless on/off-ramp to rewards innovation in blockchain and engaging 
                our SmallPOOL complex blockchain concepts. Our games are designed for 
                both new and blockchain player experience. We have a variety of both physical 
                games and online games.
              </p>
              <Button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Visit Game Shop →
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Gaming interface" className="rounded-lg" />
              <img src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Gaming community" className="rounded-lg" />
              <img src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Crypto gaming" className="rounded-lg" />
              <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="NFT marketplace" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Build Section */}
      <div className="py-20 bg-gray-200 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build or Refine your Product?</h2>
          <p className="text-gray-600 mb-8">
            Rubikcon handles all from placement to execution with our experienced 
            technical & management team - all while ensuring business goals are met
          </p>
          <Link href="/contact">
            <Button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
