import { useEffect, useState } from "react"
import supabase from "@/lib/supabaseClient"


type BannerMessage = {
    id: number
    title: string
    description: string
    link?: string
    active: boolean
}


export const useBannerMessages = () => {
    const [messages, setMessages] = useState<BannerMessage[]>([])


    useEffect(() => {
        const fetchBanners = async () => {
            const { data, error } = await supabase
                .from("BannerMessage")
                .select("*")
                .eq("active", true)

            if (!error && data) setMessages(data as BannerMessage[])
        }

        fetchBanners()
    }, [])

    return messages
}