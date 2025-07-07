# CoffeDream ☕

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)

CoffeDream es una moderna plataforma de comercio electrónico especializada en la venta de café de alta calidad. La aplicación ofrece una experiencia de compra fluida con características como búsqueda de productos, carrito de compras, favoritos y pagos seguros a través de Stripe.

## Características Principales

- 🛍️ Catálogo de productos con filtros por categoría, origen y tipo de tostado
- 🔍 Búsqueda de productos
- 🛒 Carrito de compras persistente
- ❤️ Lista de favoritos
- 💳 Pago seguro con Stripe
- 🌓 Modo oscuro/claro
- 📱 Diseño responsive
- ⚡ Optimizado para rendimiento

## Tecnologías Utilizadas

- **Frontend**: Next.js 14 con App Router
- **Estilización**: Tailwind CSS
- **Tipado**: TypeScript
- **Estado**: React Context API
- **Pagos**: Stripe
- **Base de datos**: Supabase
- **Autenticación**: NextAuth.js
- **UI Components**: shadcn/ui
- **Animaciones**: Framer Motion

## Requisitos del Sistema

- Node.js 18.0 o superior
- npm o yarn
- Cuenta de Stripe
- Cuenta de Supabase

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/coffeedream.git
   cd coffeedream
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=tu_clave_publica_de_stripe
   STRIPE_SECRET_KEY=tu_clave_secreta_de_stripe
   STRIPE_WEBHOOK_SECRET=tu_webhook_secret_de_stripe
   NEXTAUTH_SECRET=tu_secreto_para_nextauth
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

```
coffeedream/
├── app/                    # Rutas de la aplicación
│   ├── (routes)/           # Rutas públicas
│   ├── api/                # Endpoints de la API
│   └── globals.css         # Estilos globales
├── components/             # Componentes reutilizables
├── lib/                    # Utilidades y configuraciones
├── public/                 # Archivos estáticos
├── types/                  # Tipos de TypeScript
└── prisma/                 # Esquema de la base de datos
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta ESLint
- `npm run format` - Formatea el código con Prettier



## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue o contactar al equipo de desarrollo.

---

Desarrollado con ❤️ por MtsPrz