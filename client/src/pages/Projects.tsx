import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import hero2 from '@/assets/images/hero-2.jpg';
import blog1 from '@/assets/images/blog1.png';
import blog2 from '@/assets/images/blog2.png';
import blog3 from '@/assets/images/blog3.jpg';

export default function Projects() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="projects-hero text-white py-40 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url(${hero2})` }}
      >
        <div className="max-w-7xl mx-auto text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Projects</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Explore who we are and what we represent at Rubikcon.
          </p>
        </div>
      </div>

      {/* Solo Trainings & Community Outreach */}
      <div className="py-20 project-section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex space-x-4">
              <img src={blog1} alt="AMA Session" className="rounded-lg shadow-lg w-1/2 object-cover"/>
              <img src={blog2} alt="Future of DeFi" className="rounded-lg shadow-lg w-1/2 object-cover mt-8"/>
            </div>
            <div className="text-gray-800">
              <span className="project-pill-blue">AMA Session</span>
              <h2 className="text-4xl font-bold my-4">Solo Trainings & Community Outreach</h2>
              <p className="text-gray-600 mb-4">
                We believe success in Web3 isn't just about technology, it's about people. That's why the our community is here to learn, build, and grow together. We bridge the gap between complex blockchain innovations and real-world adoption.
              </p>
              <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
                <p>
                  We host regular <span className="font-bold">AMA Sessions</span> with both our in-house team and industry experts. Our internal AMAs explore Rubikcon's vision, the challenges of web3 adoption and strategies for a decentralized future. We have also hosted talks with external experts including the <span className="font-bold">Future of DEFI in Africa</span> covering how DEFI can empower the unbanked and its legal barriers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnerships Training & Events */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="project-pill-yellow">Collaborations with Web3 Organizations</span>
              <h2 className="text-4xl font-bold my-4">Partnerships Training & Events</h2>
            </div>
            <div className="text-gray-600">
              <p>
                We deliver targeted blockchain education with partners like HerDAO, Starknet, and Web3Commpass. Our initiatives include the Women in Web3 empowerment program, the structured 100DaysOfSolidity challenge and the Starknet Basecamp Africa.
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <img src={blog1} alt="Event 1" className="rounded-lg shadow-md w-full h-48 object-cover"/>
            <img src={blog2} alt="Event 2" className="rounded-lg shadow-md w-full h-48 object-cover"/>
            <img src={blog3} alt="Event 3" className="rounded-lg shadow-md w-full h-48 object-cover"/>
            <img src={blog1} alt="Event 4" className="rounded-lg shadow-md w-full h-48 object-cover"/>
            <img src={blog2} alt="Event 5" className="rounded-lg shadow-md w-full h-48 object-cover"/>
            <img src={blog3} alt="Event 6" className="rounded-lg shadow-md w-full h-48 object-cover"/>
          </div>
        </div>
      </div>

      {/* Sponsorships - Devcon Highlights */}
      <div className="py-20 project-section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
                <img src={blog1} alt="Devcon 1" className="rounded-lg shadow-lg"/>
                <img src={blog2} alt="Devcon 2" className="rounded-lg shadow-lg"/>
                <img src={blog3} alt="Devcon 3" className="rounded-lg shadow-lg col-span-2"/>
            </div>
            <div className="text-gray-800">
              <span className="project-pill-pink">Sponsorships - Devcon Highlights</span>
              <p className="text-gray-600 my-4">
                Devcon At Your Doorstep brought together leading Ethereum experts to share insights and strategies for thriving in the Web3 space. Hosted by the Rubikcon Team, the event featured real-world use cases, and speakers who discussed Devcon's significance in the global web3 ecosystem.
              </p>
              <p className="text-gray-600 mb-6">
                Additionally, Laisha Wadhwa, creator of Radarr, broke down Ethereum's ecosystem, while Mason Horloza, guided attendees on making real-world impact alongside other inspiring speakers.
              </p>
              <Button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-semibold">
                Watch YouTube Live
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gray-800 text-white cta-section-projects">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">Want to Onboard Talents or Launch your Project?</h2>
          <p className="text-gray-300 mb-8">
            We handle recruitment, training, compliance, and community growth with outreaches & events. Let's turn your vision to reality.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
