import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mb-4">
              ⚽ Jersey Store
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              A maior loja de camisas de futebol do Brasil. Produtos oficiais dos seus times favoritos com qualidade garantida.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Brasileirão</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Premier League</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">La Liga</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Champions League</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Jersey Store. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;