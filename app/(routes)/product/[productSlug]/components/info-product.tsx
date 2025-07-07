import { ProductTasteOrigin } from "@/components/shared/product-taste-origin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/productos";
import { HeartIcon } from "lucide-react";

export type InfoProductsProps = {
  product: ProductType;
};

export const InfoProduct = (props: InfoProductsProps) => {
  const { product } = props;
  
  const { addItem } = useCart();
  const { addLoveItem } = useLovedProducts();



  //console.log(lovedItems);

  return (
    <div className="px-6">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl py-4">{product.attributes.productName}</h1>
        <ProductTasteOrigin product={product}></ProductTasteOrigin>
      </div>
      <Separator className="my-4"></Separator>
      <p>{product.attributes.description}</p>
      <Separator className="my-4"></Separator>
      <p className="my-4 text-2xl">{formatPrice(product.attributes.price)}</p>
      <div className="flex items-center gap-5">
        <Button className="cursor-pointer" onClick={() => addItem(product)}>
          Comprar
        </Button>
        <HeartIcon
          width={30}
          strokeWidth={1}
          className="transition duration-300 cursor-pointer hover:fill-black"
          onClick={() => addLoveItem(product)}
        />
      </div>
    </div>
  );
};
