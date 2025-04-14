
export interface Middleman {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  expertise: string[];
  description: string;
  transactions: number;
  successRate: string;
  email?: string;
  phone?: string;
  socialHandle?: string;
  profession?: string;
  isAvailable?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: string;
  senderType: 'buyer' | 'seller' | 'middleman';
  content: string;
  timestamp: Date;
}

export interface ChatContact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  type: 'buyer' | 'seller' | 'middleman';
}
