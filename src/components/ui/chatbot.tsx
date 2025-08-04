import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Welcome to Mafi Restaurant. I am here to assist you with menu inquiries, reservation information, and general questions. How may I help you today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Bot response logic
    setTimeout(() => {
      let botResponse = '';
      const lowerInput = inputText.toLowerCase();

      if (lowerInput.includes('who developed') || lowerInput.includes('developer')) {
        botResponse = 'The developers of this website are Abenezer Ketema (Frontend Developer) and Robel Assefa (Backend Developer).';
      } else if (lowerInput.includes('menu') || lowerInput.includes('food') || lowerInput.includes('dish')) {
        botResponse = 'We specialize in traditional meals featuring the finest ingredients and authentic flavors. Our signature dishes include Mixed Grill, Roast Chicken, Fish & Chips, and more. Please explore our menu section for the complete selection.';
      } else if (lowerInput.includes('location') || lowerInput.includes('where') || lowerInput.includes('address')) {
        botResponse = 'You can find our exact location by clicking the "View on Map" button in our footer section, which will open our location in Google Maps.';
      } else if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('email')) {
        botResponse = 'For inquiries, please contact us at +1 (555) 123-4567 or email us at info@mafirestaurant.com. Our team is ready to assist you.';
      } else if (lowerInput.includes('hours') || lowerInput.includes('open') || lowerInput.includes('time')) {
        botResponse = 'For our current operating hours and availability, please contact us directly at +1 (555) 123-4567. We would be happy to assist you.';
      } else if (lowerInput.includes('meeting') || lowerInput.includes('hall') || lowerInput.includes('event') || lowerInput.includes('conference')) {
        botResponse = 'Our meeting hall accommodates up to 50 people and features state-of-the-art facilities for corporate events and conferences. Please use our booking form in the Meeting Hall section to make a reservation.';
      } else if (lowerInput.includes('reservation') || lowerInput.includes('book') || lowerInput.includes('table')) {
        botResponse = 'For dining reservations, please contact us directly at +1 (555) 123-4567. For meeting hall bookings, please use the booking form in our Meeting Hall section.';
      } else {
        botResponse = 'Thank you for your inquiry. For detailed information about our services, menu, or reservations, please contact us at +1 (555) 123-4567 or refer to the relevant sections on our website.';
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat Window */}
      <div className={`absolute bottom-16 right-0 transition-all duration-300 ease-out ${isOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible translate-y-4 scale-95 pointer-events-none'}`}>
        <Card className="w-96 h-[500px] elegant-card overflow-hidden shadow-2xl border-primary/20 bg-background/95 backdrop-blur-lg">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-4 border-b border-border/10 bg-gradient-to-r from-primary/10 to-primary/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-elegant font-semibold text-foreground">Restaurant Assistant</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0 hover:bg-primary/10 rounded-full"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-background/50 to-background/80">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[280px] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground rounded-br-md'
                        : 'bg-secondary/80 text-secondary-foreground rounded-bl-md border border-border/20'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/10 bg-background/90">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about our restaurant..."
                  className="flex-1 px-4 py-3 bg-input/50 border border-border/20 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="gold-button h-12 w-12 rounded-full p-0 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="gold-button h-16 w-16 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>
    </div>
  );
};

export default Chatbot;