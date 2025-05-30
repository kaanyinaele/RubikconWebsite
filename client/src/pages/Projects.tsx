import { HeroSection } from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Projects() {
  return (
    <div>
      <HeroSection 
        title="Projects"
        subtitle="Explore who we are and what we represent at Rubikcon"
      />

      {/* Solo Trainings Section */}
      <div className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Training session" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            
            <div>
              <div className="mb-4">
                <span className="text-blue-600 font-semibold">SKILL DEVELOPMENT</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Solo Trainings & Community Outreach</h2>
              <p className="text-gray-600 mb-6">
                These are opportunities we offer to bring our community to have in-school, events and grow together. We bridge the 
                gap for our community in how to onboard and train enterprise-level professionals.
              </p>
              <p className="text-gray-600 mb-8">
                We have regular Web3 Sessions with Guru in-house team and industry 
                leaders who stanced blockchain challenges using the strategies of 
                world-class labs and entrepreneurs and will personal strategy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partnerships Training Section */}
      <div className="py-20 bg-yellow-50 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
              Commitment with WIN-WIN Partnership
            </span>
          </div>

          <h2 className="text-4xl font-bold mb-12">Partnerships Training & Development</h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <p className="text-gray-600 mb-6">
                We deliver organized blockchain education with partners like TechSub 
                and FinTech communities, to establish expertise-LIVE strategy plus 
                empowerment program, like provided ARM Accountability challenge and 
                our financial discussions/impact.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Tech education" className="rounded-lg" />
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Workshop" className="rounded-lg" />
              <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Conference" className="rounded-lg" />
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Professional development" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Sponsorships Section */}
      <div className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Conference event" className="rounded-lg" />
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Tech meetup" className="rounded-lg" />
            </div>
            
            <div>
              <div className="mb-4">
                <span className="text-pink-600 font-semibold">Sponsorships - Devcon Highlights</span>
              </div>
              <p className="text-gray-600 mb-6">
                Discover in Year Devening throughout together seeking Blockchain talents in Africa. 
                Inspiring and enhances the sharing great value from hosting the blockchain 
                Team. Our event featured several speakers, including one Co-founder, Opinions 
                who discussed Devcon3 hybrid in the global event ecosystem.
              </p>
              <p className="text-gray-600 mb-8">
                Highlights from the gathering feature-tech of blockchain community, new 
                ecosystems, white talents becomes, guided interviews on moving away quick 
                forward alongside other inspiring tech professionals connecting their career and 
                impact alongside other creating business goals and team.
              </p>
              <Button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                MORE PROJECT LINKS
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gray-200 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Want to Onboard Talents or Launch your Project?</h2>
          <p className="text-gray-600 mb-8">
            We handle recruitment, training, compliance, and community growth with 
            achievable & events. Let's turn your vision to reality.
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
