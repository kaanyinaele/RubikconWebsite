import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from "@/components/HeroSection";
import { Rocket, Users, Settings, Shield, GraduationCap, Gamepad2 } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-screen gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Floating profile images */}
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400 float-animation">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
            alt="Team member" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-40 right-20 w-20 h-20 rounded-full overflow-hidden border-2 border-yellow-400 float-animation" style={{animationDelay: '0.5s'}}>
          <img 
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
            alt="Team member" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-400 float-animation" style={{animationDelay: '1s'}}>
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
            alt="Team member" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-20 right-10 w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-400 float-animation" style={{animationDelay: '1.5s'}}>
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
            alt="Team member" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
                Building
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">WEB3</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Empowering businesses and individuals with scalable Web3 solutions for global impact
            </p>
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold text-lg btn-hover-scale btn-gradient-hover btn-glow-hover">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What we do</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Solve problems and leverage technologies as pioneers in our space using cutting-edge technologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Rocket className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Product Development</h3>
                <p className="text-gray-600 text-sm">Custom blockchain solutions and Web3 applications tailored to your business needs.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Users className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Team Integration</h3>
                <p className="text-gray-600 text-sm">Seamless integration with your existing team and development processes.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Settings className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Consulting Services</h3>
                <p className="text-gray-600 text-sm">Expert guidance on blockchain implementation and Web3 strategy.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Shield className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Smart Contracts</h3>
                <p className="text-gray-600 text-sm">Secure and efficient smart contract development and auditing.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <GraduationCap className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Educational Training</h3>
                <p className="text-gray-600 text-sm">Comprehensive training programs for blockchain and Web3 technologies.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Gamepad2 className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Gaming Solutions</h3>
                <p className="text-gray-600 text-sm">Innovative blockchain gaming platforms and NFT marketplaces.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Partners</h2>
            <p className="text-gray-600">We pride ourselves in making partnerships and among partners</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="font-bold text-lg text-gray-800 tracking-wide">BLOCKCHAIN</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="font-bold text-lg text-gray-800 tracking-wide">COMPANIES</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="font-bold text-lg text-gray-800 tracking-wide">FOUNDATIONS</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="font-bold text-lg text-gray-800 tracking-wide">PROTOCOLS</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-20 bg-gradient-to-br from-yellow-100 to-orange-100 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Blog - Understanding Blockchain</h2>
              <p className="text-gray-600">Read how we want to see more people buy understand blockchain, smart contracts and how they affect emerging markets.</p>
            </div>
            <Button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors btn-hover-scale">
              Read More
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-none overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" alt="Blockchain visualization" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Understanding Blockchain</h3>
                <p className="text-gray-600 text-sm">Learn the fundamentals of blockchain technology and its real-world applications.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" alt="Cryptocurrency concept" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Smart Contracts</h3>
                <p className="text-gray-600 text-sm">Discover how smart contracts are revolutionizing business processes.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" alt="Team discussion" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">DeFi and Your Business</h3>
                <p className="text-gray-600 text-sm">Explore decentralized finance opportunities for your organization.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Projects & Products Section */}
      <div className="py-20 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Projects & Products</h2>
              <p className="text-gray-600 mb-8">
                We have worked for various blockchain technology companies and are enthusiastic about the impact 
                of this technology to change, impact and influence our everyday lives and work.
              </p>
              <Link href="/projects">
                <Button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors btn-hover-scale">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Development workspace" className="rounded-lg" />
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" alt="Team collaboration" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet the Team Leads & Officers</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" alt="Founder" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold">Founder</h3>
              <p className="text-gray-600">Leading innovation in blockchain</p>
            </div>

            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" alt="CTO" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold">CTO</h3>
              <p className="text-gray-600">Technical architecture expert</p>
            </div>

            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" alt="Lead Developer" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold">Lead Developer</h3>
              <p className="text-gray-600">Blockchain solutions architect</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
