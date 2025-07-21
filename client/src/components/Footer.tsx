import { Link } from "wouter";
import logo from "@/assets/images/logo.png";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
            <img src={logo} alt="Logo" className="w-12 h-12" />
            <span className="text-xl font-bold">Rubik<span className="text-yellow-400">con</span></span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses and individuals with scalable Web3 solutions for global impact
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick links</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p><Link href="/contact" className="hover:text-white transition-colors">Book a Meeting</Link></p>
              <p><a href="https://discord.gg/CAaEHuf3" className="hover:text-white transition-colors" target="_blank">Join Community</a></p>
              <p><a href="#" className="hover:text-white transition-colors">Game shop</a></p>
              <p><a href="#" className="hover:text-white transition-colors">Blog Site</a></p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Socials</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p><a href="https://x.com/Rubiconconsult" className="hover:text-white transition-colors" target="_blank">Twitter/X</a></p>
              <p><a href="https://www.instagram.com/rubikconnexus" className="hover:text-white transition-colors" target="_blank">Instagram</a></p>
              <p><a href="https://www.linkedin.com/company/rubicon-consults/posts/?feedView=all" className="hover:text-white transition-colors" target="_blank">LinkedIn</a></p>
              <p><a href="https://discord.gg/CAaEHuf3" className="hover:text-white transition-colors" target="_blank">Discord</a></p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacts</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Hot-line:</p>
              <p>+233-823-133-8932</p>
              <p className="mt-4">Email:</p>
              <p>info.rubiconconsulting@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy;Copyright 2025 RubikonNexus. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
