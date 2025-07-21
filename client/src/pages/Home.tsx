import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BookMeetingModal } from "@/components/BookMeetingModal";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from "@/components/HeroSection";
import Founder1 from "@/assets/images/Founder1.jpeg";
import Founder2 from "@/assets/images/Founder2.jpg";
import Founder3 from "@/assets/images/Founder3.jpg";
import CTO from "@/assets/images/CTO.jpg";
import blog2 from "@/assets/images/blog2.png";


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* What We Do Section */}
      <div className="py-20 services-section text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div className="mb-8 md:mb-0">
              <span className="inline-block px-4 py-2 text-yellow-800 rounded-full text-sm font-semibold service-pill">
                Our Services
              </span>
              <h2 className="text-4xl font-bold mt-4">What we do</h2>
            </div>
            <div className="text-left md:text-right">
              <p className="text-gray-600 max-w-sm">
                Want a 15 minutes demo on how we can elevate your business. Let's
                talk
              </p>
              <BookMeetingModal />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            <div className="md:col-span-2">
              <Card className="service-card">
                <CardContent className="p-8 text-center">
                  <h3 className="text-lg font-semibold mb-3">
                    PRODUCT DEVELOPMENT
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Full-cycle development services. from ideation and
                    prototyping to launch and maintenance
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card className="service-card">
                <CardContent className="p-8 text-center">
                  <h3 className="text-lg font-semibold mb-3">
                    TALENT ACQUISITION
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Assisting companies in finding and hiring top web3
                    developers, designers, and specialists
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card className="service-card">
                <CardContent className="p-8 text-center">
                  <h3 className="text-lg font-semibold mb-3">
                    MARKETING & BRANDING
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Crafting effective marketing strategies to reach target
                    audiences and establish a strong brand identity
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-start-2 md:col-span-2">
              <Card className="service-card">
                <CardContent className="p-8 text-center">
                  <h3 className="text-lg font-semibold mb-3">
                    WEB3 CONSULTING
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Guiding clients in defining their web3 business model,
                    competitive advantage, and long-term vision. Comprehensive
                    security assessments and audits of blockchain protocols to
                    ensure asset protection and minimize vulnerabilities
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card className="service-card">
                <CardContent className="p-8 text-center">
                  <h3 className="text-lg font-semibold mb-3">
                    EDUCATION & TRAINING
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We offer a comprehensive and robust curriculum of
                    educational programs designed to foster blockchain literacy,
                    drive innovation, and empower individuals, businesses, and
                    communities to actively participate in the web3 ecosystem
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-20 partners-section text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We pride ourselves building a strong community and working with a
              strong network of already established web3 names
            </p>
          </div>

          <div className="partners-grid">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="partners-header font-semibold text-lg tracking-wider">BLOCKCHAIN</div>
                <div className="partners-cell mt-4 h-24 bg-gray-200/50 rounded-lg"></div>
              </div>
              <div className="text-center">
                <div className="partners-header font-semibold text-lg tracking-wider">COMPANIES</div>
                <div className="partners-cell mt-4 h-24 bg-gray-200/50 rounded-lg"></div>
              </div>
              <div className="text-center">
                <div className="partners-header font-semibold text-lg tracking-wider">FOUNDATIONS</div>
                <div className="partners-cell mt-4 h-24 bg-gray-200/50 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-20 bg-gradient-to-br from-yellow-100 to-orange-100 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div className="mb-8 md:mb-0">
              <span className="inline-block px-4 py-2 text-yellow-800 rounded-full text-sm font-semibold guide-pill">
                A Comprehensive Guide
              </span>
              <h2 className="text-4xl font-bold mt-4">
                Blog - Understanding Blockchain
              </h2>
            </div>
            <div className="text-left md:text-right">
              <p className="text-gray-600 max-w-sm">
                Read a few write-ups about blockchain and the Web3 ecosystem.
                Want deeper insights? Don't worry, we've got you covered. Check
                out others
              </p>
              <Button
                asChild
                className="mt-4 bg-black text-white hover:bg-gray-800 rounded-full px-6 py-3 font-semibold"
              >
                <a href="https://medium.com/@info.rubiconconsulting" target="_blank" rel="noopener noreferrer">See More Blogs &rarr;</a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="blog-card">
              <img src="https://i.postimg.cc/cJXTf5J7/Chat-GPT-Image-Jul-20-2025-01-03-06-PM.png" alt="Blog 1" />
              <div className="blog-card-overlay">
                <h3 className="text-lg font-semibold mb-3">
                Understanding Blockchain Technology: A Comprehensive Overview
                </h3>
                <Button
                  asChild
                  className="bg-gray-800/50 text-white hover:bg-gray-700/70 rounded-lg px-4 py-2 text-sm font-semibold"
                >
                  <a href="https://medium.com/@info.rubiconconsulting/understanding-blockchain-technology-a-comprehensive-overview-d69cd53d0817" target="_blank" rel="noopener noreferrer">View Write-up</a>
                </Button>
              </div>
            </div>

            <div className="blog-card blog-card-dark">
              <img src={blog2} alt="Blog 2" />
              <div className="blog-card-overlay">
                <h3 className="text-lg font-semibold mb-3">
                Chainlink: Connecting Smart Contracts to Onchain Data
                </h3>
                <Button
                  asChild
                  className="bg-gray-800/50 text-white hover:bg-gray-700/70 rounded-lg px-4 py-2 text-sm font-semibold"
                >
                  <a href="https://medium.com/@info.rubiconconsulting/chainlink-connecting-smart-contracts-to-onchain-data-b81e4168f666" target="_blank" rel="noopener noreferrer">View Write-up</a>
                </Button>
              </div>
            </div>

            <div className="blog-card">
              <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*rmSUq-VZdLfUzaZGu9uJiQ.jpeg" alt="Blog 3" />
              <div className="blog-card-overlay">
                <h3 className="text-lg font-semibold mb-3">
                Rubicon Consults & MUAccra: Inspiring Africa’s Blockchain Ecosystem


                </h3>
                <Button
                  asChild
                  className="bg-gray-800/50 text-white hover:bg-gray-700/70 rounded-lg px-4 py-2 text-sm font-semibold"
                >
                  <a href="https://medium.com/@info.rubiconconsulting/rubicon-consults-muaccra-inspiring-africas-blockchain-ecosystem-9caab221d6d1" target="_blank" rel="noopener noreferrer">View Write-up</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects & Products Section */}
      <div className="py-20 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Projects & Products</h2>
              <p className="text-gray-600 mb-8">
                We empower individuals and teams through hands-on learning and
                collaboration in web3. Our projects cover educational trainings,
                bootcamps, AMA sessions with industry leaders and partnerships
                aimed at bridging the gap between aspirations and expertise
              </p>
              <Link href="/projects"
              className="scroll-to-top"
              onClick={() => window.scrollTo(0, 0)}
              >
                <Button className="bg-black text-white px-6 py-3 rounded-3xl hover:bg-gray-800 transition-colors btn-hover-scale">
                  More about projects
                </Button>
              </Link>
            </div>
            <div className="h-64 w-px bg-yellow-600 hidden lg:block"></div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                alt="Development workspace"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                alt="Team collaboration"
                className="rounded-lg"
              />
            </div>
            {/* ---------------------- */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                alt="Development workspace"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                alt="Team collaboration"
                className="rounded-lg"
              />
            </div>
            <div className="h-64 w-px bg-yellow-600 hidden lg:block"></div>
            <div>
              <h2 className="text-4xl font-bold mb-6"></h2>
              <p className="text-gray-600 mb-8">
                We offer a wide range of products, all centered on solving
                challenges for users world-wide Our business-oriented products
                leverage blockchain technology to provide real-world solutions
                for individuals Our games introduce players to the web3
                ecosystem in a fun and engaging way, simplifying complex
                blockchain concepts
              </p>
              <Link href="/products"
              className="scroll-to-top"
              onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-black text-white px-6 py-3 rounded-3xl hover:bg-gray-800 transition-colors btn-hover-scale">
                  Go to products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="py-20 team-section text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <p className="text-gray-600 mb-6">
                Here, we believe Web3 success isn't just about technology - it's
                powered by people. Our cross-dynamic team pushes our
                community-driven mission, helping clients shape the future of
                web3 innovations
              </p>
              <Button
                asChild
                className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-3 font-semibold"
              >
                <Link href="/about">Know More &rarr;</Link>
              </Button>
            </div>
            <div className="text-left md:text-right">
              <span className="inline-block px-4 py-2 text-yellow-800 rounded-full text-sm font-semibold about-pill">
                About Rubikcon
              </span>
              <h2 className="text-4xl font-bold mt-4">
                Meet the Team Leads 
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <a 
              href="https://www.linkedin.com/in/oziomaonukogu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-all duration-300 team-card cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 rounded-lg overflow-hidden"
            >
              <img src={Founder1} alt="Ozioma Onukogu" className="w-full h-auto" />
              <div className="team-card-content p-4">
                <h3 className="font-bold text-lg">OZIOMA ONUKOGU</h3>
                <p className="text-gray-600">Chief Executive Officer</p>
              </div>
            </a>



            <a 
              href="https://www.linkedin.com/in/joy-egbu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-all duration-300 team-card cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 rounded-lg overflow-hidden"
            >
              <img src={Founder2} alt="Joy Egbu" className="w-full h-auto" />
              <div className="team-card-content p-4">
                <h3 className="font-bold text-lg">JOY EGBU</h3>
                <p className="text-gray-600">Chief Product Officer</p>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/usiwosonia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-all duration-300 team-card cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 rounded-lg overflow-hidden"
            >
              <img src={Founder3} alt="Sonia Usiwo" className="w-full h-auto" />
              <div className="team-card-content p-4">
                <h3 className="font-bold text-lg">SONIA USIWO</h3>
                <p className="text-gray-600">Chief Operating Officer</p>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/naele/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-all duration-300 team-card cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 rounded-lg overflow-hidden"
            >
              <img src={CTO} alt="Uche David" className="w-full h-auto" />
              <div className="team-card-content p-4">
                <h3 className="font-bold text-lg">UCHE DAVID</h3>
                <p className="text-gray-600">Chief Technology Officer</p>
              </div>
            </a>

            
          </div>
        </div>
      </div>
    </div>
  );
}
