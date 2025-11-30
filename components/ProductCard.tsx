import React from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { formatPrice } from '@/lib/formatPrice';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const onSale = product.originalPrice && product.originalPrice > product.price;
  const salePercentage = onSale ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100) : 0;

  return (
    <Link href={`/products/${product.slug}`} className="group relative">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
        {onSale && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            Sale
          </div>
        )}
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <div className="mt-1 flex items-baseline space-x-2">
        {onSale && (
          <p className="text-lg font-medium text-gray-900">{formatPrice(product.price)}</p>
        )}
        <p className={`text-lg font-medium ${onSale ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
          {formatPrice(onSale ? product.originalPrice! : product.price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
