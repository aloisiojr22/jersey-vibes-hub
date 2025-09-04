import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data - em um app real, viria do banco de dados
const mockProducts = [
  {
    id: 1,
    name: "Camisa Home 2024",
    team: "Flamengo",
    price: 249.90,
    originalPrice: 299.90,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
    category: "Brasileirão",
    isNew: true,
    isOnSale: true
  },
  {
    id: 2,
    name: "Camisa Away 2024",
    team: "Real Madrid",
    price: 329.90,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=400&fit=crop",
    category: "La Liga",
    isNew: true
  },
  {
    id: 3,
    name: "Camisa Third 2023",
    team: "Barcelona",
    price: 289.90,
    originalPrice: 349.90,
    image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=400&fit=crop",
    category: "La Liga",
    isOnSale: true
  },
  {
    id: 4,
    name: "Camisa Home 2024",
    team: "Manchester United",
    price: 349.90,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    category: "Premier League"
  },
  {
    id: 5,
    name: "Camisa Away 2024",
    team: "Palmeiras",
    price: 229.90,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    category: "Brasileirão",
    isNew: true
  },
  {
    id: 6,
    name: "Camisa Home 2024",
    team: "PSG",
    price: 369.90,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    category: "Ligue 1"
  }
];

const ProductGrid = () => {
  const categories = ["Todos", "Brasileirão", "Premier League", "La Liga", "Ligue 1"];

  const getFilteredProducts = (category: string) => {
    if (category === "Todos") return mockProducts;
    return mockProducts.filter(product => product.category === category);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
            Coleção Exclusiva
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa seleção premium de camisas dos maiores times do mundo
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="Todos" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-card">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getFilteredProducts(category).map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8"
          >
            Carregar Mais Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;