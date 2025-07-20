import representationImg from "../assets/images/about-us-Ozi.jpg";
import communityImg1 from "../assets/images/blog1.png";
import communityImg2 from "../assets/images/blog2.png";
import JoyImg from "../assets/images/Joy.png";
import SoniaImg from "../assets/images/Sonia.jpg";
import OziImg from "../assets/images/Ozi.jpeg";

export default function About() {
  return (
    <div className="text-black">
      {/* Hero Section */}
      <div className="relative about-hero py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold">About Us</h1>
          <p className="mt-4 text-xl text-gray-300">
            Explore who we are and what we represent at Rubikcon
          </p>
        </div>
        <div className="about-hero-bg-text">
          <span className="tracking-[2rem]">RUBK</span>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Who We Are (Our Representation)</h2>
              <p className="text-gray-600 mb-8">
                Rubikcon Nexus exists to bridge the gap between traditional enterprises and the decentralized future. We provide expert consulting, strategic onboarding and execution-driven solutions to help companies innovate, adapt and lead in the Web3 ecosystem.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <span className="vision-mission-pill">The Vision</span>
                  <p className="text-gray-600 mt-2 text-justify">
                    To accelerate the global adoption of web3 by empowering businesses and individuals with scalable solutions and trainings
                  </p>
                </div>
                <div>
                  <span className="vision-mission-pill">Our Mission</span>
                  <p className="text-gray-600 mt-2 text-justify">
                    By fostering talent, optimizing blockchain adoption, and delivering measurable results, we pave the way for sustainable growth in the new digital economy.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={representationImg}
                alt="Rubikcon representation" 
                className="square-full w-200 h-200 object-cover shadow-2xl rounded-tl-full rounded-bl-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blueprint Section */}
      <div className="py-20 blueprint-section text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Blueprint for Delivering Impactful Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Rubikcon, our end-to-end services transform abstract ideas into real-world impact. Partner with us to 
              shape the future of decentralized innovation.
            </p>
          </div>

          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-[#EAF2D7] p-4 h-24 font-bold border-b border-gray-300 md:border-r flex items-center justify-center">PROBLEM PROJECTS FACE</div>
              <div className="bg-[#EAF2D7] p-4 h-24 font-bold border-b border-gray-300 flex items-center justify-center">SOLUTION WE BRING</div>

              <div className="p-4 space-y-4 text-gray-700 md:border-r border-gray-300">
                <p>Most Projects struggle to engage and onboard African Developers</p>
                <p>No time or manpower to train Developers or organize community engagement for your projects?</p>
                <p>Have a Project, DAO or startup idea you want to scale in Africa but don't know where to start?</p>
                <p>Projects get stuck in the Planning phase or build products that don't end up aligning with market demands</p>
              </div>

              <div className="p-4 space-y-4 text-gray-700">
                <p>We create custom strategies covering regulatory compliance and streamlined developer onboarding</p>
                <p>We help scale developer adoption through recruitment, training and community-building support</p>
                <p>Structured management approach to bring your vision to reality - product launch events, community outreach and lots more</p>
                <p>We redefine your approach - transitioning from paperwork to execution, using live feedback, iterative debugging and testing - all while ensuring business goals are met</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community-driven Team Sections */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src={OziImg} alt="Community event 1" className="rounded-lg shadow-lg w-full h-1/2 object-cover col-span-1 my-auto" />
              <div className="flex flex-col gap-4 col-span-1">
                <img src={JoyImg} alt="Community event 2" className="rounded-lg shadow-lg w-full h-full object-cover" />
                <img src={SoniaImg} alt="Community event 3" className="rounded-lg shadow-lg w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Community-driven Team Sections</h2>
              <p className="text-gray-600 mb-6">
                Dedicated and diverse teams - specializing in marketing, design, development, and management. They provide all-around expertise to deliver the best strategies and implementation for businesses and individuals.
              </p>
              <div className="community-info-box">
                <p>
                  From concept to launch, we collaborate closely with you to understand your goals, adapt to challenges, and drive measurable success. Whether you're scaling a startup, refining a brand, or optimizing workflows, our cross-functional approach guarantees innovation and efficiency at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
