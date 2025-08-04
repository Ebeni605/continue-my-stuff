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
      text: 'Hello! Welcome to our restaurant. How can I help you today?',
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
        botResponse = 'We serve signature burgers, artisan pizzas, and traditional meals. You can view our full menu section above!';
      } else if (lowerInput.includes('location') || lowerInput.includes('where') || lowerInput.includes('address')) {
        botResponse = 'You can find our location by clicking the "View on Map" button in the location section above!';
      } else if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('email')) {
        botResponse = 'You can find our contact information in the contact section at the bottom of the page.';
      } else if (lowerInput.includes('hours') || lowerInput.includes('open') || lowerInput.includes('time')) {
        botResponse = 'For our current hours of operation, please contact us directly or visit our location section.';
      } else {
        botResponse = 'Thank you for your question! For specific inquiries about our menu or reservations, please check our menu section or contact us directly.';
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
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      <div className={`transition-all duration-300 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}`}>
        <Card className="w-80 h-96 mb-4 elegant-card overflow-hidden">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-4 border-b border-border/20 bg-primary/10">
              <div className="flex items-center justify-between">
                <h3 className="font-elegant font-semibold text-foreground">Restaurant Assistant</h3>
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
                  placeholder="Type your message..."
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