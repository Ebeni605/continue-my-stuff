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
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
      {/* Chat Window */}
      <div className={`transition-all duration-500 ease-out ${isOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible translate-y-8 scale-95'}`}>
        <Card className="w-80 h-96 mb-4 elegant-card overflow-hidden shadow-2xl border-primary/20">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-4 border-b border-border/20 bg-primary/10">
              <div className="flex items-center justify-between">
                <h3 className="font-elegant font-semibold text-foreground">Mafi Restaurant Assistant</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0 hover:bg-primary/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message here..."
                  className="flex-1 px-3 py-2 bg-input border border-border/20 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="gold-button h-10 w-10 p-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Floating Button - Fixed Position */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="gold-button h-14 w-14 rounded-full shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Chatbot;