import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Phone, Mail, ExternalLink, Users, Calendar } from 'lucide-react';
import MenuCarousel from '@/components/ui/menu-carousel';
import Chatbot from '@/components/ui/chatbot';
import BookingForm from '@/components/ui/booking-form';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

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
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/7a8952e4-a27a-4e0e-bd3a-e43bf7afab8e.png" 
                  alt="Mafi Restaurant Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="ml-3 text-2xl font-elegant font-bold text-foreground">Mafi Restaurant</span>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center lg:justify-end gap-6 lg:gap-8">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Menu', id: 'menu' },
                { label: 'About', id: 'about' },
                { label: 'Meeting Hall', id: 'meeting' },
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
            onClick={() => scrollToSection('menu')}
            className="gold-button text-lg px-8 py-3 h-auto"
          >
            Explore Our Menu
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

          <Tabs defaultValue="traditional" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-secondary">
              <TabsTrigger value="traditional" className="text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Traditional Meals
              </TabsTrigger>
              <TabsTrigger value="burgers" className="text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Burgers
              </TabsTrigger>
              <TabsTrigger value="pizzas" className="text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Pizzas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="traditional" className="mt-8">
              <MenuCarousel category="Traditional Meals" />
            </TabsContent>

            <TabsContent value="burgers" className="mt-8">
              <MenuCarousel category="Burgers" />
            </TabsContent>

            <TabsContent value="pizzas" className="mt-8">
              <MenuCarousel category="Pizzas" />
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
            <Card className="elegant-card p-8 md:p-12">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                At our restaurant, we believe that dining is more than just a meal—it's an experience that engages all your senses. 
                Our vision is to create an elegant atmosphere where culinary artistry meets exceptional service, offering our guests 
                a sophisticated dining experience that celebrates the finest flavors and ingredients. From our carefully curated menu 
                to our warm, inviting ambiance, every detail is designed to elevate your dining experience and create lasting memories.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Meeting Hall Section */}
      <section id="meeting" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-elegant font-bold text-foreground mb-8">
                Meeting Hall
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Professional meeting spaces for corporate events, conferences, and special occasions
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/lovable-uploads/4c789a5d-da1e-48a0-a78a-32757f79049d.png" 
                  alt="Meeting Hall" 
                  className="w-full h-80 object-cover rounded-lg shadow-elegant"
                />
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-elegant font-semibold text-foreground">
                  State-of-the-Art Conference Facilities
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Our elegant meeting hall offers a sophisticated environment for your corporate events, 
                  conferences, training sessions, and special gatherings. Equipped with modern technology 
                  and professional amenities to ensure your event's success.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-foreground/70">
                    <Users className="w-5 h-5 text-primary mr-3" />
                    <span>Up to 50 people</span>
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <Calendar className="w-5 h-5 text-primary mr-3" />
                    <span>Flexible scheduling</span>
                  </div>
                </div>
                
                <Button
                  onClick={() => setIsBookingOpen(true)}
                  className="gold-button text-lg px-8 py-3 h-auto"
                >
                  Book Meeting Hall
                </Button>
              </div>
            </div>
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
                <p className="text-foreground/70">info@mafirestaurant.com</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="bg-background border-t border-border/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              
              {/* Restaurant Info */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <img 
                    src="/lovable-uploads/7a8952e4-a27a-4e0e-bd3a-e43bf7afab8e.png" 
                    alt="Mafi Restaurant Logo" 
                    className="w-10 h-10 object-contain"
                  />
                  <span className="ml-3 text-xl font-elegant font-bold text-foreground">Mafi Restaurant</span>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Experience culinary excellence in every bite. Where tradition meets innovation.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-elegant font-semibold text-foreground">Quick Links</h4>
                <div className="space-y-2">
                  {[
                    { label: 'Home', id: 'home' },
                    { label: 'Menu', id: 'menu' },
                    { label: 'About', id: 'about' },
                    { label: 'Meeting Hall', id: 'meeting' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block text-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-elegant font-semibold text-foreground">Contact</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-foreground/70 text-sm">
                    <Phone className="w-4 h-4 text-primary mr-2" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-foreground/70 text-sm">
                    <Mail className="w-4 h-4 text-primary mr-2" />
                    <span>info@mafirestaurant.com</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-4">
                <h4 className="text-lg font-elegant font-semibold text-foreground">Location</h4>
                <Button
                  onClick={openGoogleMaps}
                  className="gold-button w-full"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  View on Map
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-border/20 pt-8 mt-12">
              <div className="flex flex-col md:flex-row items-center justify-between text-sm text-foreground/60">
                <p>&copy; 2024 Mafi Restaurant. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Designed with excellence in mind</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
      
      {/* Booking Form Modal */}
      <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default Index;
