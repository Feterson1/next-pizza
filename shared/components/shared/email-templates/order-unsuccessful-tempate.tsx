import { CartItemDTO } from '@/shared/services/dto/cart.dto';
import * as React from 'react';

interface Props {
  orderId: number;
  items: CartItemDTO[];
}

export const OrderUnsuccesTemplate: React.FC<Props> = ({ orderId, items }) => (
  <div>
    <h1>Не удалось оплатить заказ!</h1>
    <p>Ваш заказ №{orderId}. Список товаров:</p>
    <hr />
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.productItem.product.name} | {item.productItem.price}
        </li>
      ))}
    </ul>
  </div>
);
