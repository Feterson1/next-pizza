import { Container, Filters, Title, TopBar } from '@/components/shared';
import { ProductCard } from '@/components/shared/product-card';
import { ProductGroupList } from '@/components/shared/product-group-list';

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title size="lg" className="font-extrabold" text="Все пиццы" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title={'Пиццы'}
                items={[
                  {
                    id: 1,
                    name: 'Береке Ет',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: 'Береке Ет',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: 'Береке Ет',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: 'Береке Ет',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: 'Береке Ет',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: 'Береке Ет',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: 'Береке Ет',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                    items: [{ price: 500 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductGroupList
                title={'Завтраки'}
                items={[
                  {
                    id: 1,
                    name: 'Береке Ет',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: 'Береке Ет',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: 'Береке Ет',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: 'Береке Ет',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: 'Береке Ет',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: 'Береке Ет',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: 'Береке Ет',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF1CB7AB16CECF87C419EF9EEFACA0.avif',
                    items: [{ price: 500 }],
                  },
                ]}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
