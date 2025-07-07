"use client";
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import { ItemsMenuMobile } from "./items-menu-mobile";
import { ToggleTheme } from "./toggle-theme";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";

export const Navbar = () => {
  const router = useRouter();
  const cart = useCart();
  const { lovedItems } = useLovedProducts();

  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      <h1 className="text-3xl" onClick={() => router.push("/")}>
        Coffe
        <span className="font-bold">Dream</span>
      </h1>

      {/* menu desktop */}
      <div className="items-center justify-between hidden sm:flex">
        <MenuList></MenuList>
      </div>

      {/* menu mobile */}
      <div className="flex sm:hidden">
        <ItemsMenuMobile></ItemsMenuMobile>
      </div>

      <div className="flex items-center justify-between gap-2 sm:gap-7">
        {cart.items.length == 0 ? (
          <ShoppingCart
            strokeWidth="1"
            className="cursor-pointer"
            onClick={() => router.push("/cart")}
          ></ShoppingCart>
        ) : (
          <div className="flex gap-1" onClick={() => router.push("/cart")}>
            <BaggageClaim
              strokeWidth={1}
              className="cursor-pointer"
            ></BaggageClaim>
            <span>{cart.items.length}</span>
          </div>
        )}

        <Heart
          strokeWidth="1"
          className={`cursor-pointer ${
            lovedItems.length > 0 && "fill-black dark:fill-white"
          }`}
          onClick={() => router.push("/loved-products")}
        ></Heart>

        <User strokeWidth="1" className="cursor-pointer"></User>
        <ToggleTheme></ToggleTheme>
      </div>
    </div>
  );
};
