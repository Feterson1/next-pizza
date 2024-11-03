'use client';
import { cn } from '@/shared/lib/utils';
import React from 'react';
import { PizzaImage } from '../pizza-image';
import { Title } from '../title';
import { Button } from '@/shared/components/ui';
import { GrouptVariants } from '../groupt-variants';
import { PizzaSize, PizzaType, pizzaTypes } from '../../contstants';
import { Ingredient, ProductItem } from '@prisma/client';
import { IngredientComponent } from '../ingredient';
import { getPizzaDetails, usePizzaOptions } from '@/shared/lib';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  onClickAddCart?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  className,
  imageUrl,
  name,
  ingredients,
  items,
  onClickAddCart,
}) => {
  const { size, type, selectedIngredients, availableSizes, setSize, setType, addIngredient } =
    usePizzaOptions(items);

  const { totalPrice, textDetails } = getPizzaDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients,
  );

  const handleClickAdd = () => {
    onClickAddCart?.();
    console.log({
      size,
      type,
      ingredients: selectedIngredients,
    });
  };

  return (
    <div className={cn('flex flex-1', cn)}>
      <PizzaImage src={imageUrl} size={size} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <div className="flex flex-col gap-4 mt-5">
          <GrouptVariants
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GrouptVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {ingredients.map((ingredient) => (
            <IngredientComponent
              key={ingredient.id}
              imageUrl={ingredient.imageUrl}
              name={ingredient.name}
              price={ingredient.price}
              onClick={() => addIngredient(ingredient.id)}
              active={selectedIngredients.has(ingredient.id)}
            />
          ))}
        </div>
        <Button
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
          onClick={handleClickAdd}>
          Добавить в корзину за {totalPrice} Р
        </Button>
      </div>
    </div>
  );
};
