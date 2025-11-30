import React from 'react';
import Link from 'next/link';

interface CategoryCardProps {
  category: {
    name: string;
    imageUrl: string;
    href: string;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link href={category.href} className="group relative">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-center text-gray-700">{category.name}</h3>
    </Link>
  );
};

export default CategoryCard;
