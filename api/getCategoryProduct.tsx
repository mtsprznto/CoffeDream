import { useEffect, useState } from "react";
import supabase from "@/lib/supabaseClient";
import { ProductType } from "@/types/productos";

export function useGetCategoryProduct(slug: string | string[]) {
  const [result, setResult] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      console.log("🔍 Buscando categoría con slug:", slug);

      // 1️⃣ Buscar ID de la categoría
      const { data: categoryData, error: categoryError } = await supabase
        .from("Category")
        .select("id")
        .eq("slug", slug)
        .single();

      if (categoryError || !categoryData) {
        console.error("❌ No se encontró la categoría:", categoryError);
        setError(categoryError?.message || "Categoría no encontrada");
        setLoading(false);
        return;
      }

      console.log("📦 categoryData:", categoryData);

      // 2️⃣ Buscar productos con ese categoryId
      const { data: productsData, error: productError } = await supabase
        .from("Product")
        .select(
          `
          id,
          productName,
          slug,
          description,
          images,
          price,
          taste:tasteId (name),
          origin:originId (name),
          category:categoryId (categoryName, slug)
        `
        )
        .eq("categoryId", categoryData.id);

      if (productError) {
        console.error("❌ Error al traer productos:", productError);
        setError(productError.message);
      } else {
        console.log("📦 productsData:", productsData);

        const normalized = (productsData ?? []).map((product) => ({
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

    if (slug) fetchProducts();
  }, [slug]);

  return { loading, result, error };
}
