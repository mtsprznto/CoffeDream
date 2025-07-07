import { PrismaClient } from "../lib/generated/prisma"

const prisma = new PrismaClient()

async function main() {
    const originCount = await prisma.origin.count()
    if (originCount === 0) {
        await prisma.origin.createMany({
            data: [{ name: "Colombia" }, { name: "Bolivia" }],
        })
        // ✅ Sabores
        await prisma.taste.createMany({
            data: [
                { name: "Oscuro" },
                { name: "Medio" },
            ],
        })
        // ✅ Categorías
        await prisma.category.createMany({
            data: [
                { categoryName: "Grano", slug: "grano", mainImage: "/images/grano.jpg" },
                { categoryName: "Molido", slug: "molido", mainImage: "/images/molido.jpg" },
            ],
        })

        // ✅ Banners
        await prisma.bannerMessage.createMany({
            data: [
                {
                    title: "Envio en 24/48 h",
                    description: "Como cliente VIP, tus envíos se entregan en 24/48 horas. Obtén más información.",
                    link: "#",
                    active: true,
                },
                {
                    title: "Garantía de Satisfacción",
                    description: "Si no estás completamente satisfecho, te devolvemos tu dinero sin preguntas.",
                    link: "#",
                    active: true,
                },
            ],
        })
    }






    // ✅ Productos destacados
    const origins = await prisma.origin.findMany()
    const tastes = await prisma.taste.findMany()
    const categories = await prisma.category.findMany()

    const sampleImages = [
        "/placeholder.jpg",
        "/images/product1.jpg",
        "/images/product2.jpg",
        "/images/product3.jpg",
        "/images/product4.jpg",
    ]

    await prisma.product.createMany({
        data: Array.from({ length: 10 }).map((_, i) => ({
            productName: `Café Especial ${i + 1}`,
            slug: `cafe-especial-${i + 1}`,
            description: `Una mezcla única de granos tostados de alta calidad.`,
            active: true,
            price: 11990 + i * 500,
            isFeatured: true,
            originId: origins[i % origins.length]?.id,
            tasteId: tastes[i % tastes.length]?.id,
            categoryId: categories[i % categories.length]?.id,
            images: [sampleImages[i % sampleImages.length]],
        })),
    })


}

main()
    .then(() => {
        console.log("✅ Seed ejecutado con éxito")
        return prisma.$disconnect()
    })
    .catch((error) => {
        console.error("❌ Error en el seed:", error)
        return prisma.$disconnect()
    })