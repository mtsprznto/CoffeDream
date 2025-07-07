// api/useGetCategoriesSimple.ts
import { useEffect, useState } from "react"
import supabase from "@/lib/supabaseClient"

type CategorySimple = {
    id: number
    categoryName: string
    slug: string
}

export function useGetCategoriesSimple() {
    const [result, setResult] = useState<CategorySimple[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchCategories = async () => {
            const { data, error } = await supabase
                .from("Category")
                .select("id, categoryName, slug")

            if (error) {
                setError(error.message)
            } else {
                setResult(data ?? [])
            }

            setLoading(false)
        }

        fetchCategories()
    }, [])

    return { result, loading, error }
}