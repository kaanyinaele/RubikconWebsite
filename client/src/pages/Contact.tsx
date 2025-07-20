import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, ArrowRight } from "lucide-react";
import hero3 from '@/assets/images/hero-3.jpg';
import { BookMeetingModal } from "@/components/BookMeetingModal";

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero-section bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg text-gray-400">
                  Reach out to us via our contact details or fill the short form
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-800 rounded-full">
                    <Phone className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Hot-line</p>
                    <p className="font-semibold">+233-823-133-8932</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-800 rounded-full">
                    <Mail className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="font-semibold">info.rubiconconsulting@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Consultation Section */}
      <div 
        className="consultation-section text-center py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url(${hero3})` }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">Schedule a Consultation with Us</h2>
          <p className="text-gray-800 text-lg mb-2">
            Ask Questions, Discuss Your Project's Needs & Learn How We've Helped
          </p>
          <p className="text-gray-800 text-lg mb-8">
            Other Businesses Scale Successfully
          </p>
        <BookMeetingModal />
        </div>
      </div>
    </div>
  );
}
