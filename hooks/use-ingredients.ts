import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import { useEffect, useState } from 'react';

export const useIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();

        setIngredients(ingredients);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchIngredients();
  }, []);

  const setSelectedIngredients = (ids: string[]) => {
    ids.forEach((id) => {
      selectedIds.add(id);
    });
  };
  return {
    ingredients,
    loading,
  };
};
