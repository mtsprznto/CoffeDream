
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backendcoffedream.onrender.com', // Valor predeterminado en caso de que la variable esté ausente
        port: process.env.NEXT_PUBLIC_BACKEND_URL
          ? new URL(process.env.NEXT_PUBLIC_BACKEND_URL).port || ''
          : '1337', // Valor predeterminado en caso de que la variable esté ausente
        pathname: '/uploads/**', // Ajusta la ruta según tus necesidades
      },
    ],
  },



};

export default nextConfig;
