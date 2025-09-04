import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  team: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isOnSale?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  team, 
  price, 
  originalPrice, 
  image, 
  category, 
  isNew, 
  isOnSale 
}: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={`${team} ${name}`}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && <Badge className="bg-neon-blue text-white">Novo</Badge>}
            {isOnSale && <Badge className="bg-accent">Oferta</Badge>}
          </div>

          {/* Favorite Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`absolute top-3 right-3 rounded-full w-10 h-10 transition-all duration-300 ${
              isLiked ? 'bg-accent/90 text-accent-foreground' : 'bg-background/80 hover:bg-background'
            }`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart 
              className={`h-4 w-4 transition-all duration-300 ${
                isLiked ? 'fill-current text-red-500' : ''
              }`} 
            />
          </Button>

          {/* Add to Cart Overlay */}
          <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4 transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}>
            <Button 
              className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-neon transition-all duration-300"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="text-sm text-primary font-medium mb-1">{team}</div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {name}
          </h3>
          
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">
                R$ {price.toFixed(2)}
              </span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  R$ {originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;