
import React, { useState, useRef, useEffect } from 'react';
import { NavBar } from "@/components/NavBar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Send, Phone, Camera, Image, Smile, Paperclip, MoreVertical } from "lucide-react";
import { ChatContact, ChatMessage } from "@/types/middleman";
import { useNavigate } from 'react-router-dom';

const ChatPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [selectedContact, setSelectedContact] = useState<ChatContact | null>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);
  
  const [contacts, setContacts] = useState<ChatContact[]>([
    {
      id: "1",
      name: "Alex Gwapa",
      avatar: "",
      lastMessage: "Hi!",
      type: "buyer"
    },
    {
      id: "2",
      name: "Jushoua Oswald G. Santos",
      avatar: "",
      lastMessage: "Hi!",
      type: "seller"
    }
  ]);
  
  const [messages, setMessages] = useState<Record<string, ChatMessage[]>>({
    "1": [
      { id: "m1", sender: "Alex Gwapa", senderType: "buyer", content: "Hi!", timestamp: new Date(Date.now() - 3600000) },
    ],
    "2": [
      { id: "m2", sender: "Jushoua Oswald G. Santos", senderType: "seller", content: "Hi!", timestamp: new Date(Date.now() - 7200000) },
    ]
  });

  const middlemanProfile = {
    name: "Jushoua Oswald G. Santos",
    email: "joshwoswald.santos@gmail.com",
    phone: "+639322222222",
    socialHandle: "@Maginooperosioningbastos",
    profession: "Programmer, Developer",
    avatar: "/lovable-uploads/a0248aef-fed3-4b14-b572-2feb6e9ffa76.png"
  };

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedContact, messages]);

  const handleSendMessage = () => {
    if (message.trim() && selectedContact) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        sender: "Me",
        senderType: "middleman",
        content: message,
        timestamp: new Date()
      };

      setMessages(prevMessages => ({
        ...prevMessages,
        [selectedContact.id]: [...(prevMessages[selectedContact.id] || []), newMessage]
      }));
      
      setMessage("");
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const filteredContacts = contacts.filter(contact => {
    // Filter by tab
    if (activeTab !== "all" && contact.type !== activeTab.toLowerCase()) return false;
    
    // Filter by search
    if (searchQuery && !contact.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    
    return true;
  });

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="page-container">
      <NavBar userType="middleman" />
      <main className="flex-1 bg-purple-50">
        <div className="container mx-auto p-0 md:p-4 h-[calc(100vh-8rem)] flex">
          <Card className="w-full h-full overflow-hidden border-2 border-purple-100 shadow-xl flex flex-col md:flex-row">
            {/* Contacts List */}
            <div className="w-full md:w-1/4 border-r border-purple-100 flex flex-col">
              <div className="p-4 border-b border-purple-100 bg-white">
                <h2 className="text-xl font-bold mb-4">Chats</h2>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    className="pl-9" 
                    placeholder="Search or Start new chat" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-3 bg-purple-100">
                    <TabsTrigger value="all" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">All</TabsTrigger>
                    <TabsTrigger value="seller" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">Seller</TabsTrigger>
                    <TabsTrigger value="buyer" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">Buyer</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="flex-1 overflow-y-auto bg-white">
                {filteredContacts.length > 0 ? (
                  filteredContacts.map((contact) => (
                    <div 
                      key={contact.id} 
                      className={`flex items-center p-4 hover:bg-purple-50 cursor-pointer transition-colors border-b border-gray-100 ${selectedContact?.id === contact.id ? 'bg-purple-100' : ''}`}
                      onClick={() => setSelectedContact(contact)}
                    >
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={contact.avatar} />
                        <AvatarFallback className="bg-purple-200 text-purple-700">
                          {contact.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <h3 className="text-sm font-semibold truncate">{contact.name}</h3>
                          <span className="text-xs text-gray-500">
                            {messages[contact.id]?.length > 0 
                              ? formatTime(messages[contact.id][messages[contact.id].length - 1].timestamp) 
                              : ''}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 capitalize">{contact.type}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-gray-500">
                    No contacts found
                  </div>
                )}
              </div>
            </div>

            {/* Chat Window */}
            <div className="flex-1 flex flex-col">
              {selectedContact ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-purple-100 bg-white flex justify-between items-center">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={selectedContact.avatar} />
                        <AvatarFallback className="bg-purple-200 text-purple-700">
                          {selectedContact.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{selectedContact.name}</h3>
                        <p className="text-xs text-gray-500 capitalize">{selectedContact.type}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="icon" variant="ghost">
                        <Phone className="h-5 w-5" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Camera className="h-5 w-5" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <MoreVertical className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 overflow-y-auto p-4 bg-green-50/30">
                    {messages[selectedContact.id]?.map((msg, index) => (
                      <div 
                        key={msg.id} 
                        className={`flex mb-4 ${msg.senderType === 'middleman' ? 'justify-end' : 'justify-start'}`}
                      >
                        {msg.senderType !== 'middleman' && (
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarFallback className="bg-purple-200 text-purple-700">
                              {msg.sender[0].toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div 
                          className={`max-w-[70%] p-3 rounded-2xl ${
                            msg.senderType === 'middleman' 
                              ? 'bg-purple-500 text-white rounded-tr-none' 
                              : 'bg-white rounded-tl-none shadow-sm'
                          }`}
                        >
                          <p className="text-sm">{msg.content}</p>
                          <p className="text-xs mt-1 opacity-70 text-right">
                            {formatTime(msg.timestamp)}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div ref={messageEndRef} />
                  </div>

                  {/* Message Input */}
                  <div className="p-3 border-t border-purple-100 bg-white flex items-center">
                    <Button variant="ghost" size="icon">
                      <Paperclip className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Image className="h-5 w-5" />
                    </Button>
                    <div className="flex-1 mx-2 relative">
                      <Input 
                        className="pr-10 focus-visible:ring-purple-500"
                        placeholder="Type your message..." 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyPress}
                      />
                      <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2">
                        <Smile className="h-5 w-5" />
                      </Button>
                    </div>
                    <Button 
                      className="bg-purple-500 hover:bg-purple-600 transition-colors"
                      size="icon" 
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col md:flex-row">
                  {/* Welcome/Empty state */}
                  <div className="flex-1 flex items-center justify-center bg-purple-50">
                    <div className="text-center p-6">
                      <div className="mb-4 bg-purple-100 p-6 rounded-full inline-block">
                        <Search className="h-12 w-12 text-purple-500" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Select a contact</h3>
                      <p className="text-gray-500 max-w-md">
                        Choose a buyer or seller from the list to start chatting and facilitating transactions
                      </p>
                    </div>
                  </div>
                  
                  {/* Middleman profile */}
                  <div className="w-full md:w-72 border-l border-purple-100 bg-white p-6 flex flex-col items-center">
                    <Avatar className="h-32 w-32 mb-4">
                      <AvatarImage src={middlemanProfile.avatar} />
                      <AvatarFallback className="bg-purple-200 text-purple-700 text-3xl">
                        {middlemanProfile.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-center mb-1">{middlemanProfile.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{middlemanProfile.email}</p>
                    <div className="w-full space-y-3">
                      <div className="bg-green-500 text-white p-3 rounded-md text-center overflow-hidden text-ellipsis">
                        {middlemanProfile.phone}
                      </div>
                      <div className="bg-green-500 text-white p-3 rounded-md text-center overflow-hidden text-ellipsis">
                        {middlemanProfile.socialHandle}
                      </div>
                      <div className="bg-green-500 text-white p-3 rounded-md text-center">
                        {middlemanProfile.profession}
                      </div>
                    </div>
                    <Button variant="outline" className="mt-6 w-full border-purple-300">
                      Edit Profile
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Middleman profile sidebar (when chat is active) */}
            {selectedContact && (
              <div className="hidden lg:block w-72 border-l border-purple-100 bg-white">
                <div className="p-6 flex flex-col items-center">
                  <Avatar className="h-32 w-32 mb-4">
                    <AvatarImage src={middlemanProfile.avatar} />
                    <AvatarFallback className="bg-purple-200 text-purple-700 text-3xl">
                      {middlemanProfile.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold text-center mb-1">{middlemanProfile.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{middlemanProfile.email}</p>
                  <div className="w-full space-y-3">
                    <div className="bg-green-500 text-white p-3 rounded-md text-center overflow-hidden text-ellipsis">
                      {middlemanProfile.phone}
                    </div>
                    <div className="bg-green-500 text-white p-3 rounded-md text-center overflow-hidden text-ellipsis">
                      {middlemanProfile.socialHandle}
                    </div>
                    <div className="bg-green-500 text-white p-3 rounded-md text-center">
                      {middlemanProfile.profession}
                    </div>
                  </div>
                  <div className="mt-6 w-full space-y-3">
                    <Button className="w-full">Transaction Details</Button>
                    <Button variant="outline" className="w-full">Close Transaction</Button>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </main>
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Sellmate. All rights reserved.
      </footer>
    </div>
  );
};

export default ChatPage;
