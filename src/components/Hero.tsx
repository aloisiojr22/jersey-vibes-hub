import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jerseys.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-electric bg-clip-text text-transparent animate-neon-pulse">
          ALCA STORE
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          As melhores camisas dos seus times favoritos. 
          <span className="text-primary font-semibold"> Qualidade premium</span> e 
          <span className="text-accent font-semibold"> estilo autêntico</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:shadow-neon transition-all duration-300 text-lg px-8 py-6 animate-float"
          >
            Ver Coleção
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
          >
            Ofertas do Dia
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-neon-blue">500+</div>
            <div className="text-sm text-muted-foreground">Modelos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-neon-cyan">50+</div>
            <div className="text-sm text-muted-foreground">Times</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-neon-electric">24h</div>
            <div className="text-sm text-muted-foreground">Entrega</div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-neon-blue/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-neon-cyan/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;