"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { SkeletonSchema } from "./skeletonSchema";
import { ProductType } from "@/types/productos";
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import { IconButton } from "./icon-button";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";
import Image from "next/image";

export const FeaturedProducts = () => {
  const { loading, result }: ResponseType<ProductType[]> = useGetFeaturedProducts();

  const router = useRouter();
  const { addItem } = useCart();

  console.log(result);
  

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3}></SkeletonSchema>}

          {result !== null &&
            result.map((product: ProductType) => {
              const imageUrl = product.images?.[0] ?? "/placeholder.jpg";
              return (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3 group"
                >
                  <div className="p-1">
                    <Card className="pt-3 md:pt-0 shadow-none w-79 h-110">
                      <CardContent className="relative flex items-center justify-center">
                        <Image
                          src={imageUrl}
                          alt={product.productName || "Producto destacado"}
                          className="rounded-[10px] w-80 h-80 object-cover"
                          width={370}
                          height={370}
                        ></Image>
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                          <div className="flex justify-center gap-x-6">
                            <IconButton
                              onClick={() =>
                                router.push(`/product/${product.slug}`)
                              }
                              icon={<Expand size={20} />}
                              className="text-gray-600"
                            />

                            <IconButton
                              onClick={() => addItem(product)}
                              icon={<ShoppingCart size={20} />}
                              className="text-gray-600"
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className="flex justify-between gap-4 px-8">
                        <h3 className="md:text-[15px] text-[13px] font-bold">
                          {product.productName}
                        </h3>
                        <div className="flex items-center justify-between gap-3">
                          <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit text-[13px] md:text-[15px]">
                            {product.taste?.name}
                          </p>
                          <p className="px-2 py-1 text-white bg-yellow-900 rounded-full text-[13px] md:text-[15px]">
                            {product.origin?.name}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious></CarouselPrevious>
        <CarouselNext className="hidden sm:flex"></CarouselNext>
      </Carousel>
    </div>
  );
};
