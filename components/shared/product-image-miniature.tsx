import { ProductType } from "@/types/productos";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductImageMiniatureProps {
  product: ProductType;
}

export const ProductImageMiniature = (props: ProductImageMiniatureProps) => {
  const { product } = props;
  const router = useRouter();
  const images = product.images ?? [];

  return (
    <div onClick={() => router.push(`/product/${product.slug}`)}>
      {images.length > 0 && (
        <Image
          src={images[0] ?? "/placeholder.jpg"}
          alt="Producto"
          className="overflow-hidden rounded-md sm:w-auto sm:h-32 object-cover"
          width={100}
          height={100}
        />
      )}
    </div>
  );
};
