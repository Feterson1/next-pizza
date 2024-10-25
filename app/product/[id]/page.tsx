'use client';
import { Container, PizzaImage, Title } from '@/components/shared';
import { GrouptVariants } from '@/components/shared/groupt-variants';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      category: true,
      ingredients: true,
    },
  });
  if (!product) {
    return notFound();
  }
  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <PizzaImage src={product.imageUrl} className="" size={40} />
        <div className="w-[490px] bg-[#f3f1f1] p-7">
          <Title text={product.name} size="md" className="font-extrabold mb-1" />
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sequi sunt provident
            deserunt earum iusto rerum beatae nostrum id, corporis facere fugit voluptatum, error
            necessitatibus ipsa vero pariatur aspernatur tempora?
          </p>
          <GrouptVariants
            selectedValue="2"
            items={[
              { name: 'Маленькая', value: '1' },
              { name: 'Средняя', value: '2' },
              { name: 'Большая', value: '3', disabled: true },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
