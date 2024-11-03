'use client';

import { cn } from '@/shared/lib/utils';
import { Api } from '@/shared/services/api-client';
import { Product } from '@prisma/client';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useClickAway, useDebounce } from 'react-use';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchWord, setSearchWord] = useState('');
  useClickAway(ref, () => {
    setFocused(false);
  });
  const onClickItem = () => {
    setFocused(false);
    setSearchWord('');
    setProducts([]);
  };
  useDebounce(
    async () => {
      try {
        Api.products.search(searchWord).then((items) => {
          setProducts(items);
        });
      } catch (error) {
        console.log(error);
      }
    },
    300,
    [searchWord],
  );
  return (
    <>
      {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}
      <div ref={ref} className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30')}>
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          type="text"
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          placeholder="Найти пиццу......"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          onFocus={() => setFocused(true)}
        />
        {products.length > 0 && (
          <div
            className={cn(
              'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
              focused && 'visible opacity-100 top-12',
            )}>
            {products.map((product, idx) => (
              <Link
                onClick={onClickItem}
                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                key={idx}
                href={`/product/${product.id}`}>
                <img className="rounded-sm h-8 w-8" src={product.imageUrl} alt={product.name} />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
