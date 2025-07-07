import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductType } from "@/types/productos";
import Image from "next/image";



export const CarouselProduct = (props: ProductType) => {
  const { attributes } = props;
  const images = attributes.images.data || [];
  //console.log("IMAGES: ", attributes);

  return (
    <div className="sm:px-16">
      <Carousel>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
                alt={`Image ${image.id}`}
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
