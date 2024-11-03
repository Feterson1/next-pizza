import { cn } from '@/shared/lib/utils';
import { Title } from '../title';
import { Button } from '../../ui';

interface Props {
  imageUrl: string;
  name: string;
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({ className, imageUrl, name, onClickAdd }) => {
  const textDetails = '30 см, традиционное тесто 30';
  const totalPrice = 350;
  return (
    <div className={cn('flex flex-1', cn)}>
      <div className={cn('flex items-center justify-center flex-1 relative w-full', className)}>
        <img
          src={imageUrl}
          alt={name}
          className={cn(
            'relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]',
          )}
        />
      </div>
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          {' '}
          Добавить в корзину за {totalPrice} Р
        </Button>
      </div>
    </div>
  );
};
