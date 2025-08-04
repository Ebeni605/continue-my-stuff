import React from 'react';
import { Card } from './card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';

interface MenuItem {
  id: string;
  name: string;
  image: string;
  category: 'Burgers' | 'Pizzas' | 'Traditional Meals';
}

const menuItems: MenuItem[] = [
  // Traditional Meals
  { id: '1', name: 'Mixed Grill', image: '/lovable-uploads/8298cb13-fa4a-43f4-bfc2-ee0ac6907125.png', category: 'Traditional Meals' },
  { id: '2', name: 'Roast Chicken', image: '/lovable-uploads/e0b7f5e9-32be-430f-8ff3-a06b71129f47.png', category: 'Traditional Meals' },
  { id: '3', name: 'Beef or Chicken Fajita', image: '/lovable-uploads/e370ea4a-cb84-4b3e-a428-02ebb6700983.png', category: 'Traditional Meals' },
  { id: '4', name: 'Fish & Chips', image: '/lovable-uploads/7e88ceba-40a5-4d3a-92f7-fec6d7b3320e.png', category: 'Traditional Meals' },
  { id: '5', name: 'Fish Cutlet', image: '/lovable-uploads/898ebc18-f7eb-42df-b1e9-c554484997d8.png', category: 'Traditional Meals' },
  { id: '6', name: 'Tournedos of Beef', image: '/lovable-uploads/f73a3243-e64f-4df6-b0af-437572bbbc75.png', category: 'Traditional Meals' },
  { id: '7', name: 'Grilled Fish', image: '/lovable-uploads/33afee02-333b-403d-8e16-2010d0d41649.png', category: 'Traditional Meals' },
  { id: '8', name: 'Stuffed Chicken Breast', image: '/lovable-uploads/5790e55a-1875-4fcb-a69a-6632b61c1841.png', category: 'Traditional Meals' },
  
  // Burgers
  { id: '9', name: 'Signature Wagyu Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop', category: 'Burgers' },
  { id: '10', name: 'Truffle Mushroom Burger', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop', category: 'Burgers' },
  { id: '11', name: 'Gourmet Chicken Burger', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop', category: 'Burgers' },
  
  // Pizzas
  { id: '12', name: 'Artisan Margherita', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop', category: 'Pizzas' },
  { id: '13', name: 'Truffle & Prosciutto', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop', category: 'Pizzas' },
  { id: '14', name: 'Mediterranean Delight', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop', category: 'Pizzas' },
];

interface MenuCarouselProps {
  category: 'Burgers' | 'Pizzas' | 'Traditional Meals';
}

const MenuCarousel: React.FC<MenuCarouselProps> = ({ category }) => {
  const categoryItems = menuItems.filter(item => item.category === category);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {categoryItems.map((item) => (
            <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <Card className="elegant-card overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-elegant font-semibold text-lg lg:text-xl leading-tight">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-6 bg-primary/20 border-primary/30 hover:bg-primary/30" />
        <CarouselNext className="hidden sm:flex -right-6 bg-primary/20 border-primary/30 hover:bg-primary/30" />
      </Carousel>
    </div>
  );
};

export default MenuCarousel;