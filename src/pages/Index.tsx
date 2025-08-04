import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import MenuCarousel from '@/components/ui/menu-carousel';
import Chatbot from '@/components/ui/chatbot';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=restaurant+location', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-elegant font-bold text-xl">R</span>
              </div>
              <span className="ml-3 text-2xl font-elegant font-bold text-foreground">Restaurant</span>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center lg:justify-end gap-6 lg:gap-8">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Menu', id: 'menu' },
                { label: 'About', id: 'about' },
                { label: 'Location', id: 'location' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop')`
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 hero-gradient" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-elegant font-bold text-foreground mb-6 animate-fade-in">
            Elevate Your Taste
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Experience culinary excellence in every bite
          </p>
          <Button
            onClick={openGoogleMaps}
            className="gold-button text-lg px-8 py-3 h-auto"
          >
            <MapPin className="mr-2 h-5 w-5" />
            View Location
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-elegant font-bold text-foreground mb-4">
              Our Signature Dishes
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Discover our carefully crafted menu featuring the finest ingredients and exceptional flavors
            </p>
          </div>

          <Tabs defaultValue="burgers" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-secondary">
              <TabsTrigger value="burgers" className="text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Burgers
              </TabsTrigger>
              <TabsTrigger value="pizzas" className="text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Pizzas
              </TabsTrigger>
              <TabsTrigger value="traditional" className="text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Traditional Meals
              </TabsTrigger>
            </TabsList>

            <TabsContent value="burgers" className="mt-8">
              <MenuCarousel category="Burgers" />
            </TabsContent>

            <TabsContent value="pizzas" className="mt-8">
              <MenuCarousel category="Pizzas" />
            </TabsContent>

            <TabsContent value="traditional" className="mt-8">
              <MenuCarousel category="Traditional Meals" />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-elegant font-bold text-foreground mb-8">
              About Our Restaurant
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              At our restaurant, we believe that dining is more than just a meal—it's an experience that engages all your senses. 
              Our vision is to create an elegant atmosphere where culinary artistry meets exceptional service, offering our guests 
              a sophisticated dining experience that celebrates the finest flavors and ingredients. From our carefully curated menu 
              to our warm, inviting ambiance, every detail is designed to elevate your dining experience and create lasting memories.
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-elegant font-bold text-foreground mb-8">
              Visit Us
            </h2>
            <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
              Find us in the heart of the city and experience exceptional dining
            </p>
            <Button
              onClick={openGoogleMaps}
              className="gold-button text-lg px-8 py-3 h-auto"
            >
              <MapPin className="mr-2 h-5 w-5" />
              View on Map
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-elegant font-bold text-foreground mb-12">
              Contact Us
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="elegant-card p-8">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-elegant font-semibold mb-2">Phone</h3>
                <p className="text-foreground/70">+1 (555) 123-4567</p>
              </Card>
              
              <Card className="elegant-card p-8">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-elegant font-semibold mb-2">Email</h3>
                <p className="text-foreground/70">info@restaurant.com</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Index;
