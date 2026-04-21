import { 
  Beef, Fish, Cherry, Utensils, Sparkles, Package, ShoppingBag, Zap,
  Coffee, Tv, Shirt, Dumbbell, Baby, Stethoscope, Armchair, Monitor, Smartphone, Camera, 
  Watch, Headphones, Speaker, Refrigerator, WashingMachine, Fan, Mic, Tablet,
  Footprints, HeartPulse, Pill, Home, Layout, Brush
} from 'lucide-react';

export const CATEGORIES = [
  { 
    id: 'grocery', 
    name: 'কাঁচাবাজার ও নিত্যপণ্য', 
    icon: Utensils, 
    color: 'bg-amber-50 text-amber-600', 
    sub: 'মাছ ও মাংস, ফল ও সবজি, ডেইরি ও ডিম, রান্নার সরঞ্জাম, পানীয়, স্ন্যাকস ও বেকারী' 
  },
  { 
    id: 'electronics', 
    name: 'ইলেকট্রনিক্স ও গ্যাজেট', 
    icon: Smartphone, 
    color: 'bg-indigo-50 text-indigo-600', 
    sub: 'স্মার্টফোন ও ট্যাব, কম্পিউটার ও ল্যাপটপ, গ্যাজেট, ক্যামেরা ও সিকিউরিটি' 
  },
  { 
    id: 'home_appliances', 
    name: 'হোম অ্যাপ্লায়েন্স', 
    icon: Tv, 
    color: 'bg-blue-50 text-blue-600', 
    sub: 'রান্নাঘরের সরঞ্জাম, গৃহস্থালি পণ্য' 
  },
  { 
    id: 'fashion', 
    name: 'ফ্যাশন ও লাইফস্টাইল', 
    icon: Shirt, 
    color: 'bg-violet-50 text-violet-600', 
    sub: 'নারী ফ্যাশন, পুরুষ ফ্যাশন, জুতা, এক্সেসরিজ' 
  },
  { 
    id: 'beauty', 
    name: 'প্রসাধনী ও পার্সোনাল কেয়ার', 
    icon: Sparkles, 
    color: 'bg-pink-50 text-pink-600', 
    sub: 'স্কিন কেয়ার, হেয়ার কেয়ার, মেকআপ, সুগন্ধি' 
  },
  { 
    id: 'sports', 
    name: 'খেলাধুলা ও ফিটনেস', 
    icon: Dumbbell, 
    color: 'bg-orange-50 text-orange-600', 
    sub: 'ক্রিকেট ও ফুটবল, জিম ও ফিটনেস, ইনডোর গেমস' 
  },
  { 
    id: 'baby', 
    name: 'মা ও শিশু', 
    icon: Baby, 
    color: 'bg-cyan-50 text-cyan-600', 
    sub: 'শিশুর যত্ন, পোশাক ও খেলনা' 
  },
  { 
    id: 'pharmacy', 
    name: 'ওষুধ ও স্বাস্থ্য সুরক্ষা', 
    icon: Pill, 
    color: 'bg-emerald-50 text-emerald-600', 
    sub: 'ওষুধ, স্বাস্থ্য সরঞ্জাম' 
  },
  { 
    id: 'home_decor', 
    name: 'ঘর সাজানোর সামগ্রী', 
    icon: Armchair, 
    color: 'bg-rose-50 text-rose-600', 
    sub: 'ফার্নিচার, বেডিং' 
  },
  { 
    id: 'auto_accessories', 
    name: 'কার/বাইক এক্সেসরিজ', 
    icon: Footprints, 
    color: 'bg-slate-100 text-slate-700', 
    sub: 'বাইক এক্সেসরিজ, গাড়ির যত্ন, মেকানিক্যাল, টায়ার, লাইটিং, ইলেকট্রনিক্স' 
  },
  { 
    id: 'wholesale', 
    name: 'হোলসেল বাজার', 
    icon: Layout, 
    color: 'bg-green-100 text-green-700', 
    sub: 'পাইকারি দরে সব পণ্য' 
  },
];

export const MOCK_VENDORS = [
  {
    vendorId: 'v1',
    storeName: 'সতেজ কাঁচাবাজার',
    storeLogo: 'https://picsum.photos/seed/store1/200/200',
    verified: true,
    totalSales: 1540,
    rating: 4.9,
    joinedAt: new Date().toISOString()
  },
  {
    vendorId: 'v2',
    storeName: 'গ্যাজেট ফেস্ট',
    storeLogo: 'https://picsum.photos/seed/store2/200/200',
    verified: true,
    totalSales: 890,
    rating: 4.8,
    joinedAt: new Date().toISOString()
  },
  {
    vendorId: 'v3',
    storeName: 'ফ্যাশন পয়েন্ট',
    storeLogo: 'https://picsum.photos/seed/store3/200/200',
    verified: true,
    totalSales: 1200,
    rating: 4.7,
    joinedAt: new Date().toISOString()
  },
  {
    vendorId: 'v4',
    storeName: 'মডার্ন হোম',
    storeLogo: 'https://picsum.photos/seed/store4/200/200',
    verified: true,
    totalSales: 450,
    rating: 4.6,
    joinedAt: new Date().toISOString()
  },
  {
    vendorId: 'v5',
    storeName: 'হেলথ কেয়ার ফার্মেসি',
    storeLogo: 'https://picsum.photos/seed/store5/200/200',
    verified: true,
    totalSales: 2100,
    rating: 4.9,
    joinedAt: new Date().toISOString()
  }
];

export const MOCK_PRODUCTS = [
  { 
    id: '1', 
    name: 'দেশি শোল মাছ', 
    category: 'grocery', 
    subCategory: 'মাছ ও মাংস',
    price: 850, 
    stock: 10, 
    unit: 'Kg', 
    rating: 4.8, 
    vendorId: 'v1',
    image: 'https://picsum.photos/seed/fish1/800/800',
    images: [
      'https://picsum.photos/seed/fish1/800/800',
      'https://picsum.photos/seed/fish2/800/800',
      'https://picsum.photos/seed/fish3/800/800'
    ]
  },
  { 
    id: '2', 
    name: 'ব্রয়লার মুরগি', 
    category: 'grocery', 
    subCategory: 'মাছ ও মাংস',
    price: 190, 
    stock: 50, 
    unit: 'Kg', 
    rating: 4.5, 
    vendorId: 'v1',
    image: 'https://picsum.photos/seed/chicken1/800/800',
    images: [
      'https://picsum.photos/seed/chicken1/800/800',
      'https://picsum.photos/seed/chicken2/800/800'
    ]
  },
  { 
    id: '3', 
    name: 'গরুর মাংস (প্রিমিয়াম)', 
    category: 'grocery', 
    subCategory: 'মাছ ও মাংস',
    price: 780, 
    stock: 20, 
    unit: 'Kg', 
    rating: 4.9, 
    vendorId: 'v2',
    image: 'https://picsum.photos/seed/beef1/800/800',
    images: [
      'https://picsum.photos/seed/beef1/800/800',
      'https://picsum.photos/seed/beef2/800/800',
      'https://picsum.photos/seed/beef3/800/800',
      'https://picsum.photos/seed/beef4/800/800'
    ]
  },
  { 
    id: '4', 
    name: 'মিনিকেট চাল (৫০ কেজি)', 
    category: 'grocery', 
    subCategory: 'রান্নার সরঞ্জাম',
    price: 3400, 
    stock: 100, 
    unit: 'Bag', 
    rating: 4.7, 
    vendorId: 'v3',
    image: 'https://picsum.photos/seed/rice1/800/800',
    images: [
      'https://picsum.photos/seed/rice1/800/800',
      'https://picsum.photos/seed/rice2/800/800'
    ]
  },
  { 
    id: '5', 
    name: 'লাক্স বিউটি সোপ', 
    category: 'beauty', 
    subCategory: 'স্কিন কেয়ার',
    price: 65, 
    stock: 200, 
    unit: 'Piece', 
    rating: 4.6, 
    image: 'https://picsum.photos/seed/soap1/800/800',
    images: [
      'https://picsum.photos/seed/soap1/800/800',
      'https://picsum.photos/seed/soap2/800/800'
    ]
  },
  { 
    id: '6', 
    name: 'নিভিয়া ময়েশ্চারাইজার', 
    category: 'beauty', 
    subCategory: 'স্কিন কেয়ার',
    price: 450, 
    stock: 45, 
    unit: 'Pack', 
    rating: 4.8, 
    image: 'https://picsum.photos/seed/cream1/800/800',
    images: [
      'https://picsum.photos/seed/cream1/800/800',
      'https://picsum.photos/seed/cream2/800/800'
    ]
  },
  { 
    id: '7', 
    name: 'তাজা লাল শাক', 
    category: 'grocery', 
    subCategory: 'ফল ও সবজি',
    price: 25, 
    stock: 15, 
    unit: 'Bundle', 
    rating: 4.9, 
    image: 'https://picsum.photos/seed/veg1/800/800',
    images: [
      'https://picsum.photos/seed/veg1/800/800',
      'https://picsum.photos/seed/veg2/800/800'
    ]
  },
  { 
    id: '8', 
    name: 'স্মার্ট ওয়াচ S8', 
    category: 'electronics', 
    subCategory: 'গ্যাজেট',
    price: 2500, 
    stock: 30, 
    unit: 'Pcs', 
    rating: 4.7, 
    image: 'https://picsum.photos/seed/watch1/800/800',
    images: [
      'https://picsum.photos/seed/watch1/800/800',
      'https://picsum.photos/seed/watch2/800/800',
      'https://picsum.photos/seed/watch3/800/800'
    ]
  },
  { 
    id: '9', 
    name: 'প্রিমিয়াম পাঞ্জাবী', 
    category: 'fashion', 
    subCategory: 'পুরুষ ফ্যাশন',
    price: 1850, 
    stock: 25, 
    unit: 'Pcs', 
    rating: 4.6, 
    image: 'https://picsum.photos/seed/panjabi1/800/800',
    images: [
      'https://picsum.photos/seed/panjabi1/800/800',
      'https://picsum.photos/seed/panjabi2/800/800'
    ]
  },
  { 
    id: '10', 
    name: 'iPhone 15 Pro', 
    category: 'electronics', 
    subCategory: 'স্মার্টফোন ও ট্যাব',
    price: 145000, 
    stock: 5, 
    unit: 'Pcs', 
    rating: 4.9, 
    image: 'https://picsum.photos/seed/iphone15/800/800',
    images: ['https://picsum.photos/seed/iphone15/800/800']
  },
  { 
    id: '11', 
    name: 'Samsung 4K TV 55"', 
    category: 'home_appliances', 
    subCategory: 'গৃহস্থালি পণ্য',
    price: 65000, 
    stock: 8, 
    unit: 'Pcs', 
    rating: 4.7, 
    image: 'https://picsum.photos/seed/tv1/800/800',
    images: ['https://picsum.photos/seed/tv1/800/800']
  },
  { 
    id: '12', 
    name: 'Cricket Bat - Grade A', 
    category: 'sports', 
    subCategory: 'ক্রিকেট ও ফুটবল',
    price: 3500, 
    stock: 12, 
    unit: 'Pcs', 
    rating: 4.8, 
    image: 'https://picsum.photos/seed/cricket1/800/800',
    images: ['https://picsum.photos/seed/cricket1/800/800']
  },
  { 
    id: '13', 
    name: 'Baby Diapers (Large)', 
    category: 'baby', 
    subCategory: 'শিশুর যত্ন',
    price: 1250, 
    stock: 40, 
    unit: 'Pack', 
    rating: 4.6, 
    image: 'https://picsum.photos/seed/diaper1/800/800',
    images: ['https://picsum.photos/seed/diaper1/800/800']
  },
  { 
    id: '14', 
    name: 'Napa Extend', 
    category: 'pharmacy', 
    subCategory: 'ওষুধ',
    price: 25, 
    stock: 500, 
    unit: 'Leaf', 
    rating: 4.9, 
    image: 'https://picsum.photos/seed/medicine1/800/800',
    images: ['https://picsum.photos/seed/medicine1/800/800']
  },
  { 
    id: '15', 
    name: 'Wooden King Bed', 
    category: 'home_decor', 
    subCategory: 'ফার্নিচার',
    price: 45000, 
    stock: 3, 
    unit: 'Pcs', 
    rating: 4.8, 
    image: 'https://picsum.photos/seed/bed1/800/800',
    images: ['https://picsum.photos/seed/bed1/800/800']
  },
  { 
    id: '16', 
    name: 'Premium Modular Helmet', 
    category: 'auto_accessories', 
    subCategory: 'বাইক এক্সেসরিজ',
    price: 4500, 
    stock: 20, 
    unit: 'Pcs', 
    rating: 4.9, 
    image: 'https://picsum.photos/seed/helmet1/800/800',
    images: ['https://picsum.photos/seed/helmet1/800/800']
  },
  { 
    id: '17', 
    name: 'Car Wax/Polish Kit', 
    category: 'auto_accessories', 
    subCategory: 'গাড়ির যত্ন ও ক্লিনিং',
    price: 1200, 
    stock: 15, 
    unit: 'Set', 
    rating: 4.7, 
    image: 'https://picsum.photos/seed/carwax1/800/800',
    images: ['https://picsum.photos/seed/carwax1/800/800']
  },
  { 
    id: '18', 
    name: 'Wholesale Rice (500kg)', 
    category: 'wholesale', 
    subCategory: 'নিত্যপণ্য',
    price: 32000, 
    stock: 50, 
    unit: 'Bulk', 
    rating: 4.8, 
    image: 'https://picsum.photos/seed/ricebulk1/800/800',
    images: ['https://picsum.photos/seed/ricebulk1/800/800']
  },
  { 
    id: '19', 
    name: 'Wholesale T-Shirts (100 Pcs)', 
    category: 'wholesale', 
    subCategory: 'ফ্যাশন',
    price: 15000, 
    stock: 30, 
    unit: 'Bundle', 
    rating: 4.6, 
    image: 'https://picsum.photos/seed/tshirtbulk1/800/800',
    images: ['https://picsum.photos/seed/tshirtbulk1/800/800']
  },
];
