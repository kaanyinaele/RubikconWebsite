interface HeroSectionProps {
  title: string;
  subtitle: string;
  showFloatingImages?: boolean;
}

export function HeroSection({ title, subtitle, showFloatingImages = false }: HeroSectionProps) {
  return (
    <div className="min-h-screen gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/50"></div>
      
      {showFloatingImages && (
        <>
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
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {showFloatingImages && (
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
                Building
              </span>
            </div>
          )}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
