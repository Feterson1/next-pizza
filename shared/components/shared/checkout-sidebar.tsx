import React from 'react';
import { WhiteBlock } from './white-block';
import { CheckoutItemDetails } from './checkout-item-details';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { Button } from '../ui';

interface Props {
  className?: string;
  totalAmount: number;
}
const VAT = 15;
const DELIVERY_PRICE = 300;

export const CheckoutSidebar: React.FC<Props> = ({ className, totalAmount }) => {
  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;
  return (
    <WhiteBlock className="p-6 sticky top-4">
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого:</span>
        <span className="text-[34px] font-extrabold">{totalPrice} ₽</span>
      </div>
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package size={16} className="mr-2 text-gray-400" /> Стоимость товаров:
          </div>
        }
        value={`${totalAmount}`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent size={16} className="mr-2 text-gray-400" /> Налоги:
          </div>
        }
        value={`${vatPrice}`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck size={16} className="mr-2 text-gray-400" /> Доставка:
          </div>
        }
        value={`${DELIVERY_PRICE}`}
      />
      <Button
        type="submit"
        // disabled={!totalAmount || submitting}
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold">
        Перейти к оплате
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};
