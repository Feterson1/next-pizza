import { prisma } from '@/prisma/prisma-client';
import { updateCartTotalAmount } from '@/shared/lib/update-cart-total-amount';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    const data = (await req.json()) as { quantity: number };
    console.log(data);
    const token = req.cookies.get('cartToken')?.value;
    if (!token) {
      return NextResponse.json({ message: 'CartToken not found' });
    }
    const cartItem = await prisma.cart.findFirst({
      where: {
        id,
      },
    });
    if (!cartItem) {
      return NextResponse.json({ message: 'CartItem not found' });
    }

    await prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        quantity: data.quantity,
      },
    });
    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.log('[CART_PATCH SERVER ERROR', error);

    return NextResponse.json({ message: 'Не удалось обновить корзину' }, { status: 500 });
  }
}