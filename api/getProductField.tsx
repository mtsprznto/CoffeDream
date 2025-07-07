import { useEffect, useState } from "react";
import supabase from "@/lib/supabaseClient";
import { ResultFilterTypes } from "@/types/filters";

export function useGetProductoField() {
  const [result, setResult] = useState<ResultFilterTypes>({
    taste: [],
    origin: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const [tasteRes, originRes] = await Promise.all([
          supabase.from("Taste").select("id, name"),
          supabase.from("Origin").select("id, name"),
        ]);

        if (tasteRes.error || originRes.error) {
          setError(
            tasteRes.error?.message ||
              originRes.error?.message ||
              "Error al cargar filtros"
          );
        } else {
          setResult({
            taste: tasteRes.data ?? [],
            origin: originRes.data ?? [],
          });
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Error inesperado");
        }
      }

      setLoading(false);
    };

    fetchFields();
  }, []);

  return { loading, result, error };
}
