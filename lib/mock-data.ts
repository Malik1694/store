import { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Elegant Gold Necklace',
    slug: 'elegant-gold-necklace',
    price: 12500,
    originalPrice: 15000,
    description: 'A stunning 24k gold necklace, perfect for any occasion. This piece is handcrafted by master jewelers and features a unique, intricate design.',
    imageUrl: 'https://via.placeholder.com/400x400.png/000000/FFFFFF?text=Jewellery',
    category: 'Jewellery',
  },
  {
    id: '2',
    name: 'Silver Charm Bracelet',
    slug: 'silver-charm-bracelet',
    price: 7500,
    description: 'A beautiful sterling silver bracelet that can be customized with our wide range of charms. A perfect gift for a loved one.',
    imageUrl: 'https://via.placeholder.com/400x400.png/000000/FFFFFF?text=Jewellery',
    category: 'Jewellery',
  },
  {
    id: '3',
    name: 'Leather Strap Watch',
    slug: 'leather-strap-watch',
    price: 22000,
    originalPrice: 25000,
    description: 'A classic timepiece with a genuine leather strap and a stainless steel case. Features a minimalist design that is both stylish and functional.',
    imageUrl: 'https://via.placeholder.com/400x400.png/000000/FFFFFF?text=Accessory',
    category: 'Accessories',
  },
    {
    id: '4',
    name: 'Silk Scarf',
    slug: 'silk-scarf',
    price: 4500,
    description: 'A luxurious 100% silk scarf with a vibrant, hand-painted design. Can be worn in a variety of styles.',
    imageUrl: 'https://via.placeholder.com/400x400.png/000000/FFFFFF?text=Accessory',
    category: 'Accessories',
  },
];
