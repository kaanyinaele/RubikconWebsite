import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-2 px-4 text-center text-sm">
        We have a collection of Games available -{" "}
        <a href="#" className="underline font-semibold hover:text-gray-800 transition-colors">
          Visit our Game Shop
        </a>
      </div>
      
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
