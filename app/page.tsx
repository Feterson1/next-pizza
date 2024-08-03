import { Categories, Container, SortPopup, Title } from '@/components/shared';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title size="lg" className="font-extrabold" text="Все пиццы" />
        <Categories />
        <SortPopup />
      </Container>
    </>
  );
}
