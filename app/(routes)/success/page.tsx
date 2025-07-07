"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {

    const router = useRouter()

    return(
        <div className="max-w-5xl p-4 mx-auto sm:py-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center md:min-w-[400px]">
                    <Image src="/success.jpg" alt="Success" width={250} height={500} className="rounded-lg"></Image>
                </div>

                <div>
                    <h1 className="text-3xl">¡Gracias por tu compra!</h1>
                    <p className="my-3">En breve, nuestro equipo se pondra manos a la obra para seleccionar los granos mas frescos y preparar tu envio con cuidado y dedicación</p>
                    <p className="my-3">Gracias de nuevo por confiar en nosotros</p>
                    <p className="my-3">¡Disfruta del café!</p>
                    <Button onClick={()=>router.push("/")} className="mb-4">Volver a la tienda</Button>
                </div>
            </div>
        </div>
    )
}