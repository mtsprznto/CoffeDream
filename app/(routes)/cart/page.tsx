"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { CartItem } from "./components/cart-item";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "@/api/payment";

export default function Page() {
  const { items, removeAll } = useCart();
  const prices = items.map((product) => product.price);
  const totalPrice = prices.reduce((total, price) => total + price, 0);
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
  );

  
  
  //console.log("ITEMS",items);
  

  const buyStripe = async () => {
    try {
      const stripe = await stripePromise;

      

      const res = await makePaymentRequest.post("/api/orders", {
        products: items
      })
      
      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id
      })

      removeAll()


    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-5 text-3xl font-bold">Shopping Cart</h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        <div>
          {items.length == 0 && <p>No hay productos en el carrito</p>}
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} product={item}></CartItem>
            ))}
          </ul>
        </div>
        <div className="max-w-xl ">
          <div className="p-6 rounded-lg bg-[#070707de] text-white dark:bg-[#e6dcdc] dark:text-black">
            <p className="mb-3 text-lg font-semibold">Resumen: </p>
            <Separator className=""></Separator>
            <div className="flex justify-between gap-5 my-4">
              <p>Precio Total</p>
              <p>{formatPrice(totalPrice)}</p>
            </div>
            <div className="flex items-center justify-center w-full mt-3 ">
              <Button
                className="dark:bg-black dark:text-white w-full cursor-pointer dark:hover:bg-emerald-950"
                onClick={buyStripe}
              >
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
