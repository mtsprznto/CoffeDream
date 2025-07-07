import { useEffect, useState } from "react";
import supabase from "@/lib/supabaseClient";
import { Category } from "@/types/category";

export function useGetCategories() {
  const [result, setResult] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from("Category")
        .select("id, categoryName, slug, mainImage");

      if (error) {
        setError(error.message);
      } else {
        setResult(data ?? []);
      }

      setLoading(false);
    };

    fetchCategories();
  }, []);

  return { loading, result, error };
}
