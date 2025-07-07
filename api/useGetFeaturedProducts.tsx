import { useEffect, useState } from "react";
import supabase from "@/lib/supabaseClient";
import { ProductType } from "@/types/productos";

export function useGetFeaturedProducts() {
  const [result, setResult] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("Product")
        .select(
          `
          id,
          productName,
          slug,
          description,
          images,
          price,
          origin:originId (
            name
          ),
          taste:tasteId (
            name
          ),
          category:categoryId (
            categoryName,
            slug,
            mainImage
          )
        `
        )
        .eq("isFeatured", true);

      if (error) {
        setError(error.message);
      } else {
        const normalized = (data ?? []).map((product) => ({
          ...product,
          taste: Array.isArray(product.taste)
            ? product.taste[0]
            : product.taste,
          origin: Array.isArray(product.origin)
            ? product.origin[0]
            : product.origin,
          category: Array.isArray(product.category)
            ? product.category[0]
            : product.category,
        }));

        setResult(normalized);
      }

      setLoading(false);
    };

    fetchProducts();
  }, []);

  return { loading, result, error };
}
