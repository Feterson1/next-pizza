'use client';
import { ProductWithRelations } from '@/@types/prisma';
import { useCartStore } from '@/shared/store';
import React from 'react';
import toast from 'react-hot-toast';
import { ChoosePizzaForm } from './modals/choose-pizza-form';
import { ChooseProductForm } from './modals/choose-product-form';
import { useRouter } from 'next/navigation';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ProductForm: React.FC<Props> = ({ className, product }) => {
  const { addCartItem, loading } = useCartStore((state) => state);

  const router = useRouter();

  const isPizzaForm = Boolean(product.items[0].size);

  const firstItem = product.items[0];

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({ productItemId: itemId, ingredients });
      toast.success(`${product.name} добавлена в корзину!`);
      router.back();
    } catch (error) {
      toast.error('Не удалось добавить товар в корзину');
      console.error(error);
    }
  };
  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        items={product.items}
        ingredients={product.ingredients}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }
  return (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      onSubmit={onSubmit}
      price={firstItem.price}
      loading={loading}
    />
  );
};
