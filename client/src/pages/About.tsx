import { HeroSection } from "@/components/HeroSection";

export default function About() {
  return (
    <div>
      <HeroSection 
        title="About Us"
        subtitle="Explore who we are and what we represent at Rubikcon"
      />

      {/* Who We Are Section */}
      <div className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <span className="text-yellow-600 font-semibold">Who We Are (Our Representation)</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">The Vision</h3>
                  <p className="text-gray-600">
                    To accelerate the global adoption of latest by empowering businesses and individuals with scalable enterprise and blockchain protocols.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    By Positively talent, optimizing blockchain adoption, and delivering comprehensive solution; the ecosystem is empowered to turn Web/Web 3.0 and the emerging infrastructure.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Professional speaking at conference" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blueprint Section */}
      <div className="py-20 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Blueprint for Delivering Impactful Solutions</h2>
            <p className="text-gray-600">
              At Rubikcon, our end-to-end services transform abstract ideas into real-world impact. Partner with us to 
              shape the future of decentralized innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-yellow-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">PROBLEM PROJECTS FACE</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Most Projects brought to tangent and released without Developers
                </p>
                <p className="text-gray-700">
                  No time or equipment to have Developers or organized community management for the project
                </p>
                <p className="text-gray-700">
                  Want a Project (SM) or website they idea want to excel in Africa but don't know where to start
                </p>
                <p className="text-gray-700">
                  Projects get stuck in the planning phase or build products that don't find the way
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">SOLUTION WE BRING</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  We create custom strategies meeting regulatory compliance and development developer onboarding
                </p>
                <p className="text-gray-700">
                  We have Lead Developer dedicated through blockchain training and community building support
                </p>
                <p className="text-gray-700">
                  We transform your goals - from ideation to bring your vision to reality: product launch events, community connected and DAO voice
                </p>
                <p className="text-gray-700">
                  We transform your programs - transforming both professionals and blockchain plans for your client, saying you feedback, service strategic and working at every corner involving complex parts and to team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Team Section */}
      <div className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Team collaboration" className="rounded-lg" />
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Diverse team working" className="rounded-lg" />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6">Community-driven Team Sections</h2>
              <p className="text-gray-600 mb-6">
                Dedicated and diverse teams - specializing in marketing, design, development, 
                and business that can advance expertise to deploy our Web community for your use.
              </p>
              <p className="text-gray-600 mb-8">
                From concept to launch, we collaborate closely with you to understand 
                your goals, adapt to challenges, and drive sustainable success. Whether 
                you need global reach planning, partnership connection for smooth onboarding, 
                your functional approach guarantees Innovation and efficiency at every 
                step of your journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
