import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-screen gradient-hero relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-300 mb-12">
                Reach out to us via our contact details or fill the short form
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Phone className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Hot-line</p>
                    <p className="text-white font-semibold">+233-823-133-8932</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Mail className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">info.rubiconconsulting@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>

      {/* Schedule Consultation Section */}
      <div className="py-20 bg-gray-200 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Consulting meeting" 
              className="rounded-xl shadow-lg mx-auto"
            />
          </div>
          
          <h2 className="text-4xl font-bold mb-6">Schedule a Consultation with Us</h2>
          <p className="text-gray-600 mb-4">Ask Questions, Discuss Your Project's Needs & Learn How We've Helped</p>
          <p className="text-gray-600 mb-8">Other Businesses Scale Successfully</p>
          
          <Button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2 mx-auto">
            <span>Book a Meeting</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
