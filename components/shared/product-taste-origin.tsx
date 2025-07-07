import { ProductType } from "@/types/productos";

interface ProductTasteOriginProps {
  product: ProductType;
}

export const ProductTasteOrigin = (props: ProductTasteOriginProps) => {
  const { product } = props;
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
        {product.taste?.name}
      </p>
      <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">
        {product.origin?.name}
      </p>
    </div>
  );
};
