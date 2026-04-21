export type UserRole = 'customer' | 'vendor' | 'admin';

export interface UserProfile {
  userId: string;
  name: string;
  email?: string;
  phone?: string;
  role: UserRole;
  walletBalance: number;
  profilePic?: string;
  createdAt: string;
  address?: string;
  isVerified?: boolean;
}

export interface VendorProfile {
  vendorId: string;
  storeName: string;
  storeBanner?: string;
  storeLogo?: string;
  description?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactPerson?: string;
  storeAddress?: string;
  verified: boolean;
  verificationStatus?: 'none' | 'pending' | 'verified' | 'rejected';
  rejectionReason?: string;
  totalSales: number;
  rating: number;
  tradeLicense?: string;
  tradeLicenseImg?: string;
  nidCard?: string;
  nidCardImg?: string;
  tinCertificate?: string;
  tinCertificateImg?: string;
  bankAccount?: {
    accountName: string;
    accountNumber: string;
    bankName: string;
    branchName: string;
    routingNumber?: string;
  };
  mfs?: {
    bkash?: string;
    nagad?: string;
  };
  joinedAt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subCategory: string;
  images: string[];
  image?: string;
  rating?: number;
  stock: number;
  unit: string;
  vendorId: string;
  approved: boolean;
  createdAt: string;
  isFlashSale?: boolean;
  discountPrice?: number;
  video?: string;
}

export interface Order {
  id: string;
  customerId: string;
  vendorId: string;
  items: CartItem[];
  totalAmount: number;
  adminCommission: number;
  vendorEarning: number;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'unpaid' | 'paid';
  trackingNumber?: string;
  carrier?: string;
  qrCodeData?: string;
  createdAt: string;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  weight?: number;
}

export interface WalletTransaction {
  id: string;
  userId: string;
  amount: number;
  type: 'recharge' | 'payment' | 'earning' | 'withdrawal';
  status: 'pending' | 'completed' | 'failed';
  timestamp: string;
}

export interface Coupon {
  id: string;
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
  active: boolean;
  createdAt: string;
}

export interface UserNotification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'order' | 'system' | 'wallet' | 'vendor';
  read: boolean;
  createdAt: string;
  link?: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: any;
  productId?: string;
  read: boolean;
}

export interface Chat {
  id: string;
  participants: string[];
  lastMessage?: string;
  lastMessageTime?: any;
  vendorId: string;
  customerId: string;
  vendorName?: string;
  customerName?: string;
  unreadCountVendor?: number;
  unreadCountCustomer?: number;
  lastSenderId?: string;
}
