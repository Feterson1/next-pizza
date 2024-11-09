import { create } from 'zustand';
import { Api } from '../services/api-client';
import { CartStateItem, getCartItemsDetails } from '../lib/get-cart-details';

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];
  //   Получение товаров из корзины
  fetchCartItems: () => Promise<void>;
  //  Запрос на  обновление количества товара
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  //  Запрос на  добавление количества товара
  addCartItem: (values: any) => Promise<void>;
  //  Запрос на  удаление количества товара
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  error: false,
  loading: false,
  totalAmount: 0,

  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });

      const data = await Api.cart.getCart();

      set(getCartItemsDetails(data));
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  updateItemQuantity: async (id: number, quantity: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.updateItemQuantity(id, quantity);
      set(getCartItemsDetails(data));
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  removeCartItem: async (id: number) => {},

  addCartItem: async (values: any) => {},
}));