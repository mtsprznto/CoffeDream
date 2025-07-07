import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductType } from "@/types/productos";
import Image from "next/image";

type CarouselProductProps = {
  product: ProductType;
};

export const CarouselProduct = ({ product }: CarouselProductProps) => {
  const images = product.images ?? [];

  return (
    <div className="sm:px-16">
      <Carousel>
        <CarouselContent>
          {images.map((imageUrl, index) => (
            <CarouselItem key={index}>
              <Image
                src={imageUrl ?? "/placeholder.jpg"}
                alt={`Imagen de ${product.productName}`}
                width={400}
                height={400}
              ></Image>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious></CarouselPrevious>
        <CarouselNext></CarouselNext>
      </Carousel>
    </div>
  );
};
